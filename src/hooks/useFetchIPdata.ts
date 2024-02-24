import { useState, useEffect, useRef } from 'react';
import { IPdetection } from '../types/types';

const useFetchIPdata = (address: string | null) => {
  const [ipDetection, setIpDetection] = useState<IPdetection | null>(null)
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (!address || !address.trim()) {
      setIpDetection(null);
      setError(null);
      return;
    }

    const fetchIPdata = async () => {
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();
      const URL = `https://geo.ipify.org/api/v2/country,city?apiKey=at_cUPj2f0bhrRzFT0PpnnCj5DbknWzm&ipAddress=${address}`;

      setIsLoading(true);

      try {
        const res = await fetch(URL, {
          signal: abortControllerRef.current.signal,
        });

        if (!res.ok) {
          const message = res.status === 422 ? "Invalid IP address format." : "An error occurred.";
          setError(message);
          setIpDetection(null);
          return;
        }

        const data = await res.json() as IPdetection;
        setIpDetection(data);
        setError(null);

      } catch (error: any) {
        if (error.name === "AbortError") return;
        setError(error.message);
        setIpDetection(null);
        
      } finally {
        setIsLoading(false);
      }
    };

    fetchIPdata();

    return () => abortControllerRef.current?.abort();
  }, [address]);

  return { ipDetection, isLoading, error };
};

export default useFetchIPdata;
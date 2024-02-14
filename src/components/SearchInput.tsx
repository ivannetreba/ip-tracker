import {
  Input,
  InputGroup,
  InputRightElement,
  Image,
  Text,
  Box,
  Spinner,
} from "@chakra-ui/react";
import arrowIcon from "../assets/images/icon-arrow.svg";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  ipinput: z
    .string()
    .nonempty("Can't be empty")
    .min(3, { message: "Must be 3 or more characters long" })
    .max(35, { message: "Must be 35 or fewer characters long" }),
});

type IPInput = z.infer<typeof schema>;

interface Props {
  address: (newAddress: string) => void;
  isLoading: boolean;
}

const SearchInput = ({ address, isLoading }: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IPInput>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<IPInput> = (data) => {
    address(data.ipinput);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        px="24px"
        m={"auto"}
        mb={["24px", "48px"]}
        w={["375px", null, "555px"]}
      >
        <Box h={"20px"} w={"100%"} mb={"5px"}>
          {errors.ipinput && <Text color="red">{errors.ipinput.message}</Text>}
        </Box>
        <InputGroup>
          <Input
            border="none"
            borderRadius="15px"
            bg="white"
            type="text"
            h="58px"
            placeholder="Search for IP address or domain"
            {...register("ipinput")}
          />
          <InputRightElement
            bg="black"
            borderTopRightRadius="15px"
            borderBottomRightRadius="15px"
            h="58px"
            w="58px"
          >
            {isLoading ? (
              <Spinner color="white" />
            ) : (
              <button type="submit">
                <Image src={arrowIcon} />
              </button>
            )}
          </InputRightElement>
        </InputGroup>
      </Box>
    </form>
  );
};

export default SearchInput;

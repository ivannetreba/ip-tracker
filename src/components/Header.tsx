import SearchInput from "./SearchInput";
import HeaderContainer from "./styleComponents/HeaderContainer";
import HeaderHeading from "./styleComponents/HeaderHeading";

interface Props {
  address: (newAddress: string) => void;
  isLoading: boolean;
  error?: string | null;
}

const Header = ({ address, isLoading, error }: Props) => {
  return (
    <HeaderContainer>
      <HeaderHeading>IP Address Tracker</HeaderHeading>
      <SearchInput address={address} isLoading={isLoading} error={error} />
    </HeaderContainer>
  );
};

export default Header;

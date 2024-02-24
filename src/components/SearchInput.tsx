import { InputGroup, Image, Box, Spinner } from "@chakra-ui/react";
import arrowIcon from "../assets/images/icon-arrow.svg";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import SearchInputInput from "./styleComponents/SearchInputInput";
import SearchInputRightElement from "./styleComponents/SearchInputRightElement";
import SearchInputFormBox from "./styleComponents/SearchInputFormBox";
import CustomErrorText from "./styleComponents/CustomErrorText";

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
  error?: string | null;
}

const SearchInput = ({ address, isLoading, error }: Props) => {
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
      {" "}
      <SearchInputFormBox>
        <Box h={"20px"} w={"100%"} mb={"5px"}>
          {errors.ipinput && (
            <CustomErrorText>{errors.ipinput.message}</CustomErrorText>
          )}
          {error && <CustomErrorText>{error}</CustomErrorText>}
        </Box>
        <InputGroup>
          <SearchInputInput {...register("ipinput")} />
          <SearchInputRightElement>
            {isLoading ? (
              <Spinner color="white" />
            ) : (
              <button type="submit">
                <Image src={arrowIcon} />
              </button>
            )}
          </SearchInputRightElement>
        </InputGroup>
      </SearchInputFormBox>
    </form>
  );
};

export default SearchInput;

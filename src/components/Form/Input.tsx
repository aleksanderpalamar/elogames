import { forwardRef, ForwardRefRenderFunction, ReactNode } from "react";
import {
  Input as ChakraInput,
  FormLabel,
  FormControl,
  InputProps as ChakraInputProps,
  FormErrorMessage,
} from "@chakra-ui/react";
import { FieldError } from "react-hook-form";

interface InputProps extends ChakraInputProps {
  name: string;
  children?: ReactNode;
  label?: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {name, label, children, error = null, ...rest},
  ref
) => {
  return (
    <>
      <FormControl isInvalid={!!error}>
        <FormLabel htmlFor={name}>{label}</FormLabel>
        <ChakraInput 
          name={name}
          id={name}
          bg="gray.950"
          focusBorderColor="yellow.500"          
          size="lg"
          ref={ref}
          {...rest}
        />
        {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </FormControl>
    </>
  )
}

export const Input = forwardRef(InputBase);
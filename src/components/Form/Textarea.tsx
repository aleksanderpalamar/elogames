import { forwardRef, ForwardRefRenderFunction } from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea as ChakraTextarea,
  TextareaProps as ChakraTextareaProps,
} from "@chakra-ui/react";
import { FieldError } from "react-hook-form";

interface TextareaProps extends ChakraTextareaProps {
  name: string;
  label?: string;
  error?: FieldError;
}

const TextareaBase: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextareaProps
> = ({ name, label, error = null, ...rest }, ref) => {
  return (
    <>
      <FormControl isInvalid={!!error}>
        <FormLabel htmlFor={name}>{label}</FormLabel>
        <ChakraTextarea
          name={name}
          id={name}
          focusBorderColor="yellow.500"
          bgColor="gray.950"
          size="lg"
          ref={ref}
          {...rest}
        />
        {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </FormControl>
    </>
  );
};

export const Textarea = forwardRef(TextareaBase);

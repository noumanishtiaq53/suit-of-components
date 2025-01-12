"use client";

import { useFormLib } from "@/hooks/use-form-lib.hook";
import {
  signupFormFieldsDefaultValuesDynamic,
  signupFormFieldsDynamic,
  signupFormFieldsValidationSchemaDynamic,
} from "./signup.data";

export const useSignup = () => {
  const signupFormFields = signupFormFieldsDynamic();

  const formLibHookProps = {
    defaultValues: signupFormFieldsDefaultValuesDynamic,
    validationSchema: signupFormFieldsValidationSchemaDynamic,
  };

  const { methods, handleSubmit } = useFormLib(formLibHookProps);

  console.log(methods);

  const submitSignupForm = (data: any) => {
    console.log(data);
  };

  return {
    signupFormFields,
    methods,
    handleSubmit,
    submitSignupForm,
  };
};

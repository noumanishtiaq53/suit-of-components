"use client";

import { useFormLib } from "@/hooks/use-form-lib.hook";
import {
  signinFormFieldsDefaultValuesDynamic,
  signinFormFieldsDynamic,
  signinFormFieldsValidationSchemaDynamic,
} from "./signin.data";

export const useSignin = () => {
  const signinFormFields = signinFormFieldsDynamic();

  const formLibHookProps = {
    defaultValues: signinFormFieldsDefaultValuesDynamic,
    validationSchema: signinFormFieldsValidationSchemaDynamic,
  };

  const { methods, handleSubmit } = useFormLib(formLibHookProps);

  const submitSigninForm = (data: any) => {
    console.log(data);
  };

  return {
    signinFormFields,
    methods,
    handleSubmit,
    submitSigninForm,
  };
};

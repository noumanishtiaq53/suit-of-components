"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export const useFormLib = (props: any) => {
  const { defaultValues = {}, validationSchema } = props;

  const methods = useForm({
    defaultValues,
    ...(validationSchema
      ? {
          resolver: yupResolver(validationSchema),
        }
      : {}),
  });

  const { reset, handleSubmit } = methods;

  return {
    reset,
    handleSubmit,
    methods,
  };
};

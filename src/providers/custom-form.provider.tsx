'use client'

import { FormProvider } from "react-hook-form";

export const CustomFormProvider = (props: any) => {
  const { children, onSubmit, methods } = props;
  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </FormProvider>
  );
};

"use client";

import { CustomGridUI } from "@/ui/custom-grid/custom-grid.ui";
import { useSignin } from "./use-signin.hook";
import { CustomFormProvider } from "@/providers/custom-form.provider";
import { CustomTypographyUI } from "@/ui/custom-typography/custom-typography.ui";
import { CustomButtonUI } from "@/ui/custom-button/custom-button.ui";
import { CustomLink } from "@/components/custom-link/custom-link";
import { ROUTES } from "@/constants/routes.constant";

export const SigninFeature = () => {
  const { signinFormFields, methods, handleSubmit, submitSigninForm } =
    useSignin();

  return (
    <>
      <CustomTypographyUI
        textAlign="center"
        text="Account Login"
        variant="h3"
        marginY={4}
      />
      <CustomFormProvider
        methods={methods}
        onSubmit={handleSubmit(submitSigninForm)}
      >
        <CustomGridUI isContainer spacing={2}>
          {signinFormFields?.map((formField: any) => (
            <CustomGridUI md={12} lg={12} xl={12} key={formField?.id}>
              <formField.component {...formField?.componentProps} />
            </CustomGridUI>
          ))}
        </CustomGridUI>
        <br />
        <CustomButtonUI type="submit" text="Login to your Account" fullWidth />
        <br />
        <CustomTypographyUI
          textAlign="center"
          text={
            <>
              Already have an account{" "}
              <CustomLink linkRoute={ROUTES?.SIGNUP} linkText={`Signup here`} />
            </>
          }
          variant="subtitle2"
          marginY={1}
        />
      </CustomFormProvider>
    </>
  );
};

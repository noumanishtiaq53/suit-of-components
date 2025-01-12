"use client";

import { CustomGridUI } from "@/ui/custom-grid/custom-grid.ui";
import { CustomFormProvider } from "@/providers/custom-form.provider";
import { CustomTypographyUI } from "@/ui/custom-typography/custom-typography.ui";
import { CustomButtonUI } from "@/ui/custom-button/custom-button.ui";
import { useSignup } from "./use-signup.hook";
import { CustomLink } from "@/components/custom-link/custom-link";
import { ROUTES } from "@/constants/routes.constant";

export const SignupFeature = () => {
  const { signupFormFields, methods, handleSubmit, submitSignupForm } =
    useSignup();

  return (
    <>
      <CustomTypographyUI
        textAlign="center"
        text="Create your Account"
        variant="h3"
        marginY={4}
      />
      <CustomFormProvider
        methods={methods}
        onSubmit={handleSubmit(submitSignupForm)}
      >
        <CustomGridUI isContainer spacing={2}>
          {signupFormFields?.map((formField: any) => (
            <CustomGridUI md={12} lg={12} xl={12} key={formField?.id}>
              <formField.component {...formField?.componentProps} />
            </CustomGridUI>
          ))}
        </CustomGridUI>
        <br />
        <CustomButtonUI type="submit" text="Register Now" fullWidth />
        <br />
        <CustomTypographyUI
          text={
            <>
              You'll receive a confirmation email in your inbox with a link to
              activate your account. If you have any problems,{" "}
              <CustomLink
                linkRoute={ROUTES?.CONTACT_US}
                linkText={`contact us`}
              />
            </>
          }
          variant="subtitle2"
          marginY={1}
        />
      </CustomFormProvider>
    </>
  );
};

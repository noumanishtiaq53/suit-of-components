import { TextFormFields } from "@/components/form-fields";
import { CheckboxFormField } from "@/components/form-fields/checkbox-form-field";
import * as Yup from "yup";

export const signupFormFieldsDefaultValuesDynamic = {
  email: "",
  userName: "",
  password: "",
  repeatPassword: "",
  canSendUpdates: false,
};

export const signupFormFieldsValidationSchemaDynamic = Yup?.object()?.shape({
  email: Yup?.string()?.trim()?.required("Username is required"),
  userName: Yup?.string()?.trim()?.required("Email is required"),
  password: Yup?.string()?.trim()?.required("Password is required"),
  repeatPassword: Yup?.string()
    ?.trim()
    ?.required("Repeat password is required"),
});

export const signupFormFieldsDynamic = () => [
  {
    id: 1,
    component: TextFormFields,
    componentProps: {
      name: "email",
      label: "Email",
      required: true,
    },
  },
  {
    id: 2,
    component: TextFormFields,
    componentProps: {
      name: "userName",
      label: "UserName",
      required: true,
    },
  },
  {
    id: 3,
    component: TextFormFields,
    componentProps: {
      name: "password",
      label: "Password",
      required: true,
    },
  },
  {
    id: 4,
    component: TextFormFields,
    componentProps: {
      name: "repeatPassword",
      label: "Repeat Password",
      required: true,
    },
  },
  {
    id: 5,
    component: CheckboxFormField,
    componentProps: {
      name: "canSendUpdates",
      label: "Send me news and updates via email",
      color: "secondary",
      //   required: true,
    },
  },
];

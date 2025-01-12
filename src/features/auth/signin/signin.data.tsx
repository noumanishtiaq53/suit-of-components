import { TextFormFields } from "@/components/form-fields";
import { CheckboxFormField } from "@/components/form-fields/checkbox-form-field";
import * as Yup from "yup";

export const signinFormFieldsDefaultValuesDynamic = {
  email: "",
  password: "",
  rememberPassword: false,
};

export const signinFormFieldsValidationSchemaDynamic = Yup?.object()?.shape({
  email: Yup?.string()?.trim()?.required("Username or email is Required"),
  password: Yup?.string()?.trim()?.required("Password is required"),
});

export const signinFormFieldsDynamic = () => [
  {
    id: 1,
    component: TextFormFields,
    componentProps: {
      name: "email",
      label: "Username or Email",
      required: true,
    },
  },
  {
    id: 2,
    component: TextFormFields,
    componentProps: {
      name: "password",
      label: "Password",
      required: true,
    },
  },
  {
    id: 3,
    component: CheckboxFormField,
    componentProps: {
      name: "rememberPassword",
      label: "Remember Me",
      color: "secondary",
      //   required: true,
    },
  },
];

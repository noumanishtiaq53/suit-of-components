import { TextFormFields } from "@/components/form-fields";
import { CustomFormProvider } from "@/providers/custom-form.provider";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export const FormFields = () => {
  const methods = useForm({
    defaultValues: {
      name: "",
    },
    // resolver: yupResolver({)
  });
  const submit = (data: any) => {
    console.log(data);
  };
  return (
    <CustomFormProvider
      methods={methods}
      onSubmit={methods?.handleSubmit(submit)}
    >
      <TextFormFields name="first" label="textField" endIcon={<>123</>}/>
    </CustomFormProvider>
  );
};

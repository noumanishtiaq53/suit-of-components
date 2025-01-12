"use client";
import { CustomCheckboxUI } from "@/ui/custom-fields/custom-checkbox.ui";
import { Controller, useFormContext } from "react-hook-form";

export const CheckboxFormField = (props: any) => {
  const { name, label, color, size } = props;
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <CustomCheckboxUI
            name={name}
            label={label}
            value={field?.value}
            onChange={field?.onChange}
            color={color}
            size={size}
          />
        );
      }}
    />
  );
};

export default CheckboxFormField;

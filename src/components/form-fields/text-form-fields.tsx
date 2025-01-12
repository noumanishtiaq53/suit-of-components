"use client";
import { Controller, useFormContext } from "react-hook-form";
import { CustomTextFieldUI } from "../../ui/custom-fields/custom-text-field.ui";
import { Typography } from "@mui/material";
import { CustomTypographyUI } from "@/ui/custom-typography/custom-typography.ui";

export const TextFormFields = (props: any) => {
  const { name, onBlurHandler, ...other } = props;

  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      //   defaultValue={other?.defaultValue || ""}
      render={({ field, fieldState: { error } }) => (
        <>
          <CustomTextFieldUI
            {...field}
            value={field?.value || ""}
            onChange={field?.onChange}
            onBlur={() => {
              onBlurHandler?.();
              field?.onBlur?.();
            }}
            error={!!error}
            startIcon={other?.startIcon}
            endIcon={other?.endIcon}
            helperText={
              <CustomTypographyUI component="span" text={error?.message} />
            }
            {...other}
          />
        </>
      )}
    />
  );
};

export default TextFormFields;

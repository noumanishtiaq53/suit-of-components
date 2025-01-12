"use client";

import { Checkbox, FormControlLabel } from "@mui/material";

export const CustomCheckboxUI = (props: any) => {
  const {
    isDefaultCheck,
    color,
    size = 'medium',
    checkIcon,
    checkedIcon,
    onChange,
    value,
    disabled,
    required = false,
    label,
    labelPlacement = "end",
    name,
  } = props;

  return (
    <FormControlLabel
      required={required}
      checked={value}
      disabled={disabled}
      control={
        <Checkbox
          id={name}
          defaultChecked={isDefaultCheck}
          color={color}
          size={size}
          icon={checkIcon}
          disabled={disabled}
          checkedIcon={checkedIcon}
          onChange={onChange}
          checked={value}
        />
      }
      label={label}
      labelPlacement={labelPlacement}
    />
  );
};

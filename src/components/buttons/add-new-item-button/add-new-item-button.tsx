"use client";
import { CustomButtonUI } from "@/ui/custom-button/custom-button.ui";
import { AddBox, AddCircle } from "@mui/icons-material";
import { Button } from "@mui/material";

const mappedIcon: any = {
  circle: AddCircle,
  square: AddBox,
};

export const AddNewItemButton = (props: any) => {
  const {
    disabled = false,
    variant = "contained",
    name,
    color = "primary",
    onClick,
    hasStartIcon = true,
    hasEndIcon = false,
    iconType = "circle",
    size = "small",
  } = props;

  const MapIcon = mappedIcon?.[iconType];

  return (
    <CustomButtonUI
      variant={variant}
      color={color}
      disabled={disabled}
      className="small"
      size={size}
      startIcon={hasStartIcon && <MapIcon />}
      endIcon={hasEndIcon && <MapIcon />}
      handleClick={() => onClick?.()}
      customStyles={{
        "& .MuiButton-startIcon": {
          ...(!!name ? {} : { marginRight: 0, marginLeft: 0 }),
        },
      }}
      text={name}
    />
  );
};

import { Chip } from "@mui/material";

export const CustomChipUI = (props: any) => {
  const {
    customStyles,
    hoverStyles,
    icon,
    size = "medium",
    label,
    variant = "filled",
    color = "primary",
    shape = "oval",
    borderRadius,
    boxShadow = 25,
  } = props;

  const mapBorderRadius =
    shape === "rounded" ? 2 : shape === "oval" ? 4 : borderRadius;

  return (
    <Chip
      icon={icon}
      label={label}
      size={size}
      color={color}
      variant={variant}
      sx={{
        borderRadius: mapBorderRadius,
        boxShadow,
        ...customStyles,
        "&:hover": { ...hoverStyles },
      }}
    />
  );
};

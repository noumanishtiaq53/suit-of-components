import { Avatar } from "@mui/material";
import { CustomTypographyUI } from "../custom-typography/custom-typography.ui";
import { pxToRem } from "@/utils/css.utils";

export const CustomAvatarUI = (props: any) => {
  const {
    src = "",
    alt,
    width,
    height,
    backgroundColor,
    variant = "circular",
    avatarInitial,
    margin = "auto",
    customStyles,
    hoverStyles,
  } = props;

  return (
    <Avatar
      src={src}
      alt={alt}
      sx={{
        width: pxToRem(width),
        height: pxToRem(height),
        backgroundColor,
        margin,
        ...customStyles,
        "&:hover": {
          ...hoverStyles,
        },
      }}
      variant={variant}
    >
      {avatarInitial && (
        <CustomTypographyUI text={avatarInitial} variant="avatarInitial" />
      )}
    </Avatar>
  );
};

"use client";
import { Box } from "@mui/material";

export const CustomBoxUI = (props: any) => {
  const {
    children,
    onMouseOver,
    onMouseOut,
    hoverStyles,
    customStyles,
    component,
    onClick,
  } = props;

  return (
    <Box
      sx={{
        ...customStyles,
        "&:hover": {
          ...hoverStyles,
        },
      }}
      component={component}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onClick={onClick}
    >
      {children}
    </Box>
  );
};

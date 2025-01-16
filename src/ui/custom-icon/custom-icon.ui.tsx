"use client";

export const CustomIconUI = (props: any) => {
  const {
    Icon = null,
    hasAction = false,
    customStyles,
    hoverStyles,
    handleAction,
    fontSize,
  } = props;

  if (!Icon) return;

  return (
    <Icon
      fontSize={fontSize}
      onClick={() => handleAction?.()}
      sx={{
        cursor: hasAction ? "pointer" : "",
        ...customStyles,
        "&:hover": {
          ...hoverStyles,
        },
      }}
    />
  );
};

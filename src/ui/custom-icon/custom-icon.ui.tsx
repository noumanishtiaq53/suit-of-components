"use client";

export const CustomIconUI = (props: any) => {
  const {
    Icon = null,
    hasAction = false,
    customStyles,
    hoverStyles,
    handleAction,
  } = props;

  if (!Icon) return;

  return (
    <Icon
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

import { Grid2 } from "@mui/material";

export const CustomGridUI = (props: any) => {
  const {
    isContainer,
    children,
    rowSpacing,
    columnSpacing = { xs: 3, md: 4 },
    md = 6,
    lg = md,
    xl = lg ?? md,
    spacing,
    size = undefined,
    display,
    justifyContent,
    alignItems,
    minHeight,
    maxWidth,
    margin = maxWidth !== undefined ? "auto" : 0,
    padding = 0,
    customStyles,
    hoverStyles,
  } = props;

  return (
    <Grid2
      container={isContainer}
      {...(isContainer
        ? {
            rowSpacing: rowSpacing,
            columnSpacing: columnSpacing,
            spacing: spacing,
          }
        : { size: size ?? { xs: 12, md, lg, xl } })}
      sx={{
        display: display,
        justifyContent: justifyContent,
        alignItems: alignItems,
        minHeight: minHeight,
        maxWidth: maxWidth,
        margin: margin,
        padding: padding,
        ...customStyles,
        "&:hover": {
          ...hoverStyles,
        },
      }}
    >
      {children}
    </Grid2>
  );
};

import { Grid2 } from "@mui/material";

export const CustomGridUI = (props: any) => {
  const {
    children,
    spacing = 1,
    rowSpacing = spacing,
    columnSpacing = spacing,
  } = props;

  return (
    <Grid2
      container
      rowSpacing={rowSpacing}
      columnSpacing={columnSpacing}
      spacing={spacing}
    >
      {children}
    </Grid2>
  );
};

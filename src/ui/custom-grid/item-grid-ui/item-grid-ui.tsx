import { Grid2 } from "@mui/material";

export const ItemGridUI = (props: any) => {
  const { xs = 12, sm = xs, md = sm, lg = md, xl = lg, children } = props;

  return <Grid2 size={{ xs, sm, md, lg, xl }}>{children}</Grid2>;
};

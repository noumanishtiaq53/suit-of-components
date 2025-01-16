import { Skeleton } from "@mui/material";

export const CustomSkeletonUI = (props: any) => {
  const {
    variant = "text",
    width,
    height,
    animation = "pulse",
    customStyles = {},
  } = props;

  return (
    <Skeleton
      variant={variant}
      width={width}
      height={height}
      animation={animation}
      sx={{
        ...customStyles,
      }}
    />
  );
};

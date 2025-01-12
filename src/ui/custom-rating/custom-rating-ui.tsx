import { Rating } from "@mui/material";

export const CustomRatingUI = (props: any) => {
  const {
    name,
    defaultValue,
    precision,
    max,
    readOnly = true,
    size = "small",
  } = props;
  
  return (
    <Rating
      name={name}
      defaultValue={defaultValue}
      precision={precision}
      max={max}
      readOnly={readOnly}
      size={size}
    />
  );
};

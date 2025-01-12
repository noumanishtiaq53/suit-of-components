import { CSS_CONSTANT } from "@/constants/css.constant";

export const pxToRem = (fontSize: any) => {
  const rem = fontSize / CSS_CONSTANT?.ONE_REM_TO_PX;
  return `${rem}rem`;
};

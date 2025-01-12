import { pxToRem } from "./css.utils";

export function responsiveFontSizes({ xs, sm, md, lg }: any) {
  return {
    "@media (max-width:600px)": {
      fontSize: pxToRem(xs),
    },
    "@media (min-width:600px)": {
      fontSize: pxToRem(sm),
    },
    "@media (min-width:900px)": {
      fontSize: pxToRem(md),
    },
    "@media (min-width:1200px)": {
      fontSize: pxToRem(lg),
    },
  };
}

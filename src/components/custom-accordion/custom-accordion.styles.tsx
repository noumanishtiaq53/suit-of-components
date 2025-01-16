import { ACCORDION_VARIANTS } from "@/constants/ui.constant";
import { pxToRem } from "@/utils/css.utils";

export const customAccordionStyles: any = {
  [ACCORDION_VARIANTS?.SECONDARY]: {
    summary: {
      backgroundColor: "blue.main",
      color: "common.white",
      borderRadius: pxToRem(8),
    },
    root: {
      mt: 1,
    },
  },
  [ACCORDION_VARIANTS?.INHERIT]: {
    summary: {
      backgroundColor: "inherit",
      color: "inherit",
    },
  },
  [ACCORDION_VARIANTS?.TERTIARY]: {
    summary: {
      backgroundColor: (theme: any) => theme?.palette?.common?.white,
      color: (theme: any) => `${theme?.palette?.grey?.[600]} !important`,
      borderRadius: 2,
      borderLeft: (theme: any) => `4px solid ${theme?.palette?.primary?.main}`,
      flexDirection: "row-reverse",
      height: 55,
    },
    summaryContent: {
      ml: 1,
      borderLeft: (theme: any) =>
        `1px solid ${theme?.palette?.custom?.bluish_gray}`,
    },
    details: {
      backgroundColor: (theme: any) => theme?.palette?.custom?.off_white_one,
      boxShadow: (theme: any) =>
        `4px 4px 4px 0px ${theme?.palette?.custom?.shadow_black} inset, -4px -4px 4px 0px ${theme?.palette?.custom?.shadow_black} inset`,
      padding: 2,
      my: 1,
      borderRadius: 2,
      pl: 6,
    },
    root: {
      mb: 2,
    },
  },
};

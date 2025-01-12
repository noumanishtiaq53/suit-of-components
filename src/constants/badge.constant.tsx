export const BADGE_POSITION = {
  TOP_RIGHT: "top-right",
  TOP_LEFT: "top-left",
  BOTTOM_RIGHT: "bottom-right",
  BOTTOM_LEFT: "bottom-left",
};

export const BADGE_POSITION_ANCHOR: any = {
  [BADGE_POSITION?.TOP_RIGHT]: { vertical: "top", horizontal: "right" },
  [BADGE_POSITION?.TOP_LEFT]: { vertical: "top", horizontal: "left" },
  [BADGE_POSITION?.BOTTOM_RIGHT]: { vertical: "bottom", horizontal: "right" },
  [BADGE_POSITION?.BOTTOM_LEFT]: { vertical: "bottom", horizontal: "left" },
};

export const DOT_BADGE_TYPE = {
  SUCCESS: "success",
  ERROR: "error",
  DISABLED: "disabled",
};

export const BADGE_DOT_COLOR = {
  [DOT_BADGE_TYPE?.SUCCESS]: "success.main",
  [DOT_BADGE_TYPE?.ERROR]: "error.main",
  [DOT_BADGE_TYPE?.DISABLED]: "common.disabled",
};

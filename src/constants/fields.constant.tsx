export const SEARCH_FIELD_VARIANT = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  BASIC: "basic",
};

export const SEARCH_FIELD_APPLY = {
  [SEARCH_FIELD_VARIANT?.PRIMARY]: {
    backgroundColor: "primary.dark",
    iconColor: "primary.light",
  },
  [SEARCH_FIELD_VARIANT?.BASIC]: {
    backgroundColor: "transparent",
    iconColor: "common.disabled",
    color: "text.primary",
    border: "0.2px solid",
    borderColor: "common.disabled",
  },
};

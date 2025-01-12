"use client";

import { UIAddIcon } from "@/assets/ui-icons";
import { CustomBoxUI } from "../custom-box/custom-box.ui";
import { CustomChipUI } from "../custom-chip/custom-chip-ui";
import { pxToRem } from "@/utils/css.utils";

export const CustomCardUI = (props: any) => {
  const {
    children,
    borderRadius = 2,
    backgroundColor = "common.white",
    padding,
    marginX,
    boxShadow = 27,
    height,
    cardStyles,
    onClick,
    chipLabel,
  } = props;

  return (
    <CustomBoxUI
      customStyles={{
        backgroundColor,
        boxShadow,
        borderRadius,
        padding,
        marginX,
        height,
        display: "flex",
        flexDirection: "column",
        maxHeight: "100%",
        minHeight: "100%",
        position: "relative",
        ...cardStyles,
      }}
      onClick={() => onClick?.()}
    >
      {children}
      {!!chipLabel && (
        <CustomBoxUI
          customStyles={{
            position: "absolute",
            zIndex: 30,
            right: -10,
            top: 10,
          }}
        >
          <CustomChipUI
            label={chipLabel}
            size="small"
            customStyles={{
              backgroundColor: "common.white",
              color: "text.primary",
              paddingX: 0.5,
              paddingY: 1.5,
              fontWeight: 600,
              fontSize: pxToRem(14),
            }}
            icon={<UIAddIcon />}
          />
        </CustomBoxUI>
      )}
    </CustomBoxUI>
  );
};

import { AVATAR_VARIANTS_TYPE } from "@/constants/avatar.constant";
import { CLIP_PATH } from "@/constants/css.constant";
import { CustomBoxUI } from "@/ui/custom-box/custom-box.ui";

export const HexagonalCard = (props: any) => {
  const {
    children,
    padding = 0,
    backgroundColor = "common.white",
    background,
    zIndex,
    margin,
    border = "none",
    display = "inline-flex",
    variant = AVATAR_VARIANTS_TYPE?.HEXAGONAL,
    borderRadius = 2,
  } = props;

  const addBorderRadius =
    variant === AVATAR_VARIANTS_TYPE?.CIRCULAR
      ? 50
      : variant === AVATAR_VARIANTS_TYPE?.ROUNDED
      ? borderRadius
      : 0;

  return (
    <CustomBoxUI
      customStyles={{
        backgroundColor,
        background: background,
        boxShadow: 25,
        borderRadius: addBorderRadius,
        padding,
        ...(variant === AVATAR_VARIANTS_TYPE?.HEXAGONAL
          ? { clipPath: CLIP_PATH?.POLYGON_AVATAR }
          : {}),
        zIndex,
        margin,
        border,
        display,
      }}
    >
      {children}
    </CustomBoxUI>
  );
};

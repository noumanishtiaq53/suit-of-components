import {
  COVER_IMAGE_DIMENSIONS_TYPES,
  PROFILE_AVATAR_DIMENSIONS,
  PROFILE_AVATAR_DIMENSIONS_TYPES,
} from "@/constants/dimensions.constant";
import { CustomBoxUI } from "@/ui/custom-box/custom-box.ui";
import { pxToRem } from "@/utils/css.utils";
import { CustomCoverImage } from "../custom-cover-image/custom-cover-image";
import { ProfileCoverCommonImage } from "@/assets/images/common";
import { CustomImage } from "../custom-image/custom-image";
import { AVATAR_VARIANTS_TYPE } from "@/constants/avatar.constant";
import { CustomChipUI } from "@/ui/custom-chip/custom-chip-ui";
import { UIAttachMoneyIcon } from "@/assets/ui-icons";

export const CustomInfoImages = (props: any) => {
  const {
    profileDimension = PROFILE_AVATAR_DIMENSIONS_TYPES?.MEDIUM,
    coverDimension = COVER_IMAGE_DIMENSIONS_TYPES?.SMALL,
    profilePosition = "left",
    chipLabel,
    hasAvatar = true,
  } = props;
  return (
    <CustomBoxUI
      customStyles={{
        position: "relative",
        marginBottom: pxToRem(
          hasAvatar
            ? -PROFILE_AVATAR_DIMENSIONS?.[profileDimension]?.height / 2
            : -20
        ),
      }}
    >
      <CustomCoverImage
        fgImage={ProfileCoverCommonImage}
        isStaticImage
        dimension={coverDimension}
      />
      <CustomBoxUI
        component="div"
        customStyles={{
          textAlign: profilePosition,
          paddingX: 2,
          transform: " translateY(-50%)",
        }}
      >
        {hasAvatar && (
          <CustomImage
            dimension={profileDimension}
            variant={AVATAR_VARIANTS_TYPE?.CIRCULAR}
            gradientBackground={"none"}
          />
        )}
        {chipLabel && (
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
            icon={<UIAttachMoneyIcon color="secondary" />}
          />
        )}
      </CustomBoxUI>
    </CustomBoxUI>
  );
};

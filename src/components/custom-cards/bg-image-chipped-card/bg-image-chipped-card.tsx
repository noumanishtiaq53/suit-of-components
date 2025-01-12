import { ProfileCoverCommonImage } from "@/assets/images/common";
import { CustomBgImage } from "@/components/custom-images/custom-bg-image/custom-bg-image";
import { CustomBoxUI } from "@/ui/custom-box/custom-box.ui";
import { CustomChipUI } from "@/ui/custom-chip/custom-chip-ui";
import { CustomTypographyUI } from "@/ui/custom-typography/custom-typography.ui";
import { pxToRem } from "@/utils/css.utils";

export const BgImageChippedCard = (props: any) => {
  const {
    name = "Browse All",
    description = "Check out all items",
    chipLabel = "1112 ITEMS",
  } = props;

  return (
    <CustomBgImage
      bgImage={ProfileCoverCommonImage}
      customStyles={{ borderRadius: 3 }}
    >
      <CustomBoxUI customStyles={{ padding: 2 }}>
        <CustomBoxUI>
          <CustomTypographyUI color="common.white" text={name} variant="h5" />
          <CustomTypographyUI
            color="common.white"
            text={description}
            variant="h6"
          />
        </CustomBoxUI>
        <br />
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
          />
        )}
      </CustomBoxUI>
    </CustomBgImage>
  );
};

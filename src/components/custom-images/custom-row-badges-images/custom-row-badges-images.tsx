import { CustomBoxUI } from "@/ui/custom-box/custom-box.ui";
import { CustomBadgeImage } from "../custom-badge-image/custom-badge-image";
import { PROFILE_AVATAR_DIMENSIONS_TYPES } from "@/constants/dimensions.constant";

export const CustomRowBadgesImages = (props: any) => {
  const { hideFirst, hideSecond, hideThird = "hidden" } = props;
  return (
    <CustomBoxUI
      customStyles={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        padding: 2,
      }}
    >
      <CustomBoxUI
        customStyles={{
          visibility: hideFirst,
        }}
      >
        <CustomBadgeImage />
      </CustomBoxUI>
      <CustomBoxUI
        customStyles={{
          visibility: hideSecond,
        }}
      >
        <CustomBadgeImage dimension={PROFILE_AVATAR_DIMENSIONS_TYPES?.MEDIUM} />
      </CustomBoxUI>
      <CustomBoxUI
        customStyles={{
          visibility: hideThird,
        }}
      >
        <CustomBadgeImage />
      </CustomBoxUI>
    </CustomBoxUI>
  );
};

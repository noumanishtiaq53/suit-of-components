import { CustomBadgeImage } from "@/components/custom-images/custom-badge-image/custom-badge-image";
import { PROFILE_AVATAR_DIMENSIONS_TYPES } from "@/constants/dimensions.constant";
import { USER_PROFILE_INFO_TYPOGRAPHY_VARIANTS } from "@/constants/variants.constant";
import { CustomBoxUI } from "@/ui/custom-box/custom-box.ui";
import { CustomTypographyUI } from "@/ui/custom-typography/custom-typography.ui";

export const UserInfoCard = (props: any) => {
  const {
    name = "Your Name Here",
    description = "",
    isHideStatus = false,
    count = 0,
    showInfo = true,
    dimension = PROFILE_AVATAR_DIMENSIONS_TYPES?.DOT,
    gradientBackground,
    heading = "Posted",
    isAvatar = true,
  } = props;

  return (
    <CustomBoxUI
      customStyles={{ display: "flex", alignItems: "center", gap: 1 }}
    >
      <CustomBadgeImage
        count={count}
        isHideStatus={isHideStatus}
        dimension={dimension}
        gradientBackground={gradientBackground}
        isAvatar={isAvatar}
      />
      {showInfo && (
        <CustomBoxUI>
          {!!heading && (
            <CustomTypographyUI
              text={heading}
              variant={
                USER_PROFILE_INFO_TYPOGRAPHY_VARIANTS?.[dimension]?.description
              }
            />
          )}

          <CustomTypographyUI
            text={name}
            variant={
              USER_PROFILE_INFO_TYPOGRAPHY_VARIANTS?.[dimension]?.heading
            }
          />
          {!!description && (
            <CustomTypographyUI
              text={description}
              variant={
                USER_PROFILE_INFO_TYPOGRAPHY_VARIANTS?.[dimension]?.description
              }
            />
          )}
        </CustomBoxUI>
      )}
    </CustomBoxUI>
  );
};

import {
  PROFILE_AVATAR_BADGE_DIMENSIONS,
  PROFILE_AVATAR_DIMENSIONS_TYPES,
} from "@/constants/dimensions.constant";
import { CustomAvatarBadge } from "../../custom-badges/custom-avatar-badge/custom-avatar-badge";
import { CustomImage } from "../custom-image/custom-image";
import { CustomStatusBadge } from "@/components/custom-badges/custom-status-badge/custom-status-badge";

export const CustomBadgeImage = (props: any) => {
  const {
    dimension = PROFILE_AVATAR_DIMENSIONS_TYPES?.EXTRA_SMALL,
    isAvatar = false,
    avatarBgColor = "text.main",
    count = 0,
    image = " ",
    avatarInitial,
    status,
    isHideStatus,
    gradientBackground,
  } = props;

  return (
    <CustomAvatarBadge
      width={PROFILE_AVATAR_BADGE_DIMENSIONS?.[dimension]?.width}
      height={PROFILE_AVATAR_BADGE_DIMENSIONS?.[dimension]?.height}
      count={count}
    >
      <CustomStatusBadge
        dimension={dimension}
        status={status}
        isHideStatus={isHideStatus}
      >
        <CustomImage
          dimension={dimension}
          isAvatar={isAvatar}
          avatarPadding={0.7}
          avatarBgColor={avatarBgColor}
          image={image}
          avatarInitial={avatarInitial}
          gradientBackground={gradientBackground}
        />
      </CustomStatusBadge>
    </CustomAvatarBadge>
  );
};

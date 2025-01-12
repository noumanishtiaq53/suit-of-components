import {
  PROFILE_AVATAR_BADGE_DIMENSIONS,
  PROFILE_AVATAR_DIMENSIONS_TYPES,
} from "@/constants/dimensions.constant";
import { CustomAvatarBadge } from "../../custom-badges/custom-avatar-badge/custom-avatar-badge";
import { CustomImage } from "../custom-image/custom-image";
import { CustomStatusBadge } from "@/components/custom-badges/custom-status-badge/custom-status-badge";

export const CustomProfileAvatar = (props: any) => {
  const {
    dimension = PROFILE_AVATAR_DIMENSIONS_TYPES?.LARGE,
    isAvatar,
    isHideStatus = false,
    count = 23,
    image,
    avatarInitial,
  } = props;

  return (
    <CustomAvatarBadge
      width={PROFILE_AVATAR_BADGE_DIMENSIONS?.[dimension]?.width}
      height={PROFILE_AVATAR_BADGE_DIMENSIONS?.[dimension]?.height}
      count={count}
    >
      <CustomStatusBadge dimension={dimension} isHideStatus={isHideStatus}>
        <CustomImage
          dimension={dimension}
          isAvatar={isAvatar}
          image={image}
          avatarInitial={avatarInitial}
        />
      </CustomStatusBadge>
    </CustomAvatarBadge>
  );
};

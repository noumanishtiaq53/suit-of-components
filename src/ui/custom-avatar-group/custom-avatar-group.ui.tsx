import { AvatarGroup } from "@mui/material";
import { CustomAvatarUI } from "../custom-avatar/custom-avatar.ui";
import { PROFILE_AVATAR_DIMENSIONS } from "@/constants/dimensions.constant";
import { CLIP_PATH } from "@/constants/css.constant";
import { CustomBoxUI } from "../custom-box/custom-box.ui";
import { CustomTypographyUI } from "../custom-typography/custom-typography.ui";

export const CustomAvatarGroupUI = (props: any) => {
  const {
    avatarsList = [],
    max = 4,
    avatarBgColor = "primary.main",
    avatarPadding,
    dimension,
    isStaticImage,
    customStyles,
    isHexagonal = true,
  } = props;

  return (
    <AvatarGroup
      max={max}
      total={avatarsList?.length}
      sx={{
        justifyContent: "flex-end",
        ...(isHexagonal ? { border: "none" } : {}),
        ...customStyles,
        ".MuiAvatar-root": {
          backgroundColor: avatarBgColor,
          clipPath: CLIP_PATH?.POLYGON_AVATAR,
          width: PROFILE_AVATAR_DIMENSIONS?.[dimension]?.width,
          height: PROFILE_AVATAR_DIMENSIONS?.[dimension]?.height,
          fontSize: "14px",
          ...(isHexagonal ? { borderRadius: 0, border: "none" } : {}),
        },
      }}
    >
      {!!avatarsList?.length &&
        avatarsList?.map((avatar: any) => (
          <CustomAvatarUI
            key={avatar?._id}
            avatarInitial={avatar?.avatarInitial}
            src={isStaticImage ? avatar?.image?.src : avatar?.image}
            alt="profile-avatars"
            variant="square"
            customStyles={{
              width: PROFILE_AVATAR_DIMENSIONS?.[dimension]?.width,
              height: PROFILE_AVATAR_DIMENSIONS?.[dimension]?.height,
              clipPath: CLIP_PATH?.POLYGON_AVATAR,
              backgroundColor: avatarBgColor,
              boxShadow: 25,
              margin: 0,
              padding: avatarPadding,
            }}
          />
        ))}
    </AvatarGroup>
  );
};

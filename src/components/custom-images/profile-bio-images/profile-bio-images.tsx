import { ProfileCoverCommonImage } from "@/assets/images/common";
import { ProfileActionButtons } from "@/components/custom-buttons/profile-action-buttons/profile-action-buttons";
import { CustomCoverImage } from "@/components/custom-images/custom-cover-image/custom-cover-image";
import { CustomProfileAvatar } from "@/components/custom-images/custom-profile-avatar/custom-profile-avatar";
import {
  COVER_IMAGE_DIMENSIONS_TYPES,
  PROFILE_AVATAR_DIMENSIONS,
  PROFILE_AVATAR_DIMENSIONS_TYPES,
} from "@/constants/dimensions.constant";
import { CustomBoxUI } from "@/ui/custom-box/custom-box.ui";
import { pxToRem } from "@/utils/css.utils";

export const ProfileBioImages = (props: any) => {
  const {
    profileDimension = PROFILE_AVATAR_DIMENSIONS_TYPES?.LARGE,
    coverDimension = COVER_IMAGE_DIMENSIONS_TYPES?.LARGE,
    showButton,
  } = props;

  return (
    <CustomBoxUI
      customStyles={{
        position: "relative",
        marginBottom: pxToRem(
          -PROFILE_AVATAR_DIMENSIONS?.[profileDimension]?.height / 2
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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 3,
          marginLeft: showButton ? { xs: 0, md: 30 } : 0,
          transform: " translateY(-50%)",
        }}
      >
        <CustomProfileAvatar dimension={profileDimension} />
        {showButton ? (
          <CustomBoxUI
            customStyles={{
              display: { xs: "none", md: "block" },
            }}
          >
            <ProfileActionButtons />
          </CustomBoxUI>
        ) : (
          <></>
        )}
      </CustomBoxUI>
    </CustomBoxUI>
  );
};

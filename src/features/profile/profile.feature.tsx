import { PostCard } from "@/components/custom-cards/post-card/post-card";
import { ProfileBioCard } from "@/components/custom-cards/profile-bio-card/profile-bio-card";
import { UserInfoCard } from "@/components/custom-cards/user-info-card/user-info-card";
import { CustomImage } from "@/components/custom-images/custom-image/custom-image";
import { CustomProfileAvatar } from "@/components/custom-images/custom-profile-avatar/custom-profile-avatar";
import { ProfileBioImages } from "@/components/custom-images/profile-bio-images/profile-bio-images";
import {
  PROFILE_AVATAR_DIMENSIONS_TYPES,
  PROFILE_BIO_CARD_DIMENSIONS_TYPES,
  PROFILE_BIO_CARD_VIEW_TYPES,
} from "@/constants/dimensions.constant";
import { CustomBoxUI } from "@/ui/custom-box/custom-box.ui";
import { CustomCardUI } from "@/ui/custom-card/custom-card.ui";

export const ProfileFeature = () => {
  return (
    <>
      <CustomBoxUI>
        <ProfileBioCard
          dimensions={PROFILE_BIO_CARD_DIMENSIONS_TYPES?.LANDSCAPE}
        />
      </CustomBoxUI>
      <br />
      <br />
      <br />
      <br />
      <br />
      <CustomBoxUI
        customStyles={{
          textAlign: "center",
          border: "1px solid lime",
          backgroundColor: "black",
          p: 3,
        }}
      >
        <CustomCardUI></CustomCardUI>
      </CustomBoxUI>
      <br />
      <br />
      <br />
      <br />
      <br />
      <ProfileBioImages />
      <br />
      <br />
      <br />
      <br />
      <br />
      <CustomBoxUI
        customStyles={{
          textAlign: "center",
          border: "1px solid lime",
          backgroundColor: "black",
          p: 3,
        }}
      >
        <CustomProfileAvatar
          dimension={PROFILE_AVATAR_DIMENSIONS_TYPES?.SMALL}
        />
      </CustomBoxUI>
      <br />
      <br />
      <br />
      <br />
      <CustomImage />
      <br />
      <br />
      <UserInfoCard />
      <br />
      <br />
      <PostCard />
      <br />
      <br />
      <br />
      <br />
      <ProfileBioCard viewType={PROFILE_BIO_CARD_VIEW_TYPES?.DETAIL} />
    </>
  );
};

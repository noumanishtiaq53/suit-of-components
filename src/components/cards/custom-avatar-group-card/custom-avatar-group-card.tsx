import { JoinGroupButton } from "@/components/custom-buttons/join-group-button/join-group-button";
import { ProfileBioImages } from "@/components/custom-images/profile-bio-images/profile-bio-images";
import { RelationCountList } from "@/components/custom-lists/relation-count-list/relation-count-list";
import {
  COVER_IMAGE_DIMENSIONS_TYPES,
  PROFILE_AVATAR_DIMENSIONS_TYPES,
} from "@/constants/dimensions.constant";
import { CustomBoxUI } from "@/ui/custom-box/custom-box.ui";
import { CustomCardUI } from "@/ui/custom-card/custom-card.ui";
import { CustomTypographyUI } from "@/ui/custom-typography/custom-typography.ui";
import { recordItemsListData } from "../profile-bio-card/profile-bio-card.data";
import { CustomAvatarGroupUI } from "@/ui/custom-avatar-group/custom-avatar-group.ui";

export const CustomAvatarGroupCard = (props: any) => {
  const {
    recordItemListData = recordItemsListData,
    avatarsList = [
      { image: "" },
      { image: "" },
      { image: "" },
      { image: "" },
      { image: "" },
    ],
  } = props;

  return (
    <CustomCardUI>
      <CustomCardUI>
        <ProfileBioImages
          profileDimension={PROFILE_AVATAR_DIMENSIONS_TYPES?.MEDIUM}
          coverDimension={COVER_IMAGE_DIMENSIONS_TYPES?.MEDIUM}
        />
      </CustomCardUI>
      <CustomBoxUI
        customStyles={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingX: 2,
          flexDirection: "column",
          gap: 2,
        }}
      >
        <CustomBoxUI>
          <CustomTypographyUI text="Marina Valentine" variant="h5" />
          <CustomTypographyUI
            text="www.gamehuntress.com"
            variant="overline"
            customStyles={{
              color: "text.disabled",
            }}
            hoverStyles={{
              color: "secondary.main",
            }}
          />
        </CustomBoxUI>
        <CustomBoxUI>
          <RelationCountList relationCountListData={recordItemListData} />
        </CustomBoxUI>
        <CustomBoxUI>
          <CustomAvatarGroupUI avatarsList={avatarsList} />
        </CustomBoxUI>
      </CustomBoxUI>
      <CustomBoxUI
        customStyles={{
          padding: 2,
        }}
      >
        <JoinGroupButton />
      </CustomBoxUI>
    </CustomCardUI>
  );
};

import { CustomInfoImages } from "@/components/custom-images/custom-info-images/custom-info-images";
import { CustomBoxUI } from "@/ui/custom-box/custom-box.ui";
import { CustomCardUI } from "@/ui/custom-card/custom-card.ui";
import { CustomTypographyUI } from "@/ui/custom-typography/custom-typography.ui";
import { UserInfoCard } from "../user-info-card/user-info-card";
import { CustomRatingUI } from "@/ui/custom-rating/custom-rating-ui";
import { COVER_IMAGE_DIMENSIONS_TYPES } from "@/constants/dimensions.constant";

export const RatingCard = (props: any) => {
  const {
    name = "Twitch Stream UI Pack",
    category = "Stream Pack",
    description = "Awesome hexagon themed stream pack, you can change all colors and...",
  } = props;

  return (
    <CustomCardUI>
      <CustomBoxUI>
        <CustomInfoImages
          chipLabel={"435"}
          hasAvatar={false}
          profilePosition={"right"}
          coverDimension = {COVER_IMAGE_DIMENSIONS_TYPES?.LARGE}
        />
      </CustomBoxUI>
      <CustomBoxUI customStyles={{ flexGrow: 1, padding: 2 }}>
        <CustomTypographyUI text={name} variant="h5" />
        <CustomTypographyUI text={category} variant="h6" />
        <br />
        <CustomTypographyUI text={description} variant="body1" />
      </CustomBoxUI>
      <CustomBoxUI
        customStyles={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 1,
          padding: 2,
          borderTop: "1px solid",
          borderColor: "common.border",
        }}
      >
        <UserInfoCard
          isHideStatus={true}
          gradientBackground={"none"}
          isAvatar={false}
        />
        <CustomRatingUI defaultValue={2.5} />
      </CustomBoxUI>
    </CustomCardUI>
  );
};

import { ProfileBioCard } from "@/components/custom-cards/profile-bio-card/profile-bio-card";
import { RatingCard } from "@/components/custom-cards/rating-card/rating-card";
import { PROFILE_BIO_CARD_VIEW_TYPES } from "@/constants/dimensions.constant";
import { CustomGridUI } from "@/ui/custom-grid/custom-grid.ui";

export const ProductsList = (props: any) => {
  const { membersListData = [{}, {}, {}] } = props;
  return (
    <CustomGridUI isContainer spacing={2}>
      {membersListData?.length &&
        membersListData?.map((member: any) => (
          <CustomGridUI md={6} lg={4} key={member?._id}>
            <RatingCard />
          </CustomGridUI>
        ))}
    </CustomGridUI>
  );
};

import { ChipStatusCard } from "@/components/custom-cards/chip-status-card/chip-status-card";
import { ProfileBioCard } from "@/components/custom-cards/profile-bio-card/profile-bio-card";
import { PROFILE_BIO_CARD_VIEW_TYPES } from "@/constants/dimensions.constant";
import { CustomGridUI } from "@/ui/custom-grid/custom-grid.ui";

export const FeaturedStreamersList = (props: any) => {
  const { membersListData = [{}, {}, {}] } = props;
  return (
    <CustomGridUI isContainer spacing={2}>
      {membersListData?.length &&
        membersListData?.map((member: any) => (
          <CustomGridUI md={6} lg={4} key={member?._id}>
            <ChipStatusCard />
          </CustomGridUI>
        ))}
    </CustomGridUI>
  );
};

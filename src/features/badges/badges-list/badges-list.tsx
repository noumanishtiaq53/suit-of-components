import { CustomBadgeCard } from "@/components/custom-cards/custom-badge-card/custom-badge-card";
import { CustomGridUI } from "@/ui/custom-grid/custom-grid.ui";

export const BadgesList = (props: any) => {
  const { membersListData = [{}, {}, {}] } = props;
  return (
    <CustomGridUI isContainer spacing={2}>
      {membersListData?.length &&
        membersListData?.map((member: any) => (
          <CustomGridUI md={6} lg={4} key={member?._id}>
            <CustomBadgeCard />
          </CustomGridUI>
        ))}
    </CustomGridUI>
  );
};

import { ProgressBarCard } from "@/components/custom-cards/progress-bar-card/progress-bar-card";
import { CustomGridUI } from "@/ui/custom-grid/custom-grid.ui";

export const FeaturedQuestsList = (props: any) => {
  const { membersListData = [{}, {}, {}] } = props;
  return (
    <CustomGridUI isContainer spacing={2}>
      {membersListData?.length &&
        membersListData?.map((member: any) => (
          <CustomGridUI md={6} lg={4} key={member?._id}>
            <ProgressBarCard />
          </CustomGridUI>
        ))}
    </CustomGridUI>
  );
};

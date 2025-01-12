import { CustomAvatarGroupCard } from "@/components/custom-cards/custom-avatar-group-card/custom-avatar-group-card";
import { CustomGridUI } from "@/ui/custom-grid/custom-grid.ui";

export const GroupsList = (props: any) => {
  const { membersListData = [{}, {}, {}] } = props;
  return (
    <CustomGridUI isContainer spacing={2}>
      {membersListData?.length &&
        membersListData?.map((member: any) => (
          <CustomGridUI md={6} lg={4} key={member?._id}>
            <CustomAvatarGroupCard />
          </CustomGridUI>
        ))}
    </CustomGridUI>
  );
};

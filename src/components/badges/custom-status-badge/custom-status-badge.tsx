import { BADGE_DOT_COLOR, DOT_BADGE_TYPE } from "@/constants/badge.constant";
import { PROFILE_STATUS_BADGE_MARGIN } from "@/constants/dimensions.constant";
import { CustomBadgeUI } from "@/ui/custom-badge/custom-badge.ui";

export const CustomStatusBadge = (props: any) => {
  const {
    children,
    status = DOT_BADGE_TYPE?.DISABLED,
    dimension,
    isHideStatus = true,
  } = props;

  return (
    <CustomBadgeUI
      customStyles={{
        ".MuiBadge-badge": {
          backgroundColor: BADGE_DOT_COLOR?.[status],
          padding: 0.5,
          margin: PROFILE_STATUS_BADGE_MARGIN?.[dimension],
        },
      }}
      variant="dot"
      invisible={isHideStatus}
    >
      {children}
    </CustomBadgeUI>
  );
};

export default CustomStatusBadge;

import { CustomBadgeImage } from "@/components/custom-images/custom-badge-image/custom-badge-image";
import { PROFILE_AVATAR_DIMENSIONS_TYPES } from "@/constants/dimensions.constant";
import { CustomBoxUI } from "@/ui/custom-box/custom-box.ui";
import { Fragment } from "react";

export const EarnedBadgesList = (props: any) => {
  const { earnedBadgesListData = [], showBadges = 3 } = props;
  return (
    <CustomBoxUI
      customStyles={{
        display: "flex",
        alignItems: "center",
        gap: 1,
      }}
    >
      {earnedBadgesListData?.length &&
        earnedBadgesListData?.slice(0, showBadges)?.map((badge: any) => (
          <Fragment key={badge._id}>
            <CustomBadgeImage
              dimension={PROFILE_AVATAR_DIMENSIONS_TYPES?.EXTRA_SMALL}
              isAvatar={false}
              count={badge?.count}
              image={badge?.image}
            />
          </Fragment>
        ))}
      {earnedBadgesListData?.length > showBadges ? (
        <CustomBadgeImage
          dimension={PROFILE_AVATAR_DIMENSIONS_TYPES?.EXTRA_SMALL}
          isAvatar={false}
          avatarInitial={`+${earnedBadgesListData?.length - showBadges}`}
          avatarBgColor={"common.disabled"}
        />
      ) : (
        <></>
      )}
    </CustomBoxUI>
  );
};

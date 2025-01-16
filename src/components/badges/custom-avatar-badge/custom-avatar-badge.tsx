import { CLIP_PATH } from "@/constants/css.constant";
import { CustomAvatarUI } from "@/ui/custom-avatar/custom-avatar.ui";
import { HexagonalCard } from "../../custom-cards/hexagonal-card/hexagonal-card";
import { CustomBadgeUI } from "@/ui/custom-badge/custom-badge.ui";
import { BADGE_POSITION } from "@/constants/badge.constant";

export const CustomAvatarBadge = (props: any) => {
  const { children, width, height, outerPadding = 0.2, count = 0 } = props;

  return (
    <CustomBadgeUI
      badgeContent={
        !!count ? (
          <HexagonalCard padding={outerPadding}>
            <CustomAvatarUI
              avatarInitial={count}
              customStyles={{
                width: width,
                height: height,
                clipPath: CLIP_PATH?.POLYGON_AVATAR,
                backgroundColor: "primary.main",
                boxShadow: 25,
                borderRadius: 2,
              }}
            />
          </HexagonalCard>
        ) : (
          <></>
        )
      }
      position={BADGE_POSITION?.BOTTOM_RIGHT}
      overlap="circular"
    >
      {children}
    </CustomBadgeUI>
  );
};

export default CustomAvatarBadge;

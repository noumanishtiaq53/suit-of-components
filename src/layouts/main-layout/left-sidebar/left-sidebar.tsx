import { CustomBoxUI } from "@/ui/custom-box/custom-box.ui";
import { DynamicMenuItems } from "../dynamic-menu-items/dynamic-menu-items";
import { ProfileBioCard } from "@/components/custom-cards/profile-bio-card/profile-bio-card";
import { CustomBadgeImage } from "@/components/custom-images/custom-badge-image/custom-badge-image";

export const LeftSideBar = (props: any) => {
  const { count, isHideStatus, showFull = false } = props;
  return (
    <CustomBoxUI
      customStyles={{
        backgroundColor: "common.white",
        boxShadow: 25,
        overflow: "auto",
        minHeight: "100%",
        paddingX: 2,
      }}
    >
      {showFull ? (
        <ProfileBioCard outerMarginX={-2} hasShadow={"none"} />
      ) : (
        <CustomBoxUI customStyles={{ py: 2 }}>
          <CustomBadgeImage
            isAvatar
            count={count}
            isHideStatus={isHideStatus}
          />
        </CustomBoxUI>
      )}
      <CustomBoxUI>
        <DynamicMenuItems
          isIconMenu
          flexDirection="column"
          textColor="primary"
          showFull={showFull}
        />
      </CustomBoxUI>
    </CustomBoxUI>
  );
};

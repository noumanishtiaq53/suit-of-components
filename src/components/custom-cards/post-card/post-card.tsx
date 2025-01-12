import { CustomBoxUI } from "@/ui/custom-box/custom-box.ui";
import { UserInfoCard } from "../user-info-card/user-info-card";
import { CustomIconUI } from "@/ui/custom-icon/custom-icon.ui";
import { UIMoreHorizIcon } from "@/assets/ui-icons";
import { CustomCardUI } from "@/ui/custom-card/custom-card.ui";
import { CustomTypographyUI } from "@/ui/custom-typography/custom-typography.ui";
import { CustomChipList } from "@/components/custom-lists/custom-chip-list/custom-chip-list";
import { keywordsData } from "./post-card.data";
import { CustomFgImage } from "@/components/custom-images/custom-fg-image/custom-fg-image";
import { ProfileCoverCommonImage } from "@/assets/images/common";

export const PostCard = () => {
  return (
    <CustomCardUI padding={2}>
      <CustomBoxUI>
        <CustomBoxUI
          customStyles={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 1,
          }}
        >
          <UserInfoCard />
          <CustomIconUI Icon={UIMoreHorizIcon} />
        </CustomBoxUI>
        <CustomTypographyUI
          variant="body1"
          customStyles={{ my: 1 }}
          text="Here's a sneak peek of the official box cover art for Machine Wasteland II! Remember that I'll be having a stream showing a preview tommorrow at 9PM PCT!"
        />
      </CustomBoxUI>
      <CustomBoxUI customStyles={{ mx: -2, mb: 2 }}>
        <CustomFgImage imageSrc={ProfileCoverCommonImage} />
      </CustomBoxUI>
      <CustomChipList customChipListData={keywordsData} />
    </CustomCardUI>
  );
};

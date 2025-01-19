import { CustomInfoImages } from "@/components/custom-images/custom-info-images/custom-info-images";
import { CustomAvatarGroupUI } from "@/ui/custom-avatar-group/custom-avatar-group.ui";
import { CustomBoxUI } from "@/ui/custom-box/custom-box.ui";
import { CustomCardUI } from "@/ui/custom-card/custom-card.ui";
import { CustomLinearProgressUI } from "@/ui/custom-linear-progress/custom-linear-progress.ui";
import { CustomTypographyUI } from "@/ui/custom-typography/custom-typography.ui";

export const ProgressBarCard = (props: any) => {
  const {
    avatarsList = [
      { image: "" },
      { image: "" },
      { image: "" },
      { image: "" },
      { image: "" },
      { image: "" },
      { image: "" },
      { image: "" },
      { image: "" },
      { image: "" },
    ],
    name = "Social King",
    description = "You have linked at least 8 social networks to your profile",
    progress = "9/7 Completed",
    chipLabel = "123",
    max = 5,
  } = props;

  const additionalMembers =
    avatarsList?.length <= max ? 0 : avatarsList?.length - max + 1;

  return (
    <CustomCardUI chipLabel={chipLabel}>
      <CustomBoxUI customStyles={{ position: "relative" }}>
        <CustomInfoImages />
      </CustomBoxUI>
      <CustomBoxUI customStyles={{ flexGrow: 1, paddingX: 2 }}>
        <CustomTypographyUI text={name} variant="h5" />
        <br />
        <CustomTypographyUI text={description} variant="body2" />
        <CustomBoxUI customStyles={{ marginY: 2, width: "100%" }}>
          <CustomLinearProgressUI value={60} />
        </CustomBoxUI>
        <CustomTypographyUI text={progress} />
      </CustomBoxUI>
      <CustomBoxUI
        customStyles={{
          padding: 2,
          display: "flex",
          gap: 1,
          alignItems: "center",
        }}
      >
        <CustomBoxUI>
          <CustomAvatarGroupUI avatarsList={avatarsList} max={max} />
        </CustomBoxUI>
        <CustomBoxUI customStyles={{ justifySelf: "flex-end" }}>
          {!!additionalMembers && (
            <CustomTypographyUI text={`+${additionalMembers} friends`} />
          )}
          <CustomTypographyUI text={`completed this quests`} />
        </CustomBoxUI>
      </CustomBoxUI>
    </CustomCardUI>
  );
};

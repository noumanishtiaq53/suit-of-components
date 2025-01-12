import { CustomRowBadgesImages } from "@/components/custom-images/custom-row-badges-images/custom-row-badges-images";
import { CustomBoxUI } from "@/ui/custom-box/custom-box.ui";
import { CustomCardUI } from "@/ui/custom-card/custom-card.ui";
import { CustomLinearProgressUI } from "@/ui/custom-linear-progress/custom-linear-progress.ui";
import { CustomTypographyUI } from "@/ui/custom-typography/custom-typography.ui";

export const CustomBadgeCard = (props: any) => {
  const {
    name = "Bronze",
    description = "Has posted more than 1 post on their profile",
    progress = "UNLOCKED",
    chipLabel = "rwre",
  } = props;
  
  return (
    <>
      <CustomCardUI
        chipLabel={chipLabel}
        cardStyles={{ textAlign: "center", paddingY: 2 }}
      >
        <CustomBoxUI>
          <CustomRowBadgesImages />
        </CustomBoxUI>
        <CustomBoxUI customStyles={{ flexGrow: 1, paddingX: 2 }}>
          <CustomTypographyUI text={name} variant="h5" />
          <br />
          <CustomTypographyUI text={description} variant="body2" />
          <CustomBoxUI customStyles={{ marginY: 2, width: "100%" }}>
            <CustomLinearProgressUI value={60} />
          </CustomBoxUI>
        </CustomBoxUI>
        <CustomBoxUI>
          <CustomTypographyUI text={progress} />
        </CustomBoxUI>
      </CustomCardUI>
    </>
  );
};

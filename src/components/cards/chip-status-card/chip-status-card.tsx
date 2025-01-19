import { UserLinkMapButtons } from "@/components/custom-buttons/user-link-map-buttons/user-link-map-buttons";
import { CustomInfoImages } from "@/components/custom-images/custom-info-images/custom-info-images";
import { CustomBoxUI } from "@/ui/custom-box/custom-box.ui";
import { CustomCardUI } from "@/ui/custom-card/custom-card.ui";
import { CustomChipUI } from "@/ui/custom-chip/custom-chip-ui";
import { CustomTypographyUI } from "@/ui/custom-typography/custom-typography.ui";

export const ChipStatusCard = (props: any) => {
  const {
    name = "Nick'sArcade",
    description = "Nick'sArcade",
    status = "OFFLINE",
  } = props;

  const chipColor =
    status === "OFFLINE" ? "disabled" : status === "ONLINE" ? "error" : "";

  return (
    <CustomCardUI>
      <CustomBoxUI>
        <CustomInfoImages profilePosition={"center"} />
      </CustomBoxUI>
      <CustomBoxUI
        customStyles={{ flexGrow: 1, paddingX: 2, textAlign: "center" }}
      >
        <CustomTypographyUI text={name} variant="h5" />
        <CustomTypographyUI text={description} variant="body2" />
        <br />
        <CustomChipUI label={status} shape="rounded" color={chipColor} />
      </CustomBoxUI>
      <CustomBoxUI customStyles={{ padding: 2, textAlign: "center" }}>
        <UserLinkMapButtons />
      </CustomBoxUI>
    </CustomCardUI>
  );
};

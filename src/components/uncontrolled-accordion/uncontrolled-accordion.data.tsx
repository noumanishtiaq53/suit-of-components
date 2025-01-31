import { UIArrowDropDownIcon, UIExpandMoreIcon } from "@/assets/ui-icons";
import { ACCORDION_VARIANTS } from "@/constants/ui.constant";
import { CustomIconUI } from "@/ui/custom-icon/custom-icon.ui";

export const expandIcons = {
  [ACCORDION_VARIANTS?.INHERIT]: (
    <CustomIconUI fontSize="large" Icon={UIArrowDropDownIcon} />
  ),
  [ACCORDION_VARIANTS?.SECONDARY]: (
    <CustomIconUI fontSize="large" Icon={UIArrowDropDownIcon} />
  ),
  [ACCORDION_VARIANTS?.TERTIARY]: (
    <CustomIconUI
      Icon={UIExpandMoreIcon}
      customStyles={{
        backgroundColor: "primary.main",
        borderRadius: 2,
        color: "common.white",
      }}
    />
  ),
};

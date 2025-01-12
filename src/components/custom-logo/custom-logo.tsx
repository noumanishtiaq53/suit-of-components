import { UIBoltIcon } from "@/assets/ui-icons";
import { CustomBoxUI } from "@/ui/custom-box/custom-box.ui";
import { CustomIconUI } from "@/ui/custom-icon/custom-icon.ui";
import { CustomTypographyUI } from "@/ui/custom-typography/custom-typography.ui";

export const CustomLogo = (props: any) => {
  const { mode = "dark" } = props;

  return (
    <CustomBoxUI
      customStyles={{ display: "flex", alignItems: "center", gap: 1 }}
    >
      <CustomIconUI
        Icon={UIBoltIcon}
        customStyles={{
          color: mode === "light" ? "text.primary" : "common.white",
        }}
      />
      <CustomTypographyUI
        variant="logoText"
        color={mode === "light" ? "text.primary" : "common.white"}
        text="Flash0Verse"
      />
    </CustomBoxUI>
  );
};

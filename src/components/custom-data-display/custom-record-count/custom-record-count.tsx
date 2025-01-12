import { CustomBoxUI } from "@/ui/custom-box/custom-box.ui";
import { CustomTypographyUI } from "@/ui/custom-typography/custom-typography.ui";

export const CustomRecordCount = (props: any) => {
  const { recordName = "Post", recordCount = 0, hasBorder } = props;
  return (
    <CustomBoxUI
      customStyles={{
        textAlign: "center",
        borderRight: hasBorder ? "1px solid" : "none",
        borderColor: "divider",
        paddingX: 2,
      }}
    >
      <CustomTypographyUI text={recordCount} variant="subtitle1" />
      <CustomTypographyUI
        text={recordName}
        variant="overline"
        customStyles={{
          color: "text.disabled",
        }}
      />
    </CustomBoxUI>
  );
};

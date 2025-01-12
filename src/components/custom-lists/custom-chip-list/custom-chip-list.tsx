import { CustomBoxUI } from "@/ui/custom-box/custom-box.ui";
import { CustomChipUI } from "@/ui/custom-chip/custom-chip-ui";
import { Fragment } from "react";

export const CustomChipList = (props: any) => {
  const { customChipListData = [], showChips = 4 } = props;
  return (
    <CustomBoxUI
      customStyles={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        flexWrap: "wrap",
      }}
    >
      {customChipListData.length &&
        customChipListData?.slice(0, showChips)?.map((chip: any) => (
          <Fragment key={chip?._id}>
            <CustomChipUI
              label={chip?.label}
              hoverStyles={{ backgroundColor: "secondary.main" }}
              customStyles={{ cursor: "pointer" }}
            />
          </Fragment>
        ))}
      {customChipListData?.length > showChips ? (
        <CustomChipUI label={`+ ${customChipListData?.length - showChips}`} />
      ) : (
        <></>
      )}
    </CustomBoxUI>
  );
};

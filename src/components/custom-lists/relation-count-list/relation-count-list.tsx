import { CustomRecordCount } from "@/components/custom-data-display/custom-record-count/custom-record-count";
import { CustomBoxUI } from "@/ui/custom-box/custom-box.ui";
import { Fragment } from "react";

export const RelationCountList = (props: any) => {
  const { relationCountListData = [] } = props;
  return (
    <CustomBoxUI
      customStyles={{
        display: "flex",
        alignItems: "center",
      }}
    >
      {!!relationCountListData?.length &&
        relationCountListData?.map((record: any, index: number) => (
          <Fragment key={record?._id}>
            <CustomRecordCount
              recordCount={record?.count}
              recordName={record?.name}
              hasBorder={relationCountListData?.length - 1 !== index}
            />
          </Fragment>
        ))}
    </CustomBoxUI>
  );
};

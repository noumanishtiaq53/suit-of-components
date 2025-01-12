"use client";

import { CustomBoxUI } from "@/ui/custom-box/custom-box.ui";
import { CustomButtonUI } from "@/ui/custom-button/custom-button.ui";

export const UserLinkMapButtons = (props: any) => {
  const { handleViewProfile, handleVisitChannel } = props;
  return (
    <CustomBoxUI>
      <CustomBoxUI>
        <CustomButtonUI
          text={"View Profile"}
          color="secondary"
          variant="outlined"
          handleClick={() => handleViewProfile?.()}
          size="small"
        />
      </CustomBoxUI>
      <CustomBoxUI customStyles={{ mt: 1 }}>
        <CustomButtonUI
          text={"Visit Channel"}
          color="primary"
          handleClick={() => handleVisitChannel?.()}
          size="small"
        />
      </CustomBoxUI>
    </CustomBoxUI>
  );
};

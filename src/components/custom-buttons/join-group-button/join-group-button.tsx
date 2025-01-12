"use client";

import { UIGroupsIcon } from "@/assets/ui-icons";
import { CustomButtonUI } from "@/ui/custom-button/custom-button.ui";

export const JoinGroupButton = (props: any) => {
  const { handleClick } = props;
  return (
    <CustomButtonUI
      text={"Join Group"}
      color="primary"
      handleClick={() => handleClick?.()}
      fullWidth
      size="medium"
      startIcon={<UIGroupsIcon />}
    />
  );
};

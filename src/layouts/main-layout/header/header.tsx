"use client";

import { CustomBoxUI } from "@/ui/custom-box/custom-box.ui";
import { CustomTypographyUI } from "@/ui/custom-typography/custom-typography.ui";
import { pxToRem } from "@/utils/css.utils";
import { StaticMenuItems } from "../static-menu-items/static-menu-items";
import { CustomSearch } from "@/components/custom-search/custom-search";
import { CustomIconUI } from "@/ui/custom-icon/custom-icon.ui";
import { UIGridViewIcon, UISettingsIcon } from "@/assets/ui-icons";
import { onlyIconMenuItemsData } from "../static-menu-items/static-menu-items.data";
import { CustomLogo } from "@/components/custom-logo/custom-logo";

export const Header = (props: any) => {
  const { setShowFull } = props;
  return (
    <CustomBoxUI
      customStyles={{
        backgroundColor: "primary.main",
        padding: 2,
        height: pxToRem(100),
      }}
    >
      <CustomBoxUI
        customStyles={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 3,
        }}
      >
        <CustomLogo />
        <CustomIconUI
          Icon={UIGridViewIcon}
          customStyles={{
            color: "primary.light",
          }}
          hoverStyles={{
            color: "common.white",
          }}
          hasAction
          handleAction={() => setShowFull?.(true)}
        />
        <StaticMenuItems />
        <CustomBoxUI
          customStyles={{
            width: pxToRem(700),
          }}
        >
          <CustomSearch placeholder="Search here for people and groups" />
        </CustomBoxUI>
        <StaticMenuItems
          menuItemsData={onlyIconMenuItemsData}
          isIconMenu={true}
        />
        <CustomIconUI
          Icon={UISettingsIcon}
          customStyles={{ color: "common.white" }}
          hasAction
        />
      </CustomBoxUI>
    </CustomBoxUI>
  );
};

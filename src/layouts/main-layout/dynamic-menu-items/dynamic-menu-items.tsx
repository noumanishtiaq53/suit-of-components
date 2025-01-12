"use client";
import { primarySidebarMenuItemsData } from "./dynamic-menu-items.data";
import { CustomLink } from "@/components/custom-link/custom-link";
import { CustomBoxUI } from "@/ui/custom-box/custom-box.ui";
import { CustomIconUI } from "@/ui/custom-icon/custom-icon.ui";
import { CustomTypographyUI } from "@/ui/custom-typography/custom-typography.ui";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const DynamicMenuItems = (props: any) => {
  const {
    menuItemsData = primarySidebarMenuItemsData,
    isIconMenu = false,
    hasHover = true,
    showFull = false,
  } = props;

  const [isHovered, setIsHovered] = useState("");

  const pathname = usePathname();

  return (
    <>
      {menuItemsData?.map((menuItem: any) => (
        <CustomBoxUI
          key={menuItem?._id}
          customStyles={{
            padding: 1,
            marginBottom: 1.5,
            backgroundColor:
              pathname === menuItem?.route ? "secondary.main" : "",
            borderRadius: pathname === menuItem?.route ? 2 : 0,
            boxShadow: pathname === menuItem?.route ? 26 : 0,
          }}
          hoverStyles={{
            boxShadow: pathname === menuItem?.route ? 0 : 25,
            borderRadius: 2,
          }}
          {...(hasHover
            ? {
                onMouseOver: (e: any) => setIsHovered?.(menuItem?._id),
                onMouseOut: (e: any) => setIsHovered?.(""),
              }
            : {})}
        >
          <CustomLink
            linkText={
              <>
                <CustomBoxUI
                  key={menuItem?._id}
                  customStyles={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: showFull ? "" : "center",
                    gap: 2,
                  }}
                >
                  {(isIconMenu || menuItem?.hasIcon) && (
                    <CustomBoxUI
                      customStyles={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <CustomIconUI
                        Icon={menuItem?.icon}
                        customStyles={{
                          color:
                            pathname === menuItem?.route
                              ? "common.white"
                              : isHovered === menuItem?._id
                              ? "secondary.main"
                              : "grey.0",
                        }}
                      />
                    </CustomBoxUI>
                  )}
                  {showFull ? (
                    <CustomTypographyUI text={menuItem?.name} variant="h6" />
                  ) : (
                    <></>
                  )}
                </CustomBoxUI>
              </>
            }
            linkRoute={menuItem?.route}
            textColor={
              pathname === menuItem?.route ? "common.white" : "primary"
            }
          />
        </CustomBoxUI>
      ))}
    </>
  );
};

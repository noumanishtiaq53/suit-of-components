import { CustomLink } from "@/components/custom-link/custom-link";
import { Fragment } from "react";
import { primaryMenuItemsData } from "./static-menu-items.data";
import { CustomBoxUI } from "@/ui/custom-box/custom-box.ui";
import { CustomIconUI } from "@/ui/custom-icon/custom-icon.ui";
import { CustomTypographyUI } from "@/ui/custom-typography/custom-typography.ui";

export const StaticMenuItems = (props: any) => {
  const {
    menuItemsData = primaryMenuItemsData,
    textColor = "common.white",
    isIconMenu = false,
    flexDirection = "row",
    alignItems,
  } = props;

  return (
    <>
      <CustomBoxUI
        customStyles={{
          display: "flex",
          gap: 3,
          alignItems: alignItems,
          flexDirection: flexDirection,
        }}
      >
        {menuItemsData?.map((menuItem: any) => (
          <Fragment key={menuItem?._id}>
            <CustomLink
              linkText={
                menuItem?.icon ? (
                  <CustomBoxUI
                    key={menuItem?._id}
                    customStyles={{
                      display: "flex",
                      alignItems: "center",
                      gap: 3,
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
                            color: "primary.light",
                          }}
                          hoverStyles={{
                            color: "common.white",
                          }}
                        />
                      </CustomBoxUI>
                    )}
                    <CustomTypographyUI text={menuItem?.name} />
                  </CustomBoxUI>
                ) : (
                  menuItem?.name
                )
              }
              linkRoute={menuItem?.route}
              textColor={textColor}
              component="div"
            />
          </Fragment>
        ))}
      </CustomBoxUI>
    </>
  );
};

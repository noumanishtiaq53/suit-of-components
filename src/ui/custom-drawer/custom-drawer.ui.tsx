import { Drawer } from "@mui/material";

export const CustomDrawerUI = (props: any) => {
  const {
    isPortalOpen,
    closePortal,
    anchor = "left",
    children,
    variant = "temporary",
  } = props;

  return (
    <Drawer
      // hideBackdrop
      open={isPortalOpen}
      onClose={closePortal}
      anchor={anchor}
      variant={variant}
    >
      {children}
    </Drawer>
  );
};

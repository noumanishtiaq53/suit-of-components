"use client";

import { CustomBoxUI } from "@/ui/custom-box/custom-box.ui";
import { LeftSideBar } from "./left-sidebar/left-sidebar";
import { Header } from "./header/header";
import { pxToRem } from "@/utils/css.utils";
import { useState } from "react";
import { CustomDrawerUI } from "@/ui/custom-drawer/custom-drawer.ui";
import { ChatFeature } from "@/features/chat/chat.feature";

export const MainLayout = (props: any) => {
  const { children } = props;
  const [showFull, setShowFull] = useState(false);

  return (
    <>
      <CustomBoxUI>
        <CustomBoxUI
          customStyles={{
            position: "fixed",
            top: 0,
            zIndex: 1000,
            width: "100%",
          }}
        >
          <Header setShowFull={setShowFull} />
        </CustomBoxUI>

        <CustomBoxUI
          customStyles={{
            maxHeight: "calc(100vh - 100px)",
            minHeight: "calc(100vh - 100px)",
            display: "flex",
            justifyContent: "space-between",
            gap: 2,
            marginTop: pxToRem(100),
            overflow: "clip",
          }}
        >
          {showFull ? (
            <></>
          ) : (
            <CustomBoxUI
              customStyles={{
                overflow: "auto",
                display: { xs: "none", md: "block" },
              }}
            >
              <LeftSideBar showFull={showFull} />
            </CustomBoxUI>
          )}
          <CustomBoxUI customStyles={{ flex: 1, overflow: "auto", p: 2 }}>
            {children}
          </CustomBoxUI>
          <CustomBoxUI
            customStyles={{
              overflow: "auto",
            }}
          >
            <ChatFeature />
          </CustomBoxUI>
        </CustomBoxUI>
      </CustomBoxUI>

      {showFull && (
        <CustomDrawerUI
          isPortalOpen={showFull}
          closePortal={() => setShowFull(false)}
        >
          <LeftSideBar showFull={showFull} />
        </CustomDrawerUI>
      )}
    </>
  );
};

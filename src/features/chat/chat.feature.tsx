"use client";
import { CustomDrawerUI } from "@/ui/custom-drawer/custom-drawer.ui";
import { useState } from "react";
import { UserListFeature } from "./user-list/user-list.feature";

export const ChatFeature = () => {
  const [showFullBar, setShowFullBar] = useState(false);
  return (
    <>
      {showFullBar ? (
        <CustomDrawerUI
          isPortalOpen={showFullBar}
          closePortal={() => setShowFullBar(false)}
          anchor={"right"}
        >
          {" "}
          <UserListFeature
            showFullBar={showFullBar}
            setShowFullBar={setShowFullBar}
          />{" "}
        </CustomDrawerUI>
      ) : (
        <UserListFeature
          showFullBar={showFullBar}
          setShowFullBar={setShowFullBar}
        />
      )}
    </>
  );
};

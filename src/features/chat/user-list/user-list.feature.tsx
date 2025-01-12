"use client";

import { UIFilterListIcon } from "@/assets/ui-icons";
import { UserInfoCard } from "@/components/custom-cards/user-info-card/user-info-card";
import { CustomSearch } from "@/components/custom-search/custom-search";
import { SEARCH_FIELD_VARIANT } from "@/constants/fields.constant";
import { CustomBoxUI } from "@/ui/custom-box/custom-box.ui";
import { CustomIconUI } from "@/ui/custom-icon/custom-icon.ui";
import { CustomTypographyUI } from "@/ui/custom-typography/custom-typography.ui";

export const UserListFeature = (props: any) => {
  const {
    chatsLists = [
      { _id: 1 },
      { _id: 2 },
      { _id: 11 },
      // { _id: 21 },
      // { _id: 12 },
      // { _id: 22 },
      // { _id: 13 },
      // { _id: 23 },
      // { _id: 14 },
      // { _id: 24 },
      // { _id: 15 },
      // { _id: 25 },
      // { _id: 16 },
      // { _id: 26 },
      // { _id: 17 },
      // { _id: 27 },
    ],
    showFullBar,
    setShowFullBar,
  } = props;

  return (
    <CustomBoxUI
      customStyles={{
        overflow: "auto",
        minHeight: "100%",
        backgroundColor: "common.white",
        boxShadow: 25,
        position: "relative",
      }}
    >
      <CustomBoxUI
        customStyles={{
          overflow: "auto",
          minHeight: "70%",
          padding: 2,
        }}
      >
        {!!chatsLists?.length &&
          chatsLists?.map((chat: any) => (
            <CustomBoxUI customStyles={{ my: 1 }} key={chat?._id}>
              <UserInfoCard
                name={chat?.name}
                description={chat?.description}
                showInfo={showFullBar}
              />
            </CustomBoxUI>
          ))}
      </CustomBoxUI>
      {showFullBar ? (
        <CustomBoxUI
          customStyles={{
            backgroundColor: "background.main",
            p: 2,
            boxShadow: 25,
            position: "absolute",
            bottom: 60,
            zIndex: 2000,
            width: "100%",
          }}
        >
          <CustomSearch
            placeholder="Search Messages"
            searchVariant={SEARCH_FIELD_VARIANT?.BASIC}
          />
        </CustomBoxUI>
      ) : (
        <></>
      )}
      <CustomBoxUI
        customStyles={{
          backgroundColor: "secondary.main",
          p: 2,
          boxShadow: 26,
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          zIndex: 2000,
        }}
      >
        <CustomBoxUI
          customStyles={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            cursor: "pointer",
          }}
          onClick={() => setShowFullBar?.((prev: boolean) => !prev)}
        >
          <CustomIconUI Icon={UIFilterListIcon} hasAction />
          {showFullBar ? <CustomTypographyUI text="Messages / Chat" /> : <></>}
        </CustomBoxUI>
      </CustomBoxUI>
    </CustomBoxUI>
  );
};

"use client";

import { ProfileBioImages } from "@/components/custom-images/profile-bio-images/profile-bio-images";
import { CustomBoxUI } from "@/ui/custom-box/custom-box.ui";
import { CustomCardUI } from "@/ui/custom-card/custom-card.ui";
import { CustomTypographyUI } from "@/ui/custom-typography/custom-typography.ui";
import {
  customBadgesData,
  recordItemsListData,
  socialMediaAccountsListData,
} from "./profile-bio-card.data";
import {
  COVER_IMAGE_DIMENSIONS_TYPES,
  PROFILE_AVATAR_DIMENSIONS_TYPES,
  PROFILE_BIO_CARD_DIMENSIONS_TYPES,
  PROFILE_BIO_CARD_VIEW_TYPES,
} from "@/constants/dimensions.constant";
import { SocialMediaAccountsList } from "../../custom-lists/social-media-accounts-list/social-media-accounts-list";
import { RelationCountList } from "@/components/custom-lists/relation-count-list/relation-count-list";
import { EarnedBadgesList } from "@/components/custom-lists/earned-badges-list/earned-badges-list";
import { ProfileActionButtons } from "@/components/custom-buttons/profile-action-buttons/profile-action-buttons";
import { CustomIconUI } from "@/ui/custom-icon/custom-icon.ui";
import { UIFiberManualRecordIcon } from "@/assets/ui-icons";
import { useState } from "react";

export const ProfileBioCard = (props: any) => {
  const {
    dimensions = PROFILE_BIO_CARD_DIMENSIONS_TYPES?.PORTRAIT,
    outerMarginX,
    hasShadow,
    viewType = PROFILE_BIO_CARD_VIEW_TYPES?.BRIEF,
    outerHeight,
  } = props;

  const propsMap = {
    [PROFILE_BIO_CARD_DIMENSIONS_TYPES?.PORTRAIT]: {
      profileDimension: PROFILE_AVATAR_DIMENSIONS_TYPES?.LARGE,
      coverDimension: COVER_IMAGE_DIMENSIONS_TYPES?.MEDIUM,
      flexDirection: "column",
      showButton: false,
      showBadges: true,
      showBottomButtons:
        viewType === PROFILE_BIO_CARD_VIEW_TYPES?.BRIEF ? false : true,
      showMediaAccounts:
        viewType === PROFILE_BIO_CARD_VIEW_TYPES?.BRIEF ? false : true,
      showCounts: true,
      showAboutUs: viewType !== PROFILE_BIO_CARD_VIEW_TYPES?.BRIEF,
      showDots: viewType !== PROFILE_BIO_CARD_VIEW_TYPES?.BRIEF,
    },
    [PROFILE_BIO_CARD_DIMENSIONS_TYPES?.LANDSCAPE]: {
      profileDimension: PROFILE_AVATAR_DIMENSIONS_TYPES?.LARGE,
      coverDimension: COVER_IMAGE_DIMENSIONS_TYPES?.LARGE,
      flexDirection: "row",
      showButton: true,
      showBadges:
        viewType === PROFILE_BIO_CARD_VIEW_TYPES?.BRIEF ? false : true,
      showBottomButtons:
        viewType === PROFILE_BIO_CARD_VIEW_TYPES?.BRIEF ? false : true,
      showMediaAccounts: true,
      showCounts: true,
      orderInfo: 1,
      orderCount: 0,
      orderMediaAccounts: 2,
    },
  };

  const data = propsMap?.[dimensions];
  const [showAboutUs, setShowAboutUs] = useState(false);

  return (
    <CustomCardUI
      marginX={outerMarginX}
      boxShadow={hasShadow}
      height={outerHeight}
      cardStyles={{
        display: "flex",
        flexDirection: "column",
        maxHeight: "100%",
        minHeight: "100%",
      }}
    >
      <CustomBoxUI>
        <ProfileBioImages
          profileDimension={data?.profileDimension}
          coverDimension={data?.coverDimension}
          showButton={data?.showButton}
        />
      </CustomBoxUI>

      <CustomBoxUI
        customStyles={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          padding: 2,
          flexWrap: "wrap",
          flexGrow: 1,
          flexDirection: data?.flexDirection,
          zIndex: 500,
        }}
      >
        {data?.showDots && (
          <CustomBoxUI
            customStyles={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              justifyContent: "flex-end",
              paddingX: 5,
            }}
          >
            <CustomIconUI
              hasAction
              Icon={UIFiberManualRecordIcon}
              customStyles={{
                fontSize: "10px",
                color: !showAboutUs ? "text.primary" : "common.disabled",
              }}
              handleAction={() => setShowAboutUs(false)}
            />
            <CustomIconUI
              hasAction
              Icon={UIFiberManualRecordIcon}
              customStyles={{
                fontSize: "10px",
                color: showAboutUs ? "text.primary" : "common.disabled",
              }}
              handleAction={() => setShowAboutUs(true)}
            />
          </CustomBoxUI>
        )}

        <CustomBoxUI customStyles={{ order: data?.orderInfo }}>
          <CustomTypographyUI text="Marina Valentine" variant="h5" />
          <CustomTypographyUI
            text="www.gamehuntress.com"
            variant="overline"
            customStyles={{
              color: "text.disabled",
            }}
            hoverStyles={{
              color: "secondary.main",
            }}
          />
        </CustomBoxUI>
        {data?.showBadges && (
          <CustomBoxUI>
            <EarnedBadgesList earnedBadgesListData={customBadgesData} />
          </CustomBoxUI>
        )}

        {data?.showCounts && !showAboutUs && (
          <CustomBoxUI customStyles={{ order: data?.orderCount }}>
            <RelationCountList relationCountListData={recordItemsListData} />
          </CustomBoxUI>
        )}
        {data?.showAboutUs && showAboutUs && (
          <CustomBoxUI customStyles={{ order: data?.orderCount }}>
            <CustomTypographyUI text="About Us" />
          </CustomBoxUI>
        )}
        {data?.showMediaAccounts && (
          <CustomBoxUI
            customStyles={{
              order: data?.orderMediaAccounts,
            }}
          >
            <SocialMediaAccountsList
              socialMediaAccountsListData={socialMediaAccountsListData}
            />
          </CustomBoxUI>
        )}
      </CustomBoxUI>
      {data?.showBottomButtons && (
        <CustomBoxUI
          customStyles={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: 2,
            padding: 2,
          }}
        >
          <CustomBoxUI>
            <ProfileActionButtons />
          </CustomBoxUI>
        </CustomBoxUI>
      )}
    </CustomCardUI>
  );
};

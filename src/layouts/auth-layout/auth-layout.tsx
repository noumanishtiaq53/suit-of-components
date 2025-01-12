"use client";
import { BgAuthImage } from "@/assets/images";
import { CustomBgImage } from "@/components/custom-images/custom-bg-image/custom-bg-image";
import { CustomAvatarUI } from "@/ui/custom-avatar/custom-avatar.ui";
import { CustomBoxUI } from "@/ui/custom-box/custom-box.ui";
import { CustomGridUI } from "@/ui/custom-grid/custom-grid.ui";
import { CustomTypographyUI } from "@/ui/custom-typography/custom-typography.ui";

export const AuthLayout = (props: any) => {
  const { children } = props;

  return (
    <CustomBgImage isStaticBg bgImage={BgAuthImage}>
      <CustomGridUI
        isContainer
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        maxWidth="lg"
        padding={{ xs: 3, md: 4 }}
      >
        <CustomGridUI>
          <CustomBoxUI
            customStyles={{
              color: "common.white",
              textAlign: "center",
            }}
          >
            <CustomAvatarUI src={BgAuthImage?.src} />
            <CustomTypographyUI variant="h4" text="Welcome To" />
            <CustomTypographyUI variant="h1" text="FlashOVerse" />
            <CustomTypographyUI
              variant="h5"
              text="MetaHumans possess extraordinary powers, often due to accidents or mutations. The Flash, Barry Allen, gains super-speed from a lightning strike, tapping into the Speed Force, showcasing humanity’s limitless potential for evolution"
            />
          </CustomBoxUI>
        </CustomGridUI>
        <CustomGridUI>
          <CustomBoxUI
            customStyles={{
              backgroundColor: "common.white",
              padding: 3,
              borderRadius: 4,
            }}
          >
            {children}
          </CustomBoxUI>
        </CustomGridUI>
      </CustomGridUI>
    </CustomBgImage>
  );
};

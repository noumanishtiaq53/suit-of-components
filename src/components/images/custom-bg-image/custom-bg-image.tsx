import { CustomBoxUI } from "@/ui/custom-box/custom-box.ui";

export const CustomBgImage = (props: any) => {
  const { isStaticBg = true, bgImage, height, children, customStyles } = props;

  const srcBgImage = isStaticBg ? bgImage?.src : bgImage;

  return (
    <CustomBoxUI
      customStyles={{
        backgroundImage: `url(${srcBgImage})`,
        height: height,
        width: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        ...customStyles,
      }}
    >
      {children}
    </CustomBoxUI>
  );
};

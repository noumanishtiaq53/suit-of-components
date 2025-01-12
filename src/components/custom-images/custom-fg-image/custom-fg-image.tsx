import { CustomAvatarUI } from "@/ui/custom-avatar/custom-avatar.ui";

export const CustomFgImage = (props: any) => {
  const {
    isStaticImage = true,
    imageSrc,
    height = "auto",
    aspectRatio = "10 / 4",
  } = props;

  const srcFgImage = isStaticImage ? imageSrc?.src : imageSrc;

  return (
    <CustomAvatarUI
      src={srcFgImage}
      variant="square"
      customStyles={{
        width: "100%",
        height,
        aspectRatio,
        backgroundColor: "common.white",
      }}
    />
  );
};

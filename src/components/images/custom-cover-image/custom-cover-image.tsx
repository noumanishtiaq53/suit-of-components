import {
  COVER_IMAGE_DIMENSIONS,
  COVER_IMAGE_DIMENSIONS_TYPES,
} from "@/constants/dimensions.constant";
import { CustomAvatarUI } from "@/ui/custom-avatar/custom-avatar.ui";

export const CustomCoverImage = (props: any) => {
  const {
    isStaticImage,
    fgImage,
    dimension = COVER_IMAGE_DIMENSIONS_TYPES?.SMALL,
  } = props;

  const srcFgImage = isStaticImage ? fgImage?.src : fgImage;

  return (
    <CustomAvatarUI
      src={srcFgImage}
      variant="square"
      customStyles={{
        width: "100%",
        height: COVER_IMAGE_DIMENSIONS?.[dimension]?.height,
        backgroundColor: "common.white",
      }}
    />
  );
};

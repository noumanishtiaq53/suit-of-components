import { FLEX_DIRECTION } from "@/constants/css.constant";
import { CustomBoxUI } from "@/ui/custom-box/custom-box.ui";
import { CustomGridUI } from "@/ui/custom-grid/custom-grid.ui";
import { CustomSkeletonUI } from "@/ui/custom-skeleton/custom-skeleton-ui";
import { CARD_SKELETON_TYPES } from "./card-skeleton.data";
import { SKELETON_TYPES } from "@/constants/ui.constant";

export const CardSkeleton = (props: any) => {
  const { length = 4, cardType = SKELETON_TYPES?.BASIC_CARD } = props;

  const mapSkeletonCard = CARD_SKELETON_TYPES?.[cardType];

  return (
    <CustomGridUI isContainer spacing={2}>
      {Array.from({ length })?.map((item: any, id: any) => (
        <CustomGridUI
          key={item ?? `skeleton+${id}`}
          item
          xs={12}
          md={4}
          {...mapSkeletonCard?.gridSize}
        >
          <CustomBoxUI
            customStyles={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              justifyContent: "space-between",
              flexDirection: mapSkeletonCard?.flexDirection,
              px: mapSkeletonCard?.outerPadding?.x ?? 1,
              py: mapSkeletonCard?.outerPadding?.y ?? 1,
              borderRadius: 2,
              border: "1px solid",
              borderColor: "custom.off_white_three",
            }}
          >
            {mapSkeletonCard?.hasCircularSkeleton && (
              <CustomSkeletonUI
                animation="wave"
                variant={mapSkeletonCard?.isCircular}
                width={
                  mapSkeletonCard?.flexDirection === FLEX_DIRECTION?.COLUMN
                    ? (mapSkeletonCard?.circularSkeletonSize?.width ?? 50)
                    : (mapSkeletonCard?.circularSkeletonSize?.width ?? 100)
                }
                height={mapSkeletonCard?.circularSkeletonSize?.height ?? 50}
                customStyles={{
                  bgcolor: "grey.300",
                  border: "1px solid",
                  borderColor: "custom.off_white_three",
                }}
              />
            )}
            <CustomBoxUI
              customStyles={{
                width: "100%",
                display: "flex",
                gap: 2,
                flexDirection: mapSkeletonCard?.flexDirectionRectangular,
              }}
            >
              <CustomSkeletonUI
                animation="wave"
                variant={"rectangular"}
                width={"100%"}
                height={25}
                customStyles={{
                  bgcolor: "grey.300",
                  border: "1px solid",
                  borderColor: "custom.off_white_three",
                }}
              />
              {mapSkeletonCard?.hasThirdSkeleton && (
                <CustomSkeletonUI
                  animation="wave"
                  variant={"rectangular"}
                  width={"100%"}
                  height={25}
                  customStyles={{
                    bgcolor: "grey.300",
                    border: "1px solid",
                    borderColor: "custom.off_white_three",
                  }}
                />
              )}
            </CustomBoxUI>
          </CustomBoxUI>
        </CustomGridUI>
      ))}
    </CustomGridUI>
  );
};

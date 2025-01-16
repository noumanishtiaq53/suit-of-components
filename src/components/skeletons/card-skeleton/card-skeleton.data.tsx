import { FLEX_DIRECTION } from "@/constants/css.constant";
import { SKELETON_TYPES, SKELETON_VARIANTS } from "@/constants/ui.constant";

const basicCardDesign = {
  gridSize: {},
  flexDirection: FLEX_DIRECTION?.ROW,
  outerPadding: { x: 1, y: 1 },
  hasCircularSkeleton: true,
  circularSkeletonSize: { width: 50, height: 50 },
  isCircular: SKELETON_VARIANTS?.CIRCULAR,
  flexDirectionRectangular: FLEX_DIRECTION?.ROW,
  hasThirdSkeleton: true,
};

export const CARD_SKELETON_TYPES = {
  [SKELETON_TYPES?.BASIC_CARD]: {
    ...basicCardDesign,
  },
  [SKELETON_TYPES?.MEDIUM_HORIZONTAL_TWO_LAYER_ROUNDED_CARD]: {
    ...basicCardDesign,
    outerPadding: { x: 1, y: 2 },
    circularSkeletonSize: { width: 70, height: 50 },
    isCircular: SKELETON_VARIANTS?.ROUNDED,
    hasThirdSkeleton: false,
  },
  [SKELETON_TYPES?.LARGE_VERTICAL_TWO_LAYER_DOUBLE_CARD]: {
    ...basicCardDesign,
    gridSize: { md: 6 },
    flexDirection: FLEX_DIRECTION?.COLUMN,
    outerPadding: { x: 2, y: 6 },
    circularSkeletonSize: { width: "100%", height: 25 },
    isCircular: SKELETON_VARIANTS?.ROUNDED,
    hasThirdSkeleton: false,
  },
  [SKELETON_TYPES?.SMALL_HORIZONTAL_TWO_LAYER_CIRCULAR_CARD]: {
    ...basicCardDesign,
    gridSize: { md: 12 },
    circularSkeletonSize: { width: 25, height: 25 },
    hasThirdSkeleton: false,
  },
  [SKELETON_TYPES?.VERTICAL_TWO_LAYER_DOUBLE_CIRCULAR_LARGE_CARD]: {
    ...basicCardDesign,
    gridSize: { md: 12 },
    flexDirection: FLEX_DIRECTION?.COLUMN,
  },
  [SKELETON_TYPES?.THREE_LAYER_BIG_LARGE_CARD]: {
    ...basicCardDesign,
    gridSize: { md: 12 },
    outerPadding: { x: 2, y: 3 },
  },
  [SKELETON_TYPES?.THREE_LAYER_LARGE_REVERSE_CARD]: {
    ...basicCardDesign,
    gridSize: { md: 12 },
    outerPadding: { x: 2, y: 3 },
    flexDirection: FLEX_DIRECTION?.ROW_REVERSE,
  },
  [SKELETON_TYPES?.TWO_LAYER_CARD]: {
    ...basicCardDesign,
    hasThirdSkeleton: false,
  },
};

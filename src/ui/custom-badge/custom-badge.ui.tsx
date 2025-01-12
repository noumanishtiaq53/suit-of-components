import {
  BADGE_POSITION,
  BADGE_POSITION_ANCHOR,
} from "@/constants/badge.constant";
import { Badge } from "@mui/material";

export const CustomBadgeUI = (props: any) => {
  const {
    children,
    badgeContent,
    color,
    customStyles,
    hoverStyles,
    variant,
    position = BADGE_POSITION?.TOP_LEFT,
    invisible = false,
    max = 99,
    overlap,
    component = "div",
  } = props;

  return (
    <Badge
      badgeContent={badgeContent}
      color={color}
      variant={variant}
      anchorOrigin={BADGE_POSITION_ANCHOR?.[position]}
      invisible={invisible}
      max={max}
      overlap={overlap}
      component={component}
      sx={{
        ...customStyles,
        "&:hover": {
          ...hoverStyles,
        },
      }}
    >
      {children}
    </Badge>
  );
};

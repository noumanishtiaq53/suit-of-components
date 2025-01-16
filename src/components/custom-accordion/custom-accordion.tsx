"use client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { ACCORDION_VARIANTS } from "@/constants/ui.constant";
import { customAccordionStyles } from "./custom-accordion.styles";
import { expandIcons } from "./custom-accordion.data";

export const CustomAccordion = (props: any) => {
  const {
    accordionSummary,
    children,
    summaryTitle,
    variantType = ACCORDION_VARIANTS?.SECONDARY,
    customStyles = {},
    summaryRootStyles = {},
    summaryContentStyles = {},
    disableGutters = true,
    summaryKey = summaryTitle,
    disabled,
    hasHover = false,
    onMouseEnter,
    onMouseLeave,
    expandIcon,
  } = props;

  const accordionVariantStyles = customAccordionStyles?.[variantType];
  const mappedExpandIcon = expandIcon ?? expandIcons?.[variantType];

  return (
    <Accordion
      disabled={disabled}
      disableGutters={disableGutters}
      sx={{
        "& .MuiAccordionSummary-root": {
          ...accordionVariantStyles?.summary,
          ...summaryRootStyles,
        },
        "& .MuiAccordionSummary-content": {
          alignItems: "center",
          ...accordionVariantStyles?.summaryContent,
          ...summaryContentStyles,
        },
        "& .MuiAccordionDetails-root": {
          ...accordionVariantStyles?.details,
        },
        "&.MuiPaper-root": {
          borderRadius: 2,
          backgroundColor: "transparent",
        },
        ...accordionVariantStyles?.root,
        ...customStyles,
      }}
    >
      <AccordionSummary
        expandIcon={mappedExpandIcon}
        aria-controls={`${summaryKey}-content`}
        id={`${summaryKey}-header`}
        {...(hasHover
          ? {
              onMouseEnter: () => onMouseEnter?.(summaryKey),
              onMouseLeave: () => onMouseLeave?.(null),
            }
          : {})}
      >
        {accordionSummary}
        {summaryTitle && <Typography>{summaryTitle}</Typography>}
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

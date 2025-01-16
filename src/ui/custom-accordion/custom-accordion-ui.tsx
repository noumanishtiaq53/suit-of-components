import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

export const CustomAccordionUI = (props: any) => {
  const {
    hasHover,
    disabled,
    disableGutters = true,
    summaryRootStyles,
    summaryContentStyles,
    detailsRootStyles,
    customStyles,
    paperRootStyles,
    expandIcon,
    summaryKey,
    accordionSummary,
    onMouseEnter,
    onMouseLeave,
    children,
  } = props;

  return (
    <Accordion
      disabled={disabled}
      disableGutters={disableGutters}
      sx={{
        "& .MuiAccordionSummary-root": {
          ...summaryRootStyles,
        },
        "& .MuiAccordionSummary-content": {
          ...summaryContentStyles,
        },
        "& .MuiAccordionDetails-root": {
          ...detailsRootStyles,
        },
        "&.MuiPaper-root": {
          ...paperRootStyles,
        },
        ...customStyles,
      }}
    >
      <AccordionSummary
        expandIcon={expandIcon}
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
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

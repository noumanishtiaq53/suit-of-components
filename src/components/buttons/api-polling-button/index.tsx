import { CustomLinearProgress } from "@/components/ProgressBars/CustomLinearProgress";
import { useApiPolling } from "@/hooks/use-api-polling";
import { pxToRem } from "@/utils/getFontValue";
import { Autorenew } from "@mui/icons-material";
import { Box, Button } from "@mui/material";

export const ApiPollingButton = (props: any) => {
  const {
    onClick,
    showLoader,
    variant = "outlined",
    isSmall = true,
    customStyles,
    isFetching,
    fulfilledTimeStamp,
    intervalTime,
  } = props;

  const pollProps = {
    isFetching,
    fulfilledTimeStamp,
    intervalTime,
  };

  const { timeLapse } = useApiPolling(pollProps);

  return (
    <Button
      variant={variant}
      color="inherit"
      size="small"
      className={isSmall ? "small" : ""}
      startIcon={<Autorenew />}
      onClick={onClick}
      disabled={showLoader}
      sx={{
        fontSize: pxToRem(12),
        fontWeight: "fontWeightRegular",
        textTransform: "lowercase",
        ...customStyles,
      }}
    >
      {!!showLoader ? (
        <Box>
          <CustomLinearProgress />
        </Box>
      ) : (
        timeLapse?.lastFetchLapseTime
      )}
    </Button>
  );
};

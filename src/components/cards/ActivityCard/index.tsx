import { Box, Typography } from "@mui/material";
import { fullName } from "@/utils/avatarUtils";
import { TruncateText } from "@/components/TruncateText";
import { LogInfo } from "@/components/LogInfo";
import { otherDateFormat } from "@/lib/date-time";

export const ActivityCard = (props: any) => {
  const {
    Icon = null,
    firstName,
    lastName,
    activityType,
    moduleName,
    activityDate,
    dateFormat,
  } = props;

  return (
    <Box
      display="flex"
      gap={2}
      bgcolor="common.white"
      borderBottom="1px solid"
      borderColor="grey.700"
      px={2}
      py={1.5}
    >
      <Box>{Icon !== null && Icon}</Box>
      <Box>
        <LogInfo
          performer={fullName(firstName, lastName)}
          logType={`has ${activityType?.toLowerCase()}`}
          log={<TruncateText text={moduleName} size={35} isCapital={false} />}
          logColor="custom.bright"
          logProps={{
            sx: {
              wordBreak: "break-all",
            },
          }}
        />
        <Typography color={"grey.600"} component={"p"} variant="body3">
          {otherDateFormat(activityDate, dateFormat)}
        </Typography>
      </Box>
    </Box>
  );
};

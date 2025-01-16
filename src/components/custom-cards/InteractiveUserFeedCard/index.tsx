import { Box, Typography } from "@mui/material";
import { fullName, fullNameInitial } from "@/utils/avatarUtils";
import { MoreVert } from "@mui/icons-material";
import { TruncateText } from "@/components/TruncateText";
import { UserInfo } from "@/components/UserInfo";
import { PublicSingleDropdownButton } from "@/components/Buttons/PublicSingleDropdownButton";
import { formatTimeDifference } from "@/lib/date-time";

export const InteractiveUserFeedCard = (props: any) => {
  const {
    dropdownAnnouncementsOptions,
    title,
    hasBorderBottom,
    userName,
    userAvatarSrc,
    hasAction,
    dateFrom,
  } = props;

  return (
    <Box
      px={2}
      py={1.5}
      borderBottom={hasBorderBottom ? "1px solid" : ""}
      borderColor={"custom.off_white"}
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        gap={1}
      >
        <Typography
          fontWeight={"fontWeightMedium"}
          component={"div"}
          color={"blue.main"}
        >
          <TruncateText text={title} />
        </Typography>
        <Box display={"flex"} flexWrap={"wrap"} gap={1}>
          <UserInfo
            nameInitial={fullNameInitial(userName)}
            name={fullName(userName)}
            avatarSrc={userAvatarSrc}
          />
          {hasAction && (
            <Box>
              <PublicSingleDropdownButton
                dropdownOptions={dropdownAnnouncementsOptions}
                dropdownName={<MoreVert />}
                hasEndIcon={false}
                btnVariant="text"
                sx={{ padding: 0 }}
              />
            </Box>
          )}
        </Box>
      </Box>
      <Typography color={"grey.900"} component={"p"} variant="body3">
        {formatTimeDifference(dateFrom)}
      </Typography>
    </Box>
  );
};

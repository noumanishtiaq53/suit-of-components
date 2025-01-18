import { Box, Typography } from '@mui/material';
import { Add } from '@mui/icons-material';

export const AddNewCard = (props: any) => {
  const {
    onClick,
    title,
    outerPaddingY = 4,
    flexDirection = 'column',
    iconBackgroundColor = 'primary.lighter',
    iconBorderColor = 'transparent',
    iconColor = 'primary.main',
  } = props;

  return (
    <Box
      padding={2}
      paddingY={outerPaddingY}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection={flexDirection}
      gap={1}
      height="100%"
      border="1px solid"
      borderColor="custom.off_white_three"
      borderRadius={2}
      sx={{ cursor: 'pointer' }}
      onClick={onClick}
    >
      <Box
        sx={{
          backgroundColor: iconBackgroundColor,
          borderRadius: '50%',
          border: '1px solid',
          borderColor: iconBorderColor,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 0.6,
        }}
      >
        <Add fontSize="large" color="primary" sx={{ color: iconColor }} />
      </Box>
      {title && (
        <Typography fontWeight={600} color="slateBlue.main">
          {title}
        </Typography>
      )}
    </Box>
  );
};

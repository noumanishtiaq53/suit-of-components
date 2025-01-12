import { EditColoredIcon, ViewEyeIcon } from '@/assets/icons';
import { Box, Typography, useTheme } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { useState } from 'react';

const icons: any = {
  view: <ViewEyeIcon />,
  edit: <EditColoredIcon />,
  delete: <Delete color="primary" fontSize="small" />,
};

export const ItemInitialHoveredIconCard = (props: any) => {
  const {
    hasHover = true,
    initial,
    name,
    onIconClick,
    iconList = ['view'],
    id = undefined,
  } = props;

  const theme = useTheme();
  const setId = !!id ? id : null;

  const [isIconVisible, setIsIconVisible] = useState(null);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        gap: 1,
        ...(initial
          ? {
              mb: 2,
              bgcolor: 'common.white',
              borderRadius: 2,
              p: 1,
              height: 55,
              borderLeft: `4px solid ${theme?.palette?.primary?.main}`,
            }
          : {}),
      }}
      {...(hasHover
        ? {
            onMouseEnter: () => setIsIconVisible?.(setId),
            onMouseLeave: () => setIsIconVisible?.(null),
          }
        : {})}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {initial && (
          <Typography
            variant={'body1'}
            color={'custom.bluish_gray'}
            sx={{
              fontWeight: 'fontWeightSmall',
              borderRight: `2px solid ${theme?.palette?.custom?.bluish_gray}`,
              px: 1.5,
            }}
          >
            {initial}
          </Typography>
        )}
        <Typography
          variant={'body1'}
          sx={{
            fontWeight: 'fontWeightSmall',
            ml: 1,
            textTransform: 'capitalize',
          }}
          color={'grey.600'}
        >
          {name}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
        {isIconVisible === id ? (
          iconList?.map((item: any) => (
            <Box
              key={item}
              sx={{ cursor: 'pointer' }}
              onClick={(e: any) => onIconClick?.(e, item)}
            >
              {icons?.[item]}
            </Box>
          ))
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
};

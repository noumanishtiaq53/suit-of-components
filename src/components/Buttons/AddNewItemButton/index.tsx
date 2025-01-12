import { AddBox, AddCircle } from '@mui/icons-material';
import { Button } from '@mui/material';

const mappedIcon: any = {
  circle: AddCircle,
  square: AddBox,
};

export const AddNewItemButton = (props: any) => {
  const {
    disabled = false,
    variant = 'contained',
    name,
    color = 'primary',
    onClick,
    hasStartIcon = true,
    hasEndIcon = false,
    iconType = 'circle',
  } = props;

  const MapIcon = mappedIcon?.[iconType];

  return (
    <Button
      variant={variant}
      color={color}
      disableElevation
      disabled={disabled}
      className="small"
      size="small"
      startIcon={hasStartIcon && <MapIcon />}
      endIcon={hasEndIcon && <MapIcon />}
      onClick={() => onClick?.()}
      sx={{
        '& .MuiButton-startIcon': {
          ...(!!name ? {} : { marginRight: 0, marginLeft: 0 }),
        },
      }}
    >
      {name}
    </Button>
  );
};

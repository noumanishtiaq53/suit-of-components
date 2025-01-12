import { ACCORDION_VARIANTS } from '@/constants/mui-constant';
import { ArrowDropDown, ExpandMore } from '@mui/icons-material';

export const expandIcons = {
  [ACCORDION_VARIANTS?.INHERIT]: <ArrowDropDown fontSize="large" />,
  [ACCORDION_VARIANTS?.SECONDARY]: <ArrowDropDown fontSize="large" />,
  [ACCORDION_VARIANTS?.TERTIARY]: (
    <ExpandMore
      sx={{
        backgroundColor: 'primary.main',
        borderRadius: 2,
        color: 'common.white',
      }}
    />
  ),
};

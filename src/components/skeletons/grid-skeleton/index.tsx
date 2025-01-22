import { CustomGrid } from "@/components/Grids/CustomGrid";
import { Box, useTheme } from "@mui/material";
import { TableSkeleton } from "../table-skeleton";

export const GridSkeleton = () => {
  const theme = useTheme();
  return (
    <Box
      border="2px solid"
      borderRadius={2}
      padding={1}
      borderColor="custom.off_white_three"
    >
      <CustomGrid isContainer>
        {Array.from({ length: 3 })?.map((item: any, id: any) => (
          <CustomGrid
            xs={12}
            md={3.9}
            customStyles={{
              px: 1.5,
              borderRight: {
                md:
                  id !== length - 1
                    ? `1px solid ${theme?.palette?.custom?.off_white_three}`
                    : "none",
              },
              borderBottom: {
                xs: `1px solid ${theme?.palette?.custom?.off_white_three}`,
                md: "none",
              },
            }}
            key={item ?? `skeleton+${id}`}
          >
            <TableSkeleton length={3} />
          </CustomGrid>
        ))}
      </CustomGrid>
    </Box>
  );
};

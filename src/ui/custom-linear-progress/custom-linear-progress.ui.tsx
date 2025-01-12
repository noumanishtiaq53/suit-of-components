import { LinearProgress } from "@mui/material";
import { CustomBoxUI } from "../custom-box/custom-box.ui";
import { CustomTypographyUI } from "../custom-typography/custom-typography.ui";
import { pxToRem } from "@/utils/css.utils";

export const CustomLinearProgressUI = (props: any) => {
  const {
    variant = "determinate",
    value,
    showLabel = false,
    backgroundBarColor = "background.default",
    progressBarColor = "linear-gradient(90deg, rgba(97,93,250,1) 0%, rgba(35,210,226,0.7917542016806722) 65%);",
  } = props;
  return (
    <CustomBoxUI customStyles={{ display: "flex", alignItems: "center" }}>
      <CustomBoxUI customStyles={{ width: "100%", mr: 1 }}>
        <LinearProgress
          variant={variant}
          value={value}
          sx={{
            borderRadius: 3,
            height: pxToRem(5),
            "&.MuiLinearProgress-root": { backgroundColor: backgroundBarColor },
            "& .MuiLinearProgress-bar": {
              background: progressBarColor,
            },
          }}
        />
      </CustomBoxUI>
      {showLabel && (
        <CustomBoxUI customStyles={{ minWidth: 35 }}>
          <CustomTypographyUI
            variant="body2"
            customStyles={{ color: "text.primary" }}
            text={`${Math.round(value)}%`}
          />
        </CustomBoxUI>
      )}
    </CustomBoxUI>
  );
};

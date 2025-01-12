import { InputAdornment, TextField } from "@mui/material";

export const CustomTextFieldUI = (props: any) => {
  const {
    label = "",
    variant = "outlined",
    size = "large",
    error = false,
    helperText = "",
    multiline = false,
    name,
    onChange,
    onBlur,
    fullWidth = true,
    startIcon = undefined,
    endIcon = undefined,
    required = false,
    placeholder,
    backgroundColor,
    borderRadius,
    border,
    color,
    borderColor,
  } = props;

  return (
    <TextField
      label={label}
      variant={variant}
      size={size}
      error={error}
      helperText={helperText}
      slotProps={{
        input: {
          startAdornment: startIcon ? (
            <InputAdornment position="start">{startIcon}</InputAdornment>
          ) : undefined,
          endAdornment: endIcon ? (
            <InputAdornment position="end">{endIcon}</InputAdornment>
          ) : undefined,
        },
      }}
      multiline={multiline}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      fullWidth={fullWidth}
      placeholder={placeholder}
      sx={{
        backgroundColor,
        borderRadius,
        border,
        borderColor,
        "& .MuiTextField-root": {
          border,
          borderColor,
        },
        "& .MuiInputBase-root": {
          color,
        },
        "& fieldset": { border },
      }}
    />
  );
};

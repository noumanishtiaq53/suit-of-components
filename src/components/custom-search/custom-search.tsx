"use client";
import { CustomTextFieldUI } from "@/ui/custom-fields/custom-text-field.ui";
import { CustomIconUI } from "@/ui/custom-icon/custom-icon.ui";
import { UISearchIcon } from "@/assets/ui-icons";
import {
  SEARCH_FIELD_APPLY,
  SEARCH_FIELD_VARIANT,
} from "@/constants/fields.constant";

export const CustomSearch = (props: any) => {
  const {
    setSearch,
    search,
    placeholder,
    fullWidth = true,
    searchVariant = SEARCH_FIELD_VARIANT?.PRIMARY,
  } = props;

  const handleSearch = (e: any) => {
    setSearch?.(e?.target?.value);
  };

  return (
    <CustomTextFieldUI
      fullWidth={fullWidth}
      label=""
      onChange={handleSearch}
      value={search}
      endIcon={
        <CustomIconUI
          Icon={UISearchIcon}
          customStyles={{
            color:
              SEARCH_FIELD_APPLY?.[searchVariant]?.iconColor ?? "primary.light",
          }}
        />
      }
      placeholder={placeholder}
      backgroundColor={
        SEARCH_FIELD_APPLY?.[searchVariant]?.backgroundColor ?? "primary.dark"
      }
      borderRadius={2}
      border={SEARCH_FIELD_APPLY?.[searchVariant]?.border ?? "none"}
      color={SEARCH_FIELD_APPLY?.[searchVariant]?.color ?? "common.white"}
      borderColor={SEARCH_FIELD_APPLY?.[searchVariant]?.borderColor ?? "common.white"}
    />
  );
};

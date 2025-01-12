import { CustomTypographyUI } from "@/ui/custom-typography/custom-typography.ui";
import Link from "next/link";
import { ICustomLinkProps } from "./custom-link.interface";

export const CustomLink = (props: ICustomLinkProps) => {
  const {
    linkRoute = "#",
    linkText,
    component = "span",
    textColor = "secondary.main",
    variant = "linkText",
  } = props;
  return (
    <Link href={linkRoute}>
      <CustomTypographyUI
        component={component}
        text={linkText}
        variant={variant}
        textColor={textColor}
      />
    </Link>
  );
};

import { ReactNode } from "react";

export interface ICustomLinkProps {
  linkText: string | ReactNode;
  linkRoute?: string;
  component?: string;
  textColor?: string;
  variant?: string;
}

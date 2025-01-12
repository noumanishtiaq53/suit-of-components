import { AuthLayout } from "@/layouts/auth-layout/auth-layout";

export const AuthRootLayout = (props: any) => {
  const { children } = props;

  return <AuthLayout>{children}</AuthLayout>;
};

export default AuthRootLayout;

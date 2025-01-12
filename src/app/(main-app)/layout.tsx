import { MainLayout } from "@/layouts/main-layout/main-layout";

export const MainAppLayout = (props: any) => {
  const { children } = props;
  return (
    <>
      <MainLayout>{children}</MainLayout>
    </>
  );
};
export default MainAppLayout;

"use client";

import { ToastContainer } from "react-toastify";

export const SnackBarProvider = (props: any) => {
  const { children } = props;
  return (
    <>
      {children}
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        limit={1}
      />
    </>
  );
};

"use client";
import { MESSAGES } from "@/constants/messages.constant";
import { toast } from "react-toastify";

export const successSnackbar = (message = MESSAGES?.SUCCESS) => {
  const toastMessage = Array?.isArray(message) ? message?.[0] : message;
  return toast.success(toastMessage);
};

export const errorSnackbar = (message = MESSAGES?.SOMETHING_WENT_WRONG) => {
  const toastMessage = Array?.isArray(message) ? message?.[0] : message;
  return toast.error(toastMessage);
};

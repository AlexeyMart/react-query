import { toast } from "react-toastify";

export const successNotification = (message: string) =>
  toast(message, { type: "success" });

export const errorNotification = (message: string) =>
  toast(message, { type: "error" });

import { Typography } from "antd";
import { AxiosError } from "axios";
import { FC } from "react";

interface Props {
  error: unknown;
}

export const ErrorComponent: FC<Props> = ({ error }) => {
  const isAxiosError = error instanceof AxiosError;

  return (
    <Typography.Title level={3}>
      {isAxiosError ? error.message : "something went wrong"}
    </Typography.Title>
  );
};

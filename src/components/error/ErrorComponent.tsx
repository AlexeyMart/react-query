import { Typography } from "antd";
import { AxiosError } from "axios";
import { FC } from "react";

interface Props {
  error: unknown;
}

export const ErrorComponent: FC<Props> = ({ error }) => {
  return (
    <Typography.Title level={3}>
      {(error as AxiosError).message}
    </Typography.Title>
  );
};

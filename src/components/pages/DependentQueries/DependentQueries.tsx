import { FC } from "react";
import { Typography } from "antd";
import { useUserData, useChannelData } from "../../../queries/useDependentData";
import { ErrorComponent } from "../../error/ErrorComponent";

interface Props {
  userId: string;
}

export const DependentQueries: FC<Props> = ({ userId }) => {
  const {
    isLoading: isUserLoading,
    isFetching: isUserFetching,
    isError: isUserError,
    error: userError,
    data: user,
  } = useUserData(userId);

  const channelId = user?.channelId;

  const {
    isLoading: isChannelLoading,
    isFetching: isChannelFetching,
    isError: isChannelError,
    error: channelError,
    data: channel,
  } = useChannelData(channelId);

  if (isUserLoading || isUserFetching) {
    return <Typography.Title level={3}>User is Loading...</Typography.Title>;
  }

  if (isChannelLoading || isChannelFetching) {
    return <Typography.Title level={3}>Channel is Loading...</Typography.Title>;
  }

  if (isUserError) {
    return <ErrorComponent error={userError} />;
  }

  if (isChannelError) {
    return <ErrorComponent error={channelError} />;
  }

  const renderCourse = (course: string) => (
    <Typography.Title key={course} level={4}>
      {course}
    </Typography.Title>
  );

  return (
    <div>
      <Typography.Title>DependentQueries Page</Typography.Title>

      {channel && channel.courses.map(renderCourse)}
    </div>
  );
};

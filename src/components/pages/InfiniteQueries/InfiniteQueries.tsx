import { FC, Fragment } from "react";
import { Typography, Button } from "antd";
import { ErrorComponent } from "../../error/ErrorComponent";
import { useInfiniteData } from "../../../queries/useInfiniteData";
import { Color } from "../../../types";
import { Loader } from "../../loader/Loader";

export const InfiniteQueries: FC = () => {
  const {
    isLoading,
    isFetching,
    isFetchingNextPage,
    isError,
    data,
    error,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteData();

  const renderColor = ({ id, label }: Color) => {
    return (
      <Typography.Title key={id} level={4}>
        {label}
      </Typography.Title>
    );
  };

  const renderGroup = (
    group: { colors: Color[]; hasMore: any },
    index: number
  ) => <Fragment key={index}>{group.colors.map(renderColor)}</Fragment>;

  const handleLoadMore = () => {
    fetchNextPage();
  };

  if (isError) {
    return <ErrorComponent error={error} />;
  }

  return (
    <div>
      <Typography.Title>InfiniteQueries Page</Typography.Title>

      {(isLoading || isFetching || isFetchingNextPage) && <Loader />}

      {/* в data.pages лежит массив, куда складываются возвращаемые значения fetcherFn */}
      {data && <div>{data.pages.map(renderGroup)}</div>}

      <Button onClick={handleLoadMore} disabled={!hasNextPage}>
        Load more
      </Button>
    </div>
  );
};

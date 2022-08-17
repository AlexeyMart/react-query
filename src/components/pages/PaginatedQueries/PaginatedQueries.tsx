import { FC, useState } from "react";
import { Typography, Button } from "antd";
import { ErrorComponent } from "../../error/ErrorComponent";
import { usePaginatedData } from "../../../queries/usePaginatedData";
import { Color } from "../../../types";
import { Loader } from "../../loader/Loader";

export const PaginatedQueries: FC = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const { isLoading, isFetching, isError, data, error } =
    usePaginatedData(pageNumber);

  // в db.json всего 8 цветов, api отдает по 2 (fn fetchColors) => страницы 1...4
  const handleClickPrevButton = () =>
    setPageNumber((pageNumber) => Math.max(1, pageNumber - 1));

  const handleClickNextButton = () =>
    setPageNumber((pageNumber) => Math.min(4, pageNumber + 1));

  const renderColor = ({ id, label }: Color) => {
    return (
      <Typography.Title key={id} level={4}>
        {label}
      </Typography.Title>
    );
  };

  if (isError) {
    return <ErrorComponent error={error} />;
  }

  return (
    <div>
      <Typography.Title>PaginatedQueries Page</Typography.Title>

      {(isLoading || isFetching) && <Loader />}

      <Typography.Title level={5}>Page: {pageNumber}</Typography.Title>

      <div style={{ marginBottom: "30px" }}>
        <Button onClick={handleClickPrevButton}>Prev page</Button>

        <Button onClick={handleClickNextButton}>Next page</Button>
      </div>

      {data && <div>{data.map(renderColor)}</div>}
    </div>
  );
};

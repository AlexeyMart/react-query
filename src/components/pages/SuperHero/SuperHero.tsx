import { FC } from "react";
import { useParams } from "react-router-dom";
import { useSuperHeroData } from "../../../queries/useSuperHeroData";
import { Card, Typography } from "antd";
import { Loader } from "../../loader/Loader";
import { ErrorComponent } from "../../error/ErrorComponent";

export const SuperHero: FC = () => {
  const { heroId } = useParams<{ heroId: string }>();

  const { isLoading, isFetching, isError, data, error } = useSuperHeroData(
    heroId as string
  );

  if (isError) {
    return <ErrorComponent error={error} />;
  }

  return (
    <div>
      <Typography.Title>SuperHero Page</Typography.Title>

      {data && (
        <Card title={data.name}>
          <p>{data.alterEgo}</p>
        </Card>
      )}

      {(isLoading || isFetching) && <Loader />}
    </div>
  );
};

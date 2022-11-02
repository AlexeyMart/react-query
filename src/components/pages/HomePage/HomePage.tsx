import { FC, useState, useEffect, useRef } from "react";
import { Typography, Button } from "antd";

export const HomePage: FC = () => {
  const [time, setTime] = useState(0);

  const refInterval = useRef<null | number>(null);

  useEffect(() => {
    if (time > 0 && !refInterval.current) {
      refInterval.current = window.setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    }

    if (time === 0 && refInterval.current) {
      window.clearInterval(refInterval.current);

      refInterval.current = null;
    }
  }, [time]);

  const handleClick = () => {
    setTime(15);
  };

  return (
    <>
      <Typography.Title>Home Page {time}</Typography.Title>

      <Button disabled={time !== 0} onClick={handleClick}>
        Refresh
      </Button>
    </>
  );
};

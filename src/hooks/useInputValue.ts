import { useState, ChangeEvent } from "react";

export function useInputValue(initialValue: string = "") {
  const [value, setValue] = useState(initialValue);

  const onChange = (event: ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  return [value, onChange] as const;
}

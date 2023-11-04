import { FormEvent } from "react";
import { ListType, Side } from "./types";

interface Props {
  list: ListType;
  side: Side;
  submitHandler: (evt: FormEvent) => void;
}
export const ListForm = ({ list, side, submitHandler }: Props) => {
  return (
    <form onSubmit={submitHandler} id={side}>
      <input type="hidden" value={side} name="side" />
      {list.map((item: number | string) => (
        <div key={item}>
          <input type="checkbox" id={item.toString()} name={item.toString()} />
          <label htmlFor={item.toString()}>{item}</label>
        </div>
      ))}
    </form>
  );
};

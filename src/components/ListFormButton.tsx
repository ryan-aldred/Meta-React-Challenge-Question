import { Side } from "./types";

interface Props {
  side: Side;
}

export const ListFormButton = ({ side }: Props) => {
  return (
    <button type="submit" form={side}>
      {side === Side.Left ? ">" : "<"}
    </button>
  );
};

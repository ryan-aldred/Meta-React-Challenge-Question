import { useState, FormEvent } from "react";
import { ListForm } from "./ListForm";
import { ListType, Side } from "./types";
import { ListFormButton } from "./ListFormButton";
import "./FancyThing.css";

interface Props {
  list: ListType;
}
export default function FancyThing({ list }: Props) {
  const [leftList, setLeftList] = useState<ListType>(list);
  const [rightList, setRightList] = useState<ListType>([]);

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    // todo better ts validation
    const formData = new FormData(evt.target as HTMLFormElement);
    const side = formData.get("side");

    if (!side || typeof side !== "string") throw new Error("Invalid side");

    formData.delete("side");
    const moveList = [...formData.keys()];

    const currentSideList = side === Side.Left ? rightList : leftList;
    const setCurrentSideList = side === Side.Left ? setRightList : setLeftList;
    const setNewSideList = side === Side.Left ? setLeftList : setRightList;

    const newList = [...currentSideList, ...moveList];
    setCurrentSideList(newList);
    setNewSideList((prev) =>
      prev.filter((item: string) => !newList.includes(item))
    );
  };

  return (
    <div className="container">
      <div>
        <ListForm
          list={leftList}
          side={Side.Left}
          submitHandler={handleSubmit}
        />
      </div>
      <div className="btn-container">
        <ListFormButton side={Side.Left} />
        <ListFormButton side={Side.Right} />
      </div>
      <div>
        <ListForm
          list={rightList}
          side={Side.Right}
          submitHandler={handleSubmit}
        />
      </div>
    </div>
  );
}

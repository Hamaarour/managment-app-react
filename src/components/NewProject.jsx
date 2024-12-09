import React from "react";
import Input from "./Input";
import { useRef } from "react";

const NewProject = ({ onAdd }) => {
  const title = useRef();
  const desc = useRef();
  const date = useRef();

  const entredData = () => {
    const entredTitle = title.current.value;
    const entredDesc = desc.current.value;
    const entredDate = date.current.value;

    onAdd({
      title: entredTitle,
      description: entredDesc,
      dateDate: entredDate,
    });
  };

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            cancel
          </button>
        </li>
        <li>
          <button
            onClick={entredData}
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          >
            save
          </button>
        </li>
      </menu>
      <div>
        <Input type="text" ref={title} label="title" />
        <Input ref={desc} label="Description" isTextArea />
        <Input type="date" ref={date} label="Due Date" />
      </div>
    </div>
  );
};

export default NewProject;

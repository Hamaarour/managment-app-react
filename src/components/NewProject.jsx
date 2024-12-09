import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

const NewProject = ({ onAdd }) => {
  const modal = useRef(); // Corrected `useRef` invocation
  const title = useRef();
  const desc = useRef();
  const date = useRef();

  const enteredData = () => {
    const enteredTitle = title.current.value.trim();
    const enteredDesc = desc.current.value.trim();
    const enteredDate = date.current.value.trim();

    const errors = {};
    if (!enteredTitle) errors.title = "Title is required.";
    if (!enteredDesc) errors.description = "Description is required.";
    if (!enteredDate) errors.date = "Date is required.";

    if (Object.keys(errors).length > 0) {
      modal.current.open(); 
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDesc,
      date: enteredDate,
    });
  };

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-">Ops... Please check your input values.</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950">
              cancel
            </button>
          </li>
          <li>
            <button
              onClick={enteredData}
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
    </>
  );
};

export default NewProject;

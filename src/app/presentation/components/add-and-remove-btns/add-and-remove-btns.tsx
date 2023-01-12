import React from "react";

type Props = {
  value: number;
  addFn: () => void;
  removeFn: () => void;
};

const btnClasses =
  "bg-primary-main text-white flex justify-center align-middle w-8 py-2";

export const AddAndRemoveBtns = ({ addFn, value, removeFn }: Props) => {
  return (
    <div className="border-2 w-24 flex mt-4 ">
      <button onClick={addFn} className={btnClasses}>
        +
      </button>
      <span className="w-8 py-2">{value}</span>
      <button onClick={removeFn} className={btnClasses}>
        -
      </button>
    </div>
  );
};

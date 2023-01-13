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
    <div className=" w-24 flex mt-4 ">
      <button onClick={removeFn} className={`${btnClasses} rounded-r-sm`}>
        -
      </button>
      <span className="w-8 border-[1px] py-2">{value}</span>
      <button onClick={addFn} className={`${btnClasses} rounded-l-sm`}>
        +
      </button>
    </div>
  );
};

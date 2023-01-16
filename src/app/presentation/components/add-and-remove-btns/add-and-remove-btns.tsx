import React from "react";
import {
  getAddBtnClasses,
  getRemoveBtnClasses,
  getValueClasses,
} from "./classes";

type Props = {
  value: number;
  addFn: () => void;
  removeFn: () => void;
  isDisplayCol?: boolean;
};

export const AddAndRemoveBtns = ({
  addFn,
  value,
  removeFn,
  isDisplayCol,
}: Props) => {
  return (
    <div
      className={`w-24 flex ${
        isDisplayCol ? "flex-col-reverse items-end" : ""
      }`}
    >
      <button
        aria-label="reduce"
        onClick={removeFn}
        className={`${getAddBtnClasses(isDisplayCol)}`}
      >
        -
      </button>
      <span className={getValueClasses(isDisplayCol)}>{value}</span>
      <button
        onClick={addFn}
        className={`${getRemoveBtnClasses(isDisplayCol)}`}
        aria-label="increase"
      >
        +
      </button>
    </div>
  );
};

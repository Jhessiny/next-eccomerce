const getBtnClasses = (isCol?: boolean) => {
  return `bg-primary-main text-white flex justify-center align-middle w-8 py-2 ${
    isCol ? "py-0" : "py-2"
  }`;
};

export const getAddBtnClasses = (isCol?: boolean) => {
  return `${getBtnClasses(isCol)} ${isCol ? "rounded-b-sm" : "rounded-r-sm"}`;
};

export const getRemoveBtnClasses = (isCol?: boolean) => {
  return `${getBtnClasses(isCol)} ${isCol ? "rounded-t-sm" : "rounded-l-sm"}`;
};

export const getValueClasses = (isCol?: boolean) => {
  return `w-8 border-[1px] py-2 flex items-center justify-center ${
    isCol ? "py-0" : "py-2"
  }`;
};

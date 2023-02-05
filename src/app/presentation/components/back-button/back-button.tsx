import { useRouter } from "next/router";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";

export const BackButton = () => {
  const route = useRouter();
  return (
    <button
      onClick={() => route.back()}
      className="flex items-center justify-center px-3 py-2 text-primary-main mb-2"
    >
      <BsArrowLeft className="mr-2 " />
      back
    </button>
  );
};

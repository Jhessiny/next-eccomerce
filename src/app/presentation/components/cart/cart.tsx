import React, { useEffect } from "react";
import { useCartSelector } from "../../hooks";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { CartItemsList } from "./components";

export const Cart = () => {
  const { isCartOpen, setIsCartOpen } = useCartSelector();

  useEffect(() => {
    if (isCartOpen) {
      document.querySelector("body")!.style.overflow = "hidden";
      return;
    }
    document.querySelector("body")!.style.overflow = "auto";
  }, [isCartOpen]);

  return (
    <>
      <div
        className={`bg-slate-500 w-[100vw] h-[100vh] fixed right-0 top-0 left-0 bottom-0  opacity-40 ${
          isCartOpen ? "" : "hidden"
        }`}
      ></div>

      <motion.div
        transition={{
          duration: isCartOpen ? 0.225 : 0.195,
          ease: [0.4, 0, 0.6, 1],
        }}
        initial={{ right: "-100%" }}
        animate={{ right: isCartOpen ? 0 : "-100%" }}
        className="bg-slate-100 w-128 h-full fixed top-0 px-8 py-4"
      >
        <button
          onClick={() => setIsCartOpen(false)}
          className="absolute w-9 h-9 left-[-14px] bg-primary-dark rounded-sm flex justify-center items-center"
        >
          <BsArrowRight color="#fff" size={20} />
        </button>
        <div className="overflow-y-scroll h-full">
          <CartItemsList />
        </div>
      </motion.div>
    </>
  );
};

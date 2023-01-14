import React from "react";
import { useCartSelector } from "../../hooks";
import { motion } from "framer-motion";

export const Cart = () => {
  const { isCartOpen, setIsCartOpen } = useCartSelector();

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
        className="bg-slate-100 w-128 h-full fixed top-0"
      >
        <button onClick={() => setIsCartOpen(false)}>close</button>
      </motion.div>
    </>
  );
};

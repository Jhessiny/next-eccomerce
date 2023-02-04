import React, { useEffect } from "react";
import { useCartSelector } from "../../hooks";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { CartItemsList } from "./components";
import { useCacheStorage } from "../../hooks/use-cache-storage";
import { Overlay } from "../overlay/overlay";
import { Portal } from "../portal/portal";
import { useRouter } from "next/router";

export const Cart = () => {
  const router = useRouter();
  const { isCartOpen, setIsCartOpen, startCart } = useCartSelector();
  const cache = useCacheStorage();

  const navigateToCheckout = () => router.push("/checkout");

  useEffect(() => {
    const cacheCartItems = cache.getItem("cart");
    if (cacheCartItems) startCart(JSON.parse(cacheCartItems));
  }, []);

  useEffect(() => {
    if (isCartOpen) {
      document.querySelector("body")!.style.overflow = "hidden";
      return;
    }
    document.querySelector("body")!.style.overflow = "auto";
  }, [isCartOpen]);

  return (
    <Portal>
      {isCartOpen && <Overlay />}

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
          <BsArrowRight color="#fff" size={20} aria-label="close cart" />
        </button>
        <div className="overflow-y-scroll h-full">
          <CartItemsList
            btn={{ action: navigateToCheckout, text: "checkout" }}
          />
        </div>
      </motion.div>
    </Portal>
  );
};

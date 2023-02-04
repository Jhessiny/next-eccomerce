import Head from "next/head";
import React, { useEffect, useState } from "react";
import { BsArrowUpShort } from "react-icons/bs";
import { Spinner, Button } from "../../components";
import { inlineFn } from "../../helpers";
import { useProductsInfinitePagination } from "../../hooks/use-infinite-pagination";
import { CategoryFilter, ProductsList } from "./components";

export const Products = () => {
  const [showTopButton, setShowTopButton] = useState(false);
  const [filter, setFilter] = useState<string | undefined>("");
  const { products, isLoading, lastProductRef } = useProductsInfinitePagination(
    {
      filter,
    }
  );

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShowTopButton(window.scrollY > 200);
    });

    return () =>
      window.removeEventListener("scroll", () => setShowTopButton(true));
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setShowTopButton(false);
  };

  return (
    <>
      <Head>
        <meta name="description" content="list of all products" />
      </Head>
      <CategoryFilter setFilter={setFilter} />

      <ProductsList products={products} ref={lastProductRef} />

      {isLoading && (
        <div className="py-24">
          <Spinner />
        </div>
      )}

      {showTopButton && (
        <Button
          action={inlineFn(goToTop)}
          className="fixed right-2 bottom-4 py-4 bg-primary-mainAlpha"
        >
          <BsArrowUpShort size={24} /> top
        </Button>
      )}
    </>
  );
};

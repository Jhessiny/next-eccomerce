import React, { useEffect, useState } from "react";
import { BsArrowUpShort } from "react-icons/bs";
import { Spinner, Layout, Button, ProductItem } from "../../components";
import { useProductsInfinitePagination } from "../../hooks/use-infinite-pagination";
import { CategoryFilter } from "./components/category-filter";

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
    <Layout>
      <CategoryFilter setFilter={setFilter} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xlg:gap-10">
        {products?.map((item, index) => {
          const isLast = index === products.length - 1;
          return (
            <ProductItem
              ref={isLast ? lastProductRef : null}
              key={item.id}
              {...item}
            />
          );
        })}
      </div>

      {isLoading && (
        <div className="py-24">
          <Spinner />
        </div>
      )}

      {showTopButton && (
        <Button
          action={() => goToTop()}
          className="fixed right-2 bottom-4 py-4 bg-primary-mainAlpha"
        >
          <BsArrowUpShort size={24} /> top
        </Button>
      )}
    </Layout>
  );
};

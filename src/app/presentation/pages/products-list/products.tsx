import React, { useCallback, useRef, useState } from "react";
import { Spinner, Layout } from "../../components";
import { useProductsInfinitePagination } from "../../hooks/use-infinite-pagination";
import { CategoryFilter } from "./components/category-filter";
import { ProductItem } from "./components/product-item";

export const Products = () => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState<string | undefined>("");
  const { products, isLoading, hasMore } = useProductsInfinitePagination({
    page,
    filter,
  });
  const observer = useRef<IntersectionObserver>();
  const lastProductRef = useCallback(
    (node: any) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore]
  );

  return (
    <Layout>
      <CategoryFilter setFilter={setFilter} />
      {isLoading && (
        <div className="my-12">
          <Spinner />
        </div>
      )}
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
    </Layout>
  );
};

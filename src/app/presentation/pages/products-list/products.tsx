import React from "react";
import { Layout } from "../../components/layout/layout";
import { useLoadProducts } from "../../hooks/queries/use-products";
import { ProductItem } from "./components/product-item";

export const Products = () => {
  const { isLoading, data } = useLoadProducts();

  if (isLoading) return <p>loading...</p>;

  return (
    <Layout>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xlg:gap-10">
        {data?.products?.map((item) => (
          <ProductItem key={item.id} {...item} />
        ))}
      </div>
    </Layout>
  );
};

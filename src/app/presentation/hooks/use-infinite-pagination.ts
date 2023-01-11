import { ProductModel } from "./../../domain/models/products";
import { useEffect, useState } from "react";
import { useLoadProducts } from "./queries/use-products";
import { useMount } from "./use-mount";

type Props = {
  filter?: string;
  page: number;
};

export const useProductsInfinitePagination = ({ filter, page }: Props) => {
  const isFirstRender = useMount();
  const [products, setProducts] = useState<ProductModel[]>([]);
  const { isLoading, data, refetch } = useLoadProducts(
    { page, filter },
    { enabled: !isFirstRender }
  );

  const hasMore = (data && products.length < data?.total) || !data;

  useEffect(() => {
    if (hasMore) refetch();
  }, [filter, page]);

  useEffect(() => {
    setProducts([]);
  }, [filter]);

  useEffect(() => {
    if (data?.products) setProducts((prev) => [...prev, ...data.products]);
  }, [data?.products]);

  return { products, isLoading, hasMore };
};

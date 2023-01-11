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
  const { isLoading, isFetching, data, refetch } = useLoadProducts(
    { page, filter },
    { enabled: !isFirstRender }
  );

  const hasMore = (data && products.length < data?.total) || !data;

  useEffect(() => {
    if (hasMore) refetch();
  }, [page]);

  useEffect(() => {
    setProducts([]);
    refetch();
  }, [filter]);

  useEffect(() => {
    if (data?.products) setProducts((prev) => [...prev, ...data.products]);
  }, [data?.products]);

  const showSpinner = isFetching && !products.length;

  return { products, isLoading: showSpinner, hasMore };
};

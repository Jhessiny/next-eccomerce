import { ProductModel } from "./../../domain/models/products";
import { useCallback, useEffect, useRef, useState } from "react";
import { useLoadProducts } from "./queries/use-products";
import { useMount } from "./use-mount";

type Props = {
  filter?: string;
};

export const useProductsInfinitePagination = ({ filter }: Props) => {
  const isFirstRender = useMount();
  const [page, setPage] = useState(1);
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
    setPage(1);
    refetch();
  }, [filter]);

  useEffect(() => {
    if (data?.products) setProducts((prev) => [...prev, ...data.products]);
  }, [data?.products]);

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

  const showSpinner = isFetching;

  return { products, isLoading: showSpinner, lastProductRef };
};

import React from "react";
import { ProductItem } from "@/app/presentation/components";
import { useLoadProducts } from "@/app/presentation/hooks/queries/use-products";

type Props = {
  category: string;
  current: string;
};

export const Recommendations = ({ category, current }: Props) => {
  const { data } = useLoadProducts({ filter: category, page: 1, limit: 5 });
  const recommended =
    data?.products.filter((p) => p.id !== current).slice(0, 4) || [];
  return (
    <>
      <h2 className="mt-10 font-bold text-lg text-primary-dark">
        Recommended for you
      </h2>
      <div className="flex justify-between flex-col align-middle text-center min-[850px]:flex-row gap-4 py-4">
        {recommended.map((p) => (
          <ProductItem key={p.id} {...p} />
        ))}
      </div>
    </>
  );
};

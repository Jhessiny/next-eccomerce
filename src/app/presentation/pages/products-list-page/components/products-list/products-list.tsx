import React from "react";
import { ProductModel } from "@/app/domain/models";
import { ProductItem } from "@/app/presentation/components";

type Props = {
  products: ProductModel[];
};

export const ProductsList = React.forwardRef<HTMLAnchorElement, Props>(
  ({ products }, ref) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xlg:gap-10">
        {products?.map((item, index) => {
          const isLast = index === products.length - 1;
          return (
            <ProductItem ref={isLast ? ref : null} key={item.id} {...item} />
          );
        })}
      </div>
    );
  }
);

ProductsList.displayName = "ProductsList";

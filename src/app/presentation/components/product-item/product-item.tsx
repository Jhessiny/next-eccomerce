import Image from "next/image";
import Link from "next/link";
import React, { useCallback } from "react";
import { ProductModel } from "../../../domain/models";
import { formatUSDPrice } from "../../../helpers/format-currency";
import { Button } from "..";
import { useCartSelector } from "../../hooks";
import { stopPropagation } from "../../helpers";

type Props = ProductModel;

export const ProductItem = React.forwardRef<HTMLAnchorElement, Props>(
  ({ id, title, images, price, thumbnail }, ref) => {
    const { increaseItemAmount, getCartItem, removeCartItem } =
      useCartSelector();

    const handleAddItem = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        stopPropagation(e);
        increaseItemAmount({ id, title, price, thumbnail });
      },
      [increaseItemAmount, id, price, thumbnail, title]
    );

    const handleRemoveItem = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        stopPropagation(e);
        removeCartItem(id);
      },
      [removeCartItem, id]
    );

    const cartHasItem = Boolean(getCartItem(id));

    return (
      <Link
        href={`/products/${id}`}
        className="w-full px-2 py-4 bg-white rounded-md shadow-md	text-center duration-300 hover:scale-105 flex flex-col justify-between"
        ref={ref}
        prefetch={false}
      >
        <Image
          src={images[0]}
          alt={title}
          width={200}
          height={170}
          className="object-contain h-52 w-full mb-4"
        />
        <p className="text-2xl font-bold">{title}</p>
        <p>{formatUSDPrice(price)}</p>
        {!cartHasItem && (
          <Button className="mt-3" action={handleAddItem}>
            add to cart
          </Button>
        )}
        {cartHasItem && (
          <Button className="mt-3" action={handleRemoveItem}>
            remove from cart
          </Button>
        )}
      </Link>
    );
  }
);

ProductItem.displayName = "ProductItem";

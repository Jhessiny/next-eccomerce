import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ProductModel } from "../../../domain/models";
import { formatBRLPrice } from "../../../helpers/format-currency";
import { Button } from "..";

type Props = ProductModel;

export const ProductItem = React.forwardRef<HTMLAnchorElement, Props>(
  ({ id, title, images, price }, ref) => {
    return (
      <Link
        href={`/products/${id}`}
        key={title}
        className="w-full px-2 py-4 bg-white rounded-md shadow-md	text-center duration-300 hover:scale-105 flex flex-col justify-between"
        ref={ref}
      >
        <Image
          src={images[0]}
          alt={title}
          width={200}
          height={170}
          className="object-contain h-52 w-full mb-4"
        />
        <p className="text-2xl font-bold">{title}</p>
        <p>{formatBRLPrice(price)}</p>
        <Button className="mt-3" action={() => null}>
          add to cart
        </Button>
      </Link>
    );
  }
);

ProductItem.displayName = "ProductItem";

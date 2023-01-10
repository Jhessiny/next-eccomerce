import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ProductModel } from "../../../../domain/models";
import { formatBRLPrice } from "../../../../helpers/format-currency";

type Props = ProductModel;

export const ProductItem = ({ id, title, images, price }: Props) => {
  return (
    <Link
      href={`/products/${id}`}
      key={title}
      className="w-full px-2 py-4 bg-white rounded-md shadow-md	text-center duration-300 hover:scale-105 flex flex-col justify-between"
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
      <button className="bg-cyan-900 p-2 mt-4 text-white font-bold w-full rounded-sm">
        add to cart
      </button>
    </Link>
  );
};

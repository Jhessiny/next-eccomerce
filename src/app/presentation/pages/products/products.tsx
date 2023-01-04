import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useLoadProducts } from "../../hooks/queries/use-products";

export const Products = () => {
  const { isLoading, data } = useLoadProducts();

  if (isLoading) return <p>loading...</p>;
  return (
    <div>
      {data?.products?.map((item) => (
        <Link href={`/products/${item.id}`} key={item.title}>
          <Image
            src={item.thumbnail}
            alt={item.title}
            width={200}
            height={170}
          />
          <p>{item.title}</p>
          <p>{item.price}</p>
        </Link>
      ))}
    </div>
  );
};

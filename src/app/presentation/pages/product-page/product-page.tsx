import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useLoadProductItem } from "../../hooks/queries/use-products";

export const ProductPage = () => {
  const route = useRouter();
  const id = route.query.id as string;
  const { isLoading, data } = useLoadProductItem(id);

  if (isLoading) return <p>loading...</p>;

  return (
    <>
      <Head>
        <title>Product page</title>
      </Head>
      {data && (
        <div key={data?.id}>
          <Image
            src={data?.thumbnail}
            alt={data?.title}
            width={200}
            height={170}
          />
          <p>{data?.title}</p>
          <p>{data?.price}</p>
        </div>
      )}
    </>
  );
};

import Head from "next/head";
import { useRouter } from "next/router";

import React from "react";
import { useLoadProductItem } from "../../hooks/queries/use-products";
import { BackButton, Spinner } from "../../components";
import { ProductInfo, Recommendations } from "./components";

export const ProductPage = () => {
  const route = useRouter();
  const id = route.query.id as string;
  const { isLoading, data } = useLoadProductItem(id);

  return (
    <>
      <Head>
        <title>Product page</title>
        <meta name="description" content={data?.title} />
      </Head>

      {isLoading && <Spinner />}
      {data && (
        <>
          <div className="max-w-384 min-[850px]:h-[32rem] mx-auto  bg-white rounded-sm shadow-md py-2 px-4">
            <BackButton />

            <ProductInfo {...data} />
          </div>
          <Recommendations category={data.category} current={data.id} />
        </>
      )}
    </>
  );
};

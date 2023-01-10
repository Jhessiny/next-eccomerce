import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { formatBRLPrice } from "../../../helpers/format-currency";
import { Layout } from "../../components/layout/layout";
import { useLoadProductItem } from "../../hooks/queries/use-products";

export const ProductPage = () => {
  const route = useRouter();
  const id = route.query.id as string;
  const { isLoading, data } = useLoadProductItem(id);

  if (isLoading) return <p>loading...</p>;

  return (
    <Layout>
      <Head>
        <title>Product page</title>
      </Head>
      {data && (
        <div
          key={data?.id}
          className="max-w-256 mx-auto flex justify-between p-4 align-middle text-center bg-white rounded-sm shadow-md"
        >
          <Image
            src={data?.thumbnail}
            alt={data?.title}
            width={450}
            height={250}
          />
          <div className="w-1/2 flex flex-col justify-center items-center">
            <p className="text-3xl font-bold mb-3 text-center">{data?.title}</p>
            <p>{data.description}</p>
            <p className="mt-2">{formatBRLPrice(data?.price)}</p>

            <div className="border-2 w-24 flex mt-4 ">
              <button className="bg-cyan-800 text-white flex justify-center align-middle w-8 py-2">
                +
              </button>
              <span className="w-8 py-2">0</span>
              <button className="bg-cyan-800 text-white flex justify-center align-middle w-8 py-2">
                -
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

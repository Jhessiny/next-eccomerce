import Head from "next/head";
import { useRouter } from "next/router";

import React from "react";
import { formatBRLPrice } from "../../../helpers/format-currency";
import { Layout } from "../../components/layout/layout";
import { RatingStars } from "../../components/rating-stars/rating-stars";
import { useLoadProductItem } from "../../hooks/queries/use-products";
import { AddAndRemoveBtns, BackButton, Spinner } from "../../components";
import { ImagesContainer } from "./components";

export const ProductPage = () => {
  const route = useRouter();
  const id = route.query.id as string;
  const { isLoading, data } = useLoadProductItem(id);

  return (
    <Layout>
      {isLoading && <Spinner />}
      <Head>
        <title> Product page</title>
      </Head>
      {data && (
        <div
          key={data?.id}
          className="max-w-256 min-[850px]:h-[32rem] mx-auto  bg-white rounded-sm shadow-md py-2 px-4"
        >
          <BackButton />

          <div className="flex justify-between flex-col align-middle text-center min-[850px]:flex-row">
            <ImagesContainer images={data.images} title={data.title} />
            <div className=" flex flex-col justify-center items-center p-2 mt-6 min-[850px]:w-1/2 min-[850px]:mt-0">
              <p className="text-3xl font-bold mb-3 text-center">
                {data?.title}
              </p>
              <p>{data.description}</p>
              <p className="mt-2">{formatBRLPrice(data?.price)}</p>

              <AddAndRemoveBtns
                addFn={() => null}
                value={0}
                removeFn={() => null}
              />
              <RatingStars rating={data.rating} />
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

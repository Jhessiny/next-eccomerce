import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { BsArrowLeft } from "react-icons/bs";

import React from "react";
import { useState } from "react";
import { formatBRLPrice } from "../../../helpers/format-currency";
import { Layout } from "../../components/layout/layout";
import { RatingStars } from "../../components/rating-stars/rating-stars";
import { useLoadProductItem } from "../../hooks/queries/use-products";

export const ProductPage = () => {
  const route = useRouter();
  const [activeImg, setActiveImg] = useState(0);
  const id = route.query.id as string;
  const { isLoading, data } = useLoadProductItem(id);

  if (isLoading) return <p>loading...</p>;

  return (
    <Layout>
      <Head>
        <title> Product page</title>
      </Head>
      {data && (
        <div
          key={data?.id}
          className="max-w-256 min-[850px]:h-[32rem] mx-auto  bg-white rounded-sm shadow-md py-2 px-4"
        >
          <button
            onClick={() => route.back()}
            className="flex items-center justify-center px-3 py-2 text-primary-main mb-2"
          >
            <BsArrowLeft className="mr-2 " />
            voltar
          </button>

          <div className="flex justify-between flex-col align-middle text-center min-[850px]:flex-row">
            <div className="flex flex-col justify-center">
              <div className="bg-gray-100 h-72 flex items-center p-3 justify-center">
                <Image
                  src={data.images[activeImg]}
                  alt={data?.title}
                  width={450}
                  height={256}
                  className="object-contain h-64"
                />
              </div>
              <div className="flex gap-1 min-[850px]:gap-x-2 min-[850px]:gap-y-4 mt-2">
                {data.images.slice(0, 4).map((img, index) => (
                  <div
                    key={img}
                    className={`bg-gray-100 h-28 flex p-1 min-[850px]:p-2 items-center hover:outline hover:outline-2 hover:outline-primary-main cursor-pointer ${
                      activeImg === index
                        ? "outline outline-2 outline-primary-main"
                        : ""
                    }`}
                    onClick={() => setActiveImg(index)}
                  >
                    <Image
                      src={img}
                      alt={data?.title}
                      width={112}
                      height={96}
                      className="object-contain h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className=" flex flex-col justify-center items-center p-2 mt-6 min-[850px]:w-1/2 min-[850px]:mt-0">
              <p className="text-3xl font-bold mb-3 text-center">
                {data?.title}
              </p>
              <p>{data.description}</p>
              <p className="mt-2">{formatBRLPrice(data?.price)}</p>

              <div className="border-2 w-24 flex mt-4 ">
                <button className="bg-primary-main text-white flex justify-center align-middle w-8 py-2">
                  +
                </button>
                <span className="w-8 py-2">0</span>
                <button className="bg-primary-main text-white flex justify-center align-middle w-8 py-2">
                  -
                </button>
              </div>
              <RatingStars rating={data.rating} />
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

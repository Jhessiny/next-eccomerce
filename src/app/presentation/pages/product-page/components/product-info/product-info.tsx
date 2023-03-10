import React from "react";
import { ProductModel } from "@/app/domain/models";
import { formatUSDPrice } from "@/app/helpers";
import { AddAndRemoveBtns, RatingStars } from "@/app/presentation/components";
import { inlineFn } from "@/app/presentation/helpers";
import { useCartSelector } from "@/app/presentation/hooks";
import { ImagesContainer } from "../";

type Props = ProductModel;

export const ProductInfo = ({
  id,
  thumbnail,
  images,
  title,
  price,
  description,
  rating,
}: Props) => {
  const { increaseItemAmount, reduceItemAmount, getCartItem } =
    useCartSelector();

  const itemAmount = () => getCartItem(id)?.amount || 0;

  return (
    <div className="flex justify-center flex-col align-middle text-center min-[850px]:flex-row">
      <ImagesContainer images={images} title={title} />
      <div className="flex flex-col justify-center items-center p-2 mt-6 min-[850px]:w-1/2 min-[850px]:mt-0 px-20">
        <p className="text-3xl font-bold mb-3 text-center">{title}</p>
        <p>{description}</p>
        <p className="mt-2">{formatUSDPrice(price)}</p>
        <div className="mt-4">
          <AddAndRemoveBtns
            addFn={inlineFn(increaseItemAmount, {
              id,
              title,
              price,
              thumbnail,
            })}
            value={itemAmount()}
            removeFn={inlineFn(reduceItemAmount, id)}
          />
        </div>
        <div className="mt-4">
          <RatingStars rating={rating} />
        </div>
      </div>
    </div>
  );
};

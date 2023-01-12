import React from "react";
import { ProductModel } from "../../../../../domain/models";
import { formatBRLPrice } from "../../../../../helpers/format-currency";
import { AddAndRemoveBtns, RatingStars } from "../../../../components";
import { ImagesContainer } from "../images-container/images-container";

type Props = ProductModel;

export const ProductInfo = ({
  images,
  title,
  price,
  description,
  rating,
}: Props) => {
  return (
    <div className="flex justify-center flex-col align-middle text-center min-[850px]:flex-row">
      <ImagesContainer images={images} title={title} />
      <div className="flex flex-col justify-center items-center p-2 mt-6 min-[850px]:w-1/2 min-[850px]:mt-0 px-20">
        <p className="text-3xl font-bold mb-3 text-center">{title}</p>
        <p>{description}</p>
        <p className="mt-2">{formatBRLPrice(price)}</p>

        <AddAndRemoveBtns addFn={() => null} value={0} removeFn={() => null} />
        <div className="mt-4">
          <RatingStars rating={rating} />
        </div>
      </div>
    </div>
  );
};

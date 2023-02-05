import Image from "next/image";
import React, { useCallback } from "react";
import { CartItemModel } from "@/store";
import { formatUSDPrice } from "@/app/helpers";
import { inlineFn } from "@/app/presentation/helpers";
import { useCartSelector } from "@/app/presentation/hooks";
import { AddAndRemoveBtns } from "@/app/presentation/components";
import { BiTrashAlt } from "react-icons/bi";
import { twMerge } from "tailwind-merge";

type Props = CartItemModel & {
  isSideCart: boolean;
};

export const CartItemComponent = ({
  id,
  thumbnail,
  title,
  price,
  amount,
  isSideCart,
}: Props) => {
  const { increaseItemAmount, reduceItemAmount, removeCartItem } =
    useCartSelector();

  const handleAddFn = useCallback(
    () => increaseItemAmount({ id, title, thumbnail, price }),
    [id, title, thumbnail, price, increaseItemAmount]
  );

  const handleReduceFn = useCallback(
    () => reduceItemAmount(id),
    [id, reduceItemAmount]
  );

  const imageClassesMargin = isSideCart ? "mr-2" : "mr-14";

  return (
    <div className="flex justify-between items-center p-1 border-[1px] border-slate-300 my-2">
      <div className="flex items-center">
        <div
          className={twMerge(
            "flex align-middle justify-center box-content w-[100px]",
            imageClassesMargin
          )}
        >
          <Image
            src={thumbnail}
            alt={title}
            width={100}
            height={100}
            className={"object-contain h-20 block "}
            onError={(e) =>
              (e.currentTarget.src = "/assets/fall-back-image.png")
            }
          />
        </div>

        <h3>{title}</h3>
      </div>
      <div className="flex items-center">
        <p>{formatUSDPrice(price)}</p>
        <AddAndRemoveBtns
          addFn={handleAddFn}
          removeFn={handleReduceFn}
          value={amount}
          isDisplayCol
        />
        {!isSideCart && (
          <button
            className="p-4 ml-8 hover:bg-red-100 rounded-full duration-200"
            onClick={inlineFn(removeCartItem, id)}
          >
            <BiTrashAlt color="red" />
          </button>
        )}
      </div>
    </div>
  );
};

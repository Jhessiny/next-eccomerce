import Image from "next/image";
import React, { useCallback } from "react";
import { CartItemModel } from "../../../../../../store";
import { formatUSDPrice } from "../../../../../helpers";
import { useCartSelector } from "../../../../hooks";
import { AddAndRemoveBtns } from "../../../add-and-remove-btns/add-and-remove-btns";

type Props = CartItemModel;

export const CartItemComponent = ({
  id,
  thumbnail,
  title,
  price,
  amount,
}: Props) => {
  const { increaseItemAmount, reduceItemAmount } = useCartSelector();

  const handleAddFn = useCallback(
    () => increaseItemAmount({ id, title, thumbnail, price }),
    [id, title, thumbnail, price, increaseItemAmount]
  );

  const handleReduceFn = useCallback(
    () => reduceItemAmount(id),
    [id, reduceItemAmount]
  );

  return (
    <div className="flex justify-between items-center p-1 border-[1px] border-slate-300 my-2">
      <Image
        src={thumbnail}
        alt={title}
        width={100}
        height={100}
        className="object-contain h-20"
        onError={(e) => (e.currentTarget.src = "/assets/fall-back-image.png")}
      />
      <h3>{title}</h3>
      <p>{formatUSDPrice(price)}</p>
      <AddAndRemoveBtns
        addFn={handleAddFn}
        removeFn={handleReduceFn}
        value={amount}
        isDisplayCol
      />
    </div>
  );
};

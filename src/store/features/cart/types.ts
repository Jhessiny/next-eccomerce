import { ProductModel } from "../../../app/domain/models";

export type PartialProductType = Pick<
  ProductModel,
  "id" | "thumbnail" | "price" | "title"
>;

export type CartItem = PartialProductType & { amount: number };

export type CartStore = {
  cart: CartItem[];
  increaseItemAmount: (product: PartialProductType) => void;
  reduceItemAmount: (id: string) => void;
  removeCartItem: (id: string) => void;
};

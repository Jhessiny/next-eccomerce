import { ProductModel } from "../../../app/domain/models";

export type PartialProductType = Pick<
  ProductModel,
  "id" | "thumbnail" | "price" | "title"
>;

export type CartItemModel = PartialProductType & { amount: number };

export type CartStore = {
  cart: CartItemModel[];
  startCart: (items: CartItemModel[]) => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  increaseItemAmount: (product: PartialProductType) => void;
  reduceItemAmount: (id: string) => void;
  removeCartItem: (id: string) => void;
};

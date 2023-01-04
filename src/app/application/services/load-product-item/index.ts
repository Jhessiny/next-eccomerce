import { AxiosHttpClient } from "../../../infra/protocols/http/protocols";
import { LoadProductItem } from "./load-product-item";

export const loadProductItemService = new LoadProductItem(
  "/products",
  new AxiosHttpClient()
);

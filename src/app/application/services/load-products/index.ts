import { AxiosHttpClient } from "../../../infra/protocols/http/protocols";
import { LoadProducts } from "./load-products";

export const loadProductsService = new LoadProducts(
  "/products",
  new AxiosHttpClient()
);
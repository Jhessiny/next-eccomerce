import { AxiosHttpClient } from "../../../infra/protocols/http/protocols";
import { LoadProducts } from "./load-products";

export const loadProductsService = new LoadProducts(
  "/products?limit=10",
  new AxiosHttpClient()
);

import { useQuery } from "react-query";
import { loadProductItemService } from "../../../application/services/load-product-item";
import { loadProductsService } from "../../../application/services/load-products";

export const useLoadProducts = () => {
  return useQuery(["products"], () => loadProductsService.execute());
};

export const useLoadProductItem = (id: string) => {
  return useQuery([`product-${id}`], () =>
    loadProductItemService.execute({ id })
  );
};

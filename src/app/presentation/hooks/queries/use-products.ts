import { LoadProducts } from "@/app/application/services/load-products/load-products";
import { useQuery } from "react-query";
import {
  loadProductItemService,
  loadProductsService,
} from "@/app/application/services";

export const useLoadProducts = (
  params?: LoadProducts.Params,
  options?: {
    enabled: boolean;
  }
) => {
  return useQuery(["products"], () => loadProductsService.execute(params), {
    enabled: options ? options.enabled : true,
    cacheTime: 1000000000,
  });
};

export const useLoadProductItem = (id: string) => {
  return useQuery([`product-${id}`], ({ signal }) =>
    loadProductItemService.execute({ id }, signal)
  );
};

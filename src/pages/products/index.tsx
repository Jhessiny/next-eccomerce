import { dehydrate, QueryClient } from "react-query";
import { loadProductsService } from "../../app/application/services/load-products";
import { Products } from "../../app/presentation/pages/products-list/products";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.fetchQuery(["products"], () =>
    loadProductsService.execute()
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Products;

import { dehydrate, QueryClient } from "react-query";
import { loadProductItemService } from "../../app/application/services/load-product-item";
import { loadProductsService } from "../../app/application/services/load-products";
import { ProductPage } from "../../app/presentation/pages/product-page/product-page";

export async function getStaticPaths() {
  if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return {
      paths: [],
      fallback: "blocking",
    };
  }
  const queryClient = new QueryClient();

  const productsData = await queryClient.fetchQuery(["products"], () =>
    loadProductsService.execute()
  );
  const paths = productsData.products?.map((item) => ({
    params: { id: item.id.toString() },
  }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(ctx: any) {
  const queryClient = new QueryClient();

  const { id } = ctx.params;

  await queryClient.prefetchQuery([`product-${id}`], () =>
    loadProductItemService.execute(id)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default ProductPage;

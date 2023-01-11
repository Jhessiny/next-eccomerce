import { ProductModel } from "../../../domain/models";
import { HttpClient, HttpResponse } from "../../protocols";

export class LoadProducts {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<LoadProducts.Model>
  ) {}

  async execute(params?: LoadProducts.Params) {
    const limit = 16;
    const skip = params?.page ? (params?.page - 1) * limit : 0;
    const categoryUrl =
      params?.filter && `${this.url}/category/${params?.filter}`;
    const res = await this.httpClient.request({
      method: "get",
      url: categoryUrl || `${this.url}?limit=${limit}&skip=${skip}`,
    });
    return res;
  }
}

export namespace LoadProducts {
  export type Model = {
    products: Array<ProductModel>;
    total: number;
  };

  export type Params = {
    page: number;
    filter?: string;
  };
}

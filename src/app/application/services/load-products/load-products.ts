import { ProductModel } from "../../../domain/models";
import { HttpClient, HttpResponse } from "../../protocols";

export class LoadProducts {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<LoadProducts.Model>
  ) {}

  async execute(params?: unknown) {
    const res = await this.httpClient.request({ method: "get", url: this.url });
    return res;
  }
}

export namespace LoadProducts {
  export type Model = {
    products: Array<ProductModel>;
  };
}

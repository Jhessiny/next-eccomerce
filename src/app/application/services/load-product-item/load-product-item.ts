import { ProductModel } from "../../../domain/models";
import { HttpClient } from "../../protocols";

export class LoadProductItem {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<LoadProductItem.Model>
  ) {}

  async execute({ id }: { id: string }) {
    const httpResponse = await this.httpClient.request({
      method: "get",
      url: `${this.url}/${id}`,
    });

    return httpResponse;
  }
}

namespace LoadProductItem {
  export type Model = ProductModel;
}
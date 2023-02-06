import { HttpClient } from "@/app/application/protocols";

export class CreateCheckoutPaymentSession {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient
  ) {}

  async execute(params: CreateCheckoutPaymentSession.Params) {
    console.log(params);
    const httpResponse = await this.httpClient.request({
      method: "post",
      url: `${this.url}`,
      body: params,
    });

    return httpResponse;
  }
}

export namespace CreateCheckoutPaymentSession {
  export type Params = {
    items: Item[];
  };

  export type Item = { price: string; quantity: number };
}

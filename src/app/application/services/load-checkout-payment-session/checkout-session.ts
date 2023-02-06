import { HttpClient } from "@/app/application/protocols";

export class LoadCheckoutPaymentSession {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient
  ) {}

  async execute({ id }: { id?: string }) {
    if (!id) return null;
    const httpResponse = await this.httpClient.request({
      method: "get",
      url: `${this.url}/${id}`,
    });

    return httpResponse;
  }
}

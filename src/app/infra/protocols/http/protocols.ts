import axios from "axios";
import {
  HttpClient,
  HttpRequest,
  HttpResponse,
} from "@/app/application/protocols/http/http-client";

const baseUrls = {
  products: "https://dummyjson.com",
  next: null,
};

const getAxiosInstance = (url?: string) => axios.create({ baseURL: url });

const axiosInstances = {
  products: getAxiosInstance(baseUrls.products),
  next: getAxiosInstance(),
};

export class AxiosHttpClient implements HttpClient {
  private instanceType: "products" | "next";
  constructor(instanceType: "products" | "next") {
    this.instanceType = instanceType;
  }
  async request(
    { body, ...params }: HttpRequest,
    signal?: AbortSignal
  ): Promise<HttpResponse> {
    const axiosInstance = axiosInstances[this.instanceType];
    try {
      const res = await axiosInstance.request({
        ...params,
        data: body,
        signal,
      });
      return res.data;
    } catch (e) {
      console.error(e);
    }
  }
}

export class FetchHttpClient implements HttpClient {
  private instanceType: "products" | "next";
  constructor(instanceType: "products" | "next") {
    this.instanceType = instanceType;
  }
  async request(
    params: HttpRequest,
    signal?: AbortSignal
  ): Promise<HttpResponse> {
    try {
      const res = await fetch(`${baseUrls[this.instanceType]}${params.url}`);
      const data = await res.json();
      return data;
    } catch (e) {
      console.error({ FETCHERROR: e });
    }
  }
}

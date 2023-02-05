import axios from "axios";
import {
  HttpClient,
  HttpRequest,
  HttpResponse,
} from "@/app/application/protocols/http/http-client";

const baseURL = "https://dummyjson.com";

const axiosInstance = axios.create({ baseURL });

export class AxiosHttpClient implements HttpClient {
  async request(
    params: HttpRequest,
    signal?: AbortSignal
  ): Promise<HttpResponse> {
    try {
      const res = await axiosInstance.request({ ...params, signal });
      return res.data;
    } catch (e) {
      console.error(e);
    }
  }
}

export class FetchHttpClient implements HttpClient {
  async request(
    params: HttpRequest,
    signal?: AbortSignal
  ): Promise<HttpResponse> {
    try {
      const res = await fetch(`${baseURL}${params.url}`);
      const data = await res.json();
      return data;
    } catch (e) {
      console.error({ FETCHERROR: e });
    }
  }
}

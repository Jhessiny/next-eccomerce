import axios from "axios";
import superjson from "superjson";
import {
  HttpClient,
  HttpRequest,
  HttpResponse,
} from "../../../application/protocols/http/http-client";

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
      console.log(e);
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
      console.log({ FETCHERROR: e });
    }
  }
}

import axios from "axios";
import {
  HttpClient,
  HttpRequest,
  HttpResponse,
} from "../../../application/protocols/http/http-client";

const axiosInstance = axios.create({ baseURL: "https://dummyjson.com" });

export class AxiosHttpClient implements HttpClient {
  async request(
    params: HttpRequest,
    signal?: AbortSignal
  ): Promise<HttpResponse> {
    const res = await axiosInstance.request({ ...params, signal });
    return res.data;
  }
}

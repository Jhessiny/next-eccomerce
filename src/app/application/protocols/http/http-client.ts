export type HttpResponse<R = any> = R & {
  body?: HttpResponseBody;
  status: HttpStatusCode;
};

type HttpResponseBody<R = any> = {
  data?: R;
  error?: HttpStatusCode;
};

export interface HttpClient<R = any> {
  token?: string;
  request: (params: HttpRequest) => Promise<HttpResponse<R>>;
}

export enum HttpStatusCode {
  ok = 200,
  created = 201,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  serverError = 500,
}

export type HttpRequest = {
  url: string;
  method: HttpMethod;
  body?: any;
  headers?: any;
};

export type HttpMethod = "post" | "get" | "put" | "delete" | "patch";

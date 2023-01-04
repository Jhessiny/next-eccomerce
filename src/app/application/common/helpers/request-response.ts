import { error, success } from "./../../../domain/common/utils/either";
import { HttpResponse, HttpStatusCode } from "../../protocols";
import { Response } from "../../../domain/common/types/response";
import { UnexpectedError } from "../../../domain/exceptions";

export class RequestResponse<R> {
  private constructor(private readonly _response: R | undefined) {
    Object.freeze(this);
  }

  public static handle<R>(
    httpResponse: HttpResponse<R>
  ): Response<RequestResponse<R>> {
    const { status } = httpResponse;

    if (this.isSuccess(status)) {
      return success(
        new RequestResponse(httpResponse.body?.data ?? httpResponse.body)
      );
    }

    return error(new UnexpectedError());
  }

  private static isSuccess(statusCode: HttpStatusCode): boolean {
    return statusCode >= 200 && statusCode <= 299;
  }
}

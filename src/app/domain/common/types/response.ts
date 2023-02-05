import { UnexpectedError } from "@/app/domain/exceptions";
import { Either } from "@/app/domain/common/utils/either";

export type ResponseError = UnexpectedError;

export type Response<R = unknown> = Either<ResponseError, R>;

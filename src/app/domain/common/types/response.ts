import { UnexpectedError } from "../../exceptions";
import { Either } from "../utils/either";

export type ResponseError = UnexpectedError;

export type Response<R = unknown> = Either<ResponseError, R>;

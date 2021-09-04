import { Response } from "express";
import ServerError from "../core/errors/ServerError";
import Logger from "./logger";

class ErrorHandler {
	public static handleError(
		res: Response | null,
		error: ServerError | Error | unknown
	): void {
		const code = error instanceof ServerError ? error.getCode() : 500;
		res?.status(code).send((error as Error).toString());
		Logger.log((error as Error).stack + "\n" + (error as Error).message);
	}
}

export default ErrorHandler;

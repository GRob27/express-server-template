import type { Response } from "express";
import ServerError from "../core/errors/ServerError";
import Logger from "./logger";

class ErrorHandler {
	private static instance: ErrorHandler | null;

	private errors: number;

	public constructor() {
		Logger.log("ErrorHandler is initialized.");
		this.errors = 0;
	}

	public static getInstance(): ErrorHandler {
		if (this.instance == null) {
			this.instance = new ErrorHandler();
		}
		return this.instance;
	}
	
	public static handleError(
		res: Response | null,
		error: ServerError | Error | unknown
	): void {
		const instance = ErrorHandler.getInstance();
		const code = error instanceof ServerError ? error.getCode() : 500;
		res?.status(code).send((error as Error).toString());
		Logger.log((error as Error).stack + "\n" + (error as Error).message);
		instance.incrementErrors();
	}

	public getErrors(): number {
		return this.errors;
	}

	public incrementErrors(): void {
		this.errors++;
	}
}

export default ErrorHandler;

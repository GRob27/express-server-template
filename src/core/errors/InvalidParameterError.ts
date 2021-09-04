import ServerError from "./ServerError";

class InvalidParameterError extends ServerError {
	public constructor(message: string) {
		super(message, 400);
	}
}

export default InvalidParameterError;

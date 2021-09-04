import ServerError from "./ServerError";

class InternalServerError extends ServerError {
	public constructor(message: string) {
		super(message, 500);
	}
}

export default InternalServerError;

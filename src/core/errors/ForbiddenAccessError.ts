import ServerError from "./ServerError";

class ForbiddenAccessError extends ServerError {
	public constructor(message: string) {
		super(message, 403);
	}
}

export default ForbiddenAccessError;

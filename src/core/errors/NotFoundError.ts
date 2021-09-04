import ServerError from "./ServerError";

class NotFoundError extends ServerError {
	public constructor(message: string) {
		super(message, 404);
	}
}

export default NotFoundError;

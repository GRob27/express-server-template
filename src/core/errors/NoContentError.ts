import ServerError from "./ServerError";

class NoContentError extends ServerError {
	public constructor(message: string) {
		super(message, 204);
	}
}

export default NoContentError;

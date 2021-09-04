import ServerError from "./ServerError";

class AlreadyExistsError extends ServerError {
	public constructor(message: string) {
		super(message, 409);
	}
}

export default AlreadyExistsError;

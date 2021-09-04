abstract class ServerError extends Error {
	protected _code: number;

	public constructor(message: string, code: number) {
		super(message);
		this._code = code;
	}

	public getCode(): number {
		return this._code;
	}
}

export default ServerError;

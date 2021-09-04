import "jest-extended";
import AlreadyExistsError from "../src/core/errors/AlreadyExistsError";
import ErrorHandler from "../src/utils/ErrorHandler";

describe("Error Handler can handle errors", () => {
	it("Handles custom or default errors", () => {
		ErrorHandler.handleError(
			null,
			new AlreadyExistsError("Ressource already exists")
		);
		ErrorHandler.handleError(null, new Error("Error"));
	});
});

import AlreadyExistsError from "../src/core/errors/AlreadyExistsError";
import ForbiddenAccessError from "../src/core/errors/ForbiddenAccessError";
import InternalServerError from "../src/core/errors/InternalServerError";
import InvalidParameterError from "../src/core/errors/InvalidParameterError";
import NoContentError from "../src/core/errors/NoContentError";
import NotFoundError from "../src/core/errors/NotFoundError";

describe("Test integrity of error messages", () => {
	it("Already exists error should be 409", () => {
		const error = new AlreadyExistsError("Exists");
		expect(error.message).toEqual("Exists");
		expect(error.getCode()).toEqual(409);
	});

	it("Forbidden access error should be 403", () => {
		const error = new ForbiddenAccessError("Forbidden");
		expect(error.message).toEqual("Forbidden");
		expect(error.getCode()).toEqual(403);
	});

	it("Internal servor error should be 500", () => {
		const error = new InternalServerError("Internal");
		expect(error.message).toEqual("Internal");
		expect(error.getCode()).toEqual(500);
	});

	it("Invalid parameter error should be 400", () => {
		const error = new InvalidParameterError("Invalid");
		expect(error.message).toEqual("Invalid");
		expect(error.getCode()).toEqual(400);
	});

	it("No content error should be 204", () => {
		const error = new NoContentError("Content");
		expect(error.message).toEqual("Content");
		expect(error.getCode()).toEqual(204);
	});

	it("Not found error should be 404", () => {
		const error = new NotFoundError("Not FOUND");
		expect(error.message).toEqual("Not FOUND");
		expect(error.getCode()).toEqual(404);
	});
});

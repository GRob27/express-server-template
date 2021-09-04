import "jest-extended";
import MyController from "../src/core/controllers/MyController";

describe("Controller class is a singleton", () => {
	it("The instances of the controller are the same", () => {
		const controller = MyController.getInstance();
		const another = MyController.getInstance();
		expect(controller).toBe(another);
	});
});

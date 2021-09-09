import "jest-extended";
import supertest from "supertest";
import App from "../src/App";
import MyRouter from "../src/routes/MyRouter";

describe("Router class is a singleton", () => {
	it("The instances of the router are the same", () => {
		const router = MyRouter.getInstance();
		const another = MyRouter.getInstance();
		expect(router).toBe(another);
	});
});

describe("GET /", () => {
	it("Expects FUCKS not given error", async() => {
		const response = await supertest(App.getInstance().getExpressApp()).get(
			"/"
		);
		expect(response.status).toBe(200);
		expect(response.body).toMatchObject({ message: "Hello World" });
	});
});

describe("GET /throws", () => {
	it("Expects FUCKS not given error", async() => {
		const response = await supertest(App.getInstance().getExpressApp()).get(
			"/throws"
		);
		expect(response.status).toBe(404);
		expect(response.text).toBe("Error: Fucks NOT given");
	});
});

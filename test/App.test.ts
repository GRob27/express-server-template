import "jest-extended";
import supertest from "supertest";
import App from "../src/App";

describe("Application class is a singleton", () => {
	it("The instances of the application are the same", () => {
		const app = App.getInstance();
		const another = App.getInstance();
		expect(app).toBe(another);
	});
});

describe("Express application is unique", () => {
	it("The express applications are the same", () => {
		const expressApp = App.getInstance().getExpressApp();
		const another = App.getInstance().getExpressApp();
		expect(expressApp).toBe(another);
	});
});

describe("GET /bo/gu/s/URL/", () => {
	it("Call responds with bad request when bogus URL is sent.", async() => {
		const response = await supertest(App.getInstance().getExpressApp()).get(
			"/bo/gu/s/URL/"
		);
		expect(response.status).toBe(404);
		expect(response.text).toBe("No routes matching request");
	});
});

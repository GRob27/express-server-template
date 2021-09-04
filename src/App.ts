import type { Application, NextFunction, Request, Response } from "express";
import express, { json, urlencoded } from "express";
import ExpressSession from "express-session";
import logger from "morgan";
import MyRouter from "./routes/MyRouter";

class App {
	private static instance: App | null;

	private expressApp: Application;

	private constructor() {
		this.expressApp = express();
		this.middleware();
		this.routes();
	}

	public static getInstance(): App {
		if (this.instance == null) {
			this.instance = new App();
		}
		return this.instance;
	}

	public getExpressApp(): Application {
		return this.expressApp;
	}

	private middleware(): void {
		this.expressApp.use((_req: Request, res: Response, next: NextFunction) => {
			res.header("Access-Control-Allow-Origin", "*");
			res.header(
				"Access-Control-Allow-Headers",
				"Origin, X-Requested-With, Content-Type, Accept"
			);
			next();
		});
		this.expressApp.use(logger("dev"));
		this.expressApp.use(json());
		this.expressApp.use(urlencoded({ extended: true }));
		this.expressApp.use(
			ExpressSession({
				secret: "My Secret Key",
				resave: true,
				saveUninitialized: false
			})
		);
	}

	private routes(): void {
		this.expressApp.use("/", MyRouter.getInstance().getRouter());
		this.expressApp.use(this.noRoutesMatch.bind(this));
	}

	private noRoutesMatch(_req: Request, res: Response): void {
		res.status(404).send("No routes matching request");
	}
}

export default App;

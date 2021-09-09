import type { Request, Response } from "express";
import { Router } from "express";
import MyController from "../core/controllers/MyController";
import NotFoundError from "../core/errors/NotFoundError";
import ErrorHandler from "../utils/ErrorHandler";

class MyRouter {
	private static instance: MyRouter | null;

	private router: Router;

	private constructor() {
		this.router = Router();
		this.init();
	}

	public static getInstance(): MyRouter {
		if (this.instance == null) {
			this.instance = new MyRouter();
		}
		return this.instance;
	}

	public getRouter(): Router {
		return this.router;
	}

	private init(): void {
		this.router.get("/", this.helloWorld.bind(this));
		this.router.get("/throws", this.throws.bind(this));
	}

	private helloWorld(_req: Request, res: Response): void {
		const message = MyController.getInstance().helloWorld();
		res.header("Content-Type", "application/json");
		res.status(200).json({ message });
	}

	private throws(_req: Request, res: Response): void {
		try {
			throw new NotFoundError("Fucks NOT given");
		} catch (err) {
			ErrorHandler.handleError(res, err);
		}
	}
}

export default MyRouter;

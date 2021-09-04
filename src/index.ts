import debug from "debug";
import dotenv from "dotenv";
import type { Application } from "express";
import type { Server as HttpServer } from "http";
import { createServer } from "http";
import App from "./App";
import Logger from "./utils/logger";

debug("ts-express:server");
dotenv.config();

class Server {
	private static instance: Server | null;

	private port!: string | number | boolean;

	private application: Application;

	private httpServer: HttpServer;

	private constructor() {
		this.port = this.normalizePort(process.env.PORT ?? 3001);
		this.application = this.createApplication();
		this.httpServer = this.createHTTPServer();
	}

	public static getInstance(): Server {
		if (this.instance == null) {
			this.instance = new Server();
		}
		return this.instance;
	}

	private createApplication(): Application {
		const application = App.getInstance().getExpressApp();
		application.set("port", this.port);
		return application;
	}

	private createHTTPServer(): HttpServer {
		const httpServer = createServer(this.application);
		httpServer.listen(this.port, () => {
			Logger.log(`Listening on port ${this.port}`);
		});
		httpServer.on("error", this.onError.bind(this));
		httpServer.on("listening", this.onListening.bind(this));
		return httpServer;
	}

	private normalizePort(val: number | string): number | string | boolean {
		const port: number = typeof val === "string" ? parseInt(val, 10) : val;
		if (isNaN(port)) return val;
		else if (port >= 0) return port;
		else return false;
	}

	private onError(error: NodeJS.ErrnoException): void {
		if (error.syscall !== "listen") throw error;
		const bind = typeof this.port === "string" ? "Pipe " + this.port : "Port " + this.port;
		switch (error.code) {
			case "EACCES": {
				Logger.log(`${bind} requires elevated privileges`);
				return process.exit(1);
			}
			case "EADDRINUSE": {
				Logger.log(`${bind} is already in use`);
				return process.exit(1);
			}
			default: {
				throw error;
			}
		}
	}

	private onListening(): void {
		const addr = this.httpServer.address();
		const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr?.port}`;
		debug(`Listening on ${bind}`);
	}
}

Server.getInstance();

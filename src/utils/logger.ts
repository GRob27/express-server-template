class Logger {
	public static log(message: string): void {
		new Logger().getLoggingStrategy().log(message);
	}

	public getLoggingStrategy(): Console {
		return console;
	}
}

export default Logger;

class MyController {
	private static instance: MyController;
	private message: string;

	private constructor() {
		this.message = "Hello World";
	}

	public static getInstance(): MyController {
		if (!this.instance) {
			this.instance = new MyController();
		}
		return this.instance;
	}

	public helloWorld(): string {
		return this.message;
	}
}

export default MyController;

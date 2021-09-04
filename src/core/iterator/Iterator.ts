import Record from "../models/Record";
import Collection from "./Collection";

class Iterator<T extends Record> {
	private collection: Collection<T>;
	private position: number;

	public constructor(collection: Collection<T>) {
		this.position = 0;
		this.collection = collection;
	}

	public current(): T | undefined {
		return this.collection.getItems()[this.position];
	}

	public next(): T | undefined {
		const item = this.collection.getItems()[this.position];
		this.position += 1;
		return item;
	}

	public key(): number {
		return this.position;
	}

	public hasNext(): boolean {
		return this.position < this.collection.getCount();
	}

	public reset(): void {
		this.position = 0;
	}
}

export default Iterator;

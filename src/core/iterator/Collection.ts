import Record from "../models/Record";
import Aggregator from "./Aggregator";
import Iterator from "./Iterator";

class Collection<T extends Record> implements Aggregator<T> {
	private array: Array<T>;

	public constructor() {
		this.array = new Array<T>();
	}

	public getItems(): Array<T> {
		return this.array;
	}

	public getCount(): number {
		return this.array.length;
	}

	public addItem(item: T): void {
		this.array.push(item);
	}

	public removeItem(id: string): void {
		const index = this.array.findIndex((elem) => elem.getId() === id);
		const element = this.array[index];
		this.array = this.array.filter((el) => el !== element);
	}

	public getIterator(): Iterator<T> {
		return new Iterator<T>(this);
	}
}

export default Collection;

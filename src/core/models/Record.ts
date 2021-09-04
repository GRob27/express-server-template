import Comparable from "../comparator/Comparable";

export class RecordFactory {
	public static getObject(id: string): Record {
		return new Record(id);
	}
}

class Record implements Comparable<Record> {
	protected id: string;

	public constructor(id: string) {
		this.id = id;
	}

	public getId(): string {
		return this.id;
	}

	public setId(id: string): void {
		this.id = id;
	}

	public compareTo(other: Record): number {
		if (this.id > other.id) return 1;
		if (this.id < other.id) return -1;
		return 0;
	}
}

export default Record;

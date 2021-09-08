import "jest-extended";
import Comparable from "../src/core/comparator/Comparable";
import Comparator from "../src/core/comparator/Comparator";

class DummyObject implements Comparable<DummyObject> {
	private number: number;

	public constructor(number: number) {
		this.number = number;
	}

	public compareTo(other: DummyObject): number {
		return this.number > other.number ? -1 : 1;
	}
}

describe("Object comparator", () => {
	it("Should return that object 1 > object 2", async () => {
		const object1 = new DummyObject(4);
		const object2 = new DummyObject(2);
		expect(object1.compareTo(object2)).toEqual(-1);
	});
	
	it("Should sort the array in place", async () => {
		const array = [
			new DummyObject(2),
			new DummyObject(6),
			new DummyObject(4),
			new DummyObject(-1),
		];
		new Comparator<DummyObject>().sort(array);
		expect(array).toEqual([
			new DummyObject(6),
			new DummyObject(4),
			new DummyObject(2),
			new DummyObject(-1),
		]);
	});
});

import Collection from "../src/core/iterator/Collection";
import Record from "../src/core/models/Record";

class DummyObject extends Record {
	public constructor(id: string) {
		super(id);
	}
}

describe("Object collection", () => {
	it("should contain items added to the collection", async () => {
		const object1 = new DummyObject("4");
		const object2 = new DummyObject("2");
		const collection = new Collection<DummyObject>();
		collection.addItem(object1);
		collection.addItem(object2);
		expect(collection.getCount()).toBe(2);
		expect(collection.getItems()).toEqual([object1, object2]);
		const test = () => {
			collection.removeItem("4");
		};
		expect(test).not.toThrow(Error);
		expect(collection.getItems()).toEqual([object2]);
		const iterator = collection.getIterator();
		expect(iterator.hasNext()).toEqual(true);
		expect(iterator.next()).toEqual(object2);
		expect(iterator.hasNext()).toEqual(false);
	});
	it("iterator should manage the state of the collection", async () => {
		const object1 = new DummyObject("4");
		const object2 = new DummyObject("2");
		const collection = new Collection<DummyObject>();
		collection.addItem(object1);
		collection.addItem(object2);
		const iterator = collection.getIterator();
		expect(iterator.key()).toBe(0);
		expect(iterator.hasNext()).toEqual(true);
		expect(iterator.next()).toEqual(object1);
		expect(iterator.current()).toEqual(object2);
		expect(iterator.key()).toBe(1);
		expect(iterator.hasNext()).toEqual(true);
		expect(iterator.next()).toEqual(object2);
		expect(iterator.key()).toBe(2);
		expect(iterator.hasNext()).toEqual(false);
		expect(iterator.key()).toBe(2);
		iterator.reset();
		expect(iterator.key()).toBe(0);
	});
});

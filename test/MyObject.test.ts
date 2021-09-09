import { RecordFactory } from "../src/core/models/Record";

describe("MyObject", () => {
	it("property should correspond to what is initialized", () => {
		const record1 = RecordFactory.getObject("789-123");
		const record2 = RecordFactory.getObject("189-123");
		const record3 = RecordFactory.getObject("");
		record3.setId("setted");
		expect(record1.getId()).toBe("789-123");
		expect(record1.compareTo(record2)).toBe(1);
		expect(record1.compareTo(record3)).toBe(-1);
		expect(record2.compareTo(record2)).toBe(0);
		expect(record3.getId()).toBe("setted");
	});
});

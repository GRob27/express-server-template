import type { events } from "../src/core/observer/events";
import Observable from "../src/core/observer/Observable";
import type Observer from "../src/core/observer/Observer";

class DummyObservable extends Observable {}

class DummyObserver implements Observer {
	public event!: events;

	public notify(event: events): void {
		this.event = event;
	}
}

describe("Observers", () => {
	it("observables notify on values to observers", () => {
		const observable = new DummyObservable();
		const observer = new DummyObserver();
		observable.attach(observer);
		observable.notifyObservers({ type: "UNDEFINED", payload: undefined });
		expect(observer.event).toEqual({ type: "UNDEFINED", payload: undefined });
		observable.detach(observer);
	});
});

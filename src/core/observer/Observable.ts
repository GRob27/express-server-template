import { events } from "./events";
import Observer from "./Observer";

abstract class Observable {
	private observers = new Array<Observer>();

	public attach(observer: Observer): void {
		this.observers.push(observer);
	}

	public detach(observer: Observer): void {
		this.observers = this.observers.filter((o) => o != observer);
	}

	public notifyObservers(event: events): void {
		this.observers.forEach((o) => o.notify(event));
	}
}

export default Observable;

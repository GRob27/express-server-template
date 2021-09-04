import { events } from "./events";

interface Observer {
	notify(event: events): void;
}

export default Observer;

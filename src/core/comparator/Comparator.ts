import Comparable from "./Comparable";

class Comparator<T extends Comparable<T>> {
	public sort(array: T[]): void {
		array.sort((a: T, b: T) => a.compareTo(b));
	}
}

export default Comparator;

export default interface Comparable<T> {
  compareTo(other: T): number;
}

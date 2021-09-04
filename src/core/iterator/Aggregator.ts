import Record from "../models/Record";
import Iterator from "./Iterator";

export default interface Aggregator<T extends Record> {
  getIterator(): Iterator<T>;
}

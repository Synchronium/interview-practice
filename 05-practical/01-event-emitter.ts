/**
 * Event emitter
 *
 * Build a tiny pub/sub event emitter:
 *
 * const emitter = new EventEmitter();
 * const unsubscribe = emitter.on("message", (text, from) => console.log(from, text));
 * emitter.emit("message", "hi", "ann");   // logs: ann hi
 * unsubscribe();                          // stop listening
 * emitter.once("ready", () => ...);       // fires at most once
 *
 * Requirements:
 *   - on(event, listener): registers a listener, returns an unsubscribe function
 *   - off(event, listener): removes that listener
 *   - once(event, listener): listener runs on the next emit only, then removes itself
 *   - emit(event, ...args): calls that event's listeners in registration order
 *     with the given args. Emitting an event with no listeners does nothing.
 *
 * Watch out: a listener that unsubscribes itself DURING emit must not cause
 *   the next listener to be skipped. (Iterating over a copy of the array fixes this.)
 *
 * Syntax to remember: Map<string, Listener[]>, rest params (...args),
 *   spread when calling (listener(...args)), closures (the unsubscribe function
 *   "remembers" event + listener), array.filter to remove an item
 *
 * Be ready to discuss: how you'd make it type-safe so emit("message", 123) is a
 *   compile error. (Answer sketch: a generic over an event map type like
 *   { message: [text: string, from: string]; ready: [] }.)
 *
 * TS hint: `any[]` is used for args here to keep things simple; the typed
 *   version above is the stretch goal.
 */
export type Listener = (...args: any[]) => void;

export class EventEmitter {
  on(event: string, listener: Listener): () => void {
    throw new Error("TODO");
  }

  off(event: string, listener: Listener): void {
    throw new Error("TODO");
  }

  once(event: string, listener: Listener): () => void {
    throw new Error("TODO");
  }

  emit(event: string, ...args: any[]): void {
    throw new Error("TODO");
  }
}

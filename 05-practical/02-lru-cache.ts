/**
 * LRU cache (Least Recently Used)
 *
 * A fixed-size cache. When it's full and a new key is added, evict the key
 * that was used least recently. Both get and set count as "using" a key.
 *
 * const cache = new LRUCache<string, number>(2);
 * cache.set("a", 1);
 * cache.set("b", 2);
 * cache.get("a");        // 1, and "a" is now the most recently used
 * cache.set("c", 3);     // full, so evict "b" (least recently used)
 * cache.get("b");        // undefined
 *
 * Both get and set should be O(1).
 *
 * The JS trick: a Map remembers insertion order. So:
 *   - "mark as recently used" = delete the key and set it again (moves it to the end)
 *   - "least recently used"   = the FIRST key: map.keys().next().value
 * (In other languages the textbook answer is a hash map + doubly linked list.
 *  Knowing why that's needed is a good thing to mention.)
 *
 * TS hints:
 *   - `class LRUCache<K, V>` is a generic class. K and V are filled in by the caller.
 *   - `private readonly items = new Map<K, V>();` declares and initialises a field.
 */
export class LRUCache<K, V> {
  constructor(capacity: number) {
    throw new Error("TODO");
  }

  get(key: K): V | undefined {
    throw new Error("TODO");
  }

  set(key: K, value: V): void {
    throw new Error("TODO");
  }

  get size(): number {
    throw new Error("TODO");
  }
}

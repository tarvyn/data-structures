interface BucketItem {
  key: string;
  value: unknown;
}

export abstract class AbstractHashTable<BucketModel> {
  protected readonly size = 1000;
  abstract readonly buckets: BucketModel[];

  abstract get(key: string): unknown;

  abstract set(key: string, value: unknown): void;

  protected hash(key: string): number {
    let hash = 0;

    for (const char of key) {
      hash += char.charCodeAt(0);
    }

    return hash % this.size;
  }
}

/**
 * The hash table with solved hash collision with chaining.
 */
export class HashTable1 extends AbstractHashTable<BucketItem[]> {
  readonly buckets = new Array<BucketItem[]>(this.size).fill([]);

  set(key: string, value: unknown): void {
    const keyHash = this.hash(key);
    const bucketArray = this.buckets[keyHash];
    const storedElement = bucketArray.find((element) => element.key === key);

    if (storedElement) {
      storedElement.value = value;
    } else {
      bucketArray.push({ key, value });
    }
  }

  get(key: string): unknown {
    const keyHash = this.hash(key);

    return this.buckets[keyHash].find((element) => element.key === key);
  }
}

/**
 * The hash table with solved hash collision with open address.
 */
export class HashTable2 extends AbstractHashTable<BucketItem | null> {
  readonly buckets = new Array<BucketItem | null>(this.size).fill(null);

  set(key: string, value: unknown): void {
    let keyHash = this.hash(key);

    if (this.buckets[keyHash] === null || this.buckets[keyHash]?.key === key) {
      this.buckets[keyHash] = { key, value };
    } else {
      while (this.buckets[keyHash] !== null) {
        keyHash++;
      }
      this.buckets[keyHash] = { key, value };
    }
  }

  get(key: string): unknown {
    const keyHash = this.hash(key);

    for (let i = keyHash; i < this.buckets.length; i++) {
      if (this.buckets[i]?.key === key) {
        return this.buckets[i]?.value;
      }
    }
  }
}

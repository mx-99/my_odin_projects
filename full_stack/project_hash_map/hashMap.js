class HashMap {
    constructor(capacity = 16, loadFactor = 0.75) {
        this.capacity = capacity;
        this.loadFactor = loadFactor;
        this.size = 0;
        this.table = new Array(capacity);
    }

    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
        return Math.abs(hashCode % this.capacity);
    }

    resize() {
        this.capacity *= 2;
        const newTable = new Array(this.capacity);
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                for (let [key, value] of this.table[i]) {
                    const index = this.hash(key);
                    if (!newTable[index]) {
                        newTable[index] = [[key, value]];
                    } else {
                        newTable[index].push([key, value]);
                    }
                }
            }
        }
        this.table = newTable;
    }

    set(key, value) {
        if (this.size / this.capacity > this.loadFactor) {
            this.resize();
        }

        const index = this.hash(key);
        const bucket = this.table[index];

        if (!bucket) {
            this.table[index] = [[key, value]];
        } else {
            const existingItem = bucket.find(item => item[0] === key);
            if (existingItem) {
                existingItem[1] = value;
            } else {
                bucket.push([key, value]);
            }
        }
        this.size++;
    }

    get(key) {
        const index = this.hash(key);
        const bucket = this.table[index];

        if (bucket) {
            const foundItem = bucket.find(item => item[0] === key);
            return foundItem ? foundItem[1] : undefined;
        }
        return undefined;
    }

  
}


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

    has(key) {
        const index = this.hash(key);
        const bucket = this.table[index];

        if (bucket) {
            return bucket.some(item => item[0] === key);
        }
        return false;
    }

    remove(key) {
        const index = this.hash(key);
        const bucket = this.table[index];

        if (bucket) {
            const itemIndex = bucket.findIndex(item => item[0] === key);
            if (itemIndex !== -1) {
                bucket.splice(itemIndex, 1);
                this.size--;
                return true;
            }
        }
        return false;
    }

    length() {
        return this.size;
    }

    clear() {
        this.table = new Array(this.capacity);
        this.size = 0;
    }

    keys() {
        const keysArray = [];
        for (let i = 0; i < this.table.length; i++) {
            const bucket = this.table[i];
            if (bucket) {
                bucket.forEach(item => keysArray.push(item[0]));
            }
        }
        return keysArray;
    }

    values() {
        const valuesArray = [];
        for (let i = 0; i < this.table.length; i++) {
            const bucket = this.table[i];
            if (bucket) {
                bucket.forEach(item => valuesArray.push(item[1]));
            }
        }
        return valuesArray;
    }

    entries() {
        const entriesArray = [];
        for (let i = 0; i < this.table.length; i++) {
            const bucket = this.table[i];
            if (bucket) {
                bucket.forEach(item => entriesArray.push(item));
            }
        }
        return entriesArray;
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i]);
            }
        }
    }
}

const test = new HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

test.display();

test.set('moon', 'silver');
test.display();

console.log(test.get('apple'));
console.log(test.has('banana'));
console.log(test.remove('carrot'));
console.log(test.length());
console.log(test.keys());
console.log(test.values());
console.log(test.entries());
test.clear();
console.log(test.length());

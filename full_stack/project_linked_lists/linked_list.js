function createNode(value) {
    return {
        value: value,
        next: null
    }
}

function createLinkedList() {
    let head = null;
    let size = 0;

    function isEmpty() {
        return size === 0
    }

    function getSize() {
        return size
    }

    function prepend(value) {
        const node = createNode(value);
        if (isEmpty()) {
            head = node
        } else {
            node.next = head;
            head = node
        }
        size++
    }

    function append(value) {
        const node = createNode(value);
        if (isEmpty()) {
            head = node;
        } else {
            let prev = head;
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node;
        }
        size++
    }

    function insert(value, index) {
        if (index < 0 || index > size) {
            console.log(`Error: Index ${index} is out of bounds.`);
            return;
        }
        if (index === 0) {
            prepend(value)
        } else {
            const node = createNode(value)
            let prev = head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node
            size++
        }
    }

    function print() {
        if (isEmpty()) {
            console.log("List is empty!");
        } else {
            let current = head;
            let listValue = '';
            while (current) {
                listValue += `(${current.value}) -> `;
                current = current.next;
            }
            console.log(listValue)
        }
    }
    return {
        isEmpty,
        getSize,
        prepend,
        print,
        append,
        insert,
    }
}
// Test the Linked List Factory Function
const list = createLinkedList();

// Test the isEmpty and getSize methods
console.log("Test 1: isEmpty and getSize");
console.log(list.isEmpty());
console.log(list.getSize());

// Test prepend method
console.log("\nTest 2: Prepend");
list.prepend(10);
console.log(list.isEmpty());
console.log(list.getSize());
list.print();

// Test append method
console.log("\nTest 3: Append");
list.append(20);
list.append(30);
console.log(list.getSize());
list.print();

// Test insert method at the head (index 0)
console.log("\nTest 4: Insert at index 0");
list.insert(5, 0);
console.log(list.getSize());
list.print();

// Test insert method at the end
console.log("\nTest 5: Insert at the end");
list.insert(40, 4);
console.log(list.getSize());
list.print();

// Test insert method in the middle
console.log("\nTest 6: Insert in the middle");
list.insert(25, 2);
console.log(list.getSize());
list.print();

// Test out of bounds index for insert
console.log("\nTest 7: Insert with an out of bounds index");
list.insert(50, 10);
list.print();

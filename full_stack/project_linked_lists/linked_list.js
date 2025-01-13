function createNode(value){
    return{
        value: value,
        next: null 
    }
}

function createLinkedList(){
    let head = null;
    let size = 0;

    function isEmpty(){
        return size === 0 
    }

    function getSize(){
        return size
    }

    function prepend(value){
        const node = createNode(value);
        if(isEmpty()){
            head = node
        }else{
            node.next = head;
            head = node
        }
        size++
    }

    function append(value){
        const node = createNode(value);
        if(isEmpty()){
            head = node;
        }else{
            let prev = head;
            while(prev.next){
                prev = prev.next
            }
            prev.next = node;
        }
        size++
    }

    function insert(value, index){
        if(index < 0 || index > size){
            console.log(`Error: Index ${index} is out of bounds.`);
            return;
        }
        if(index === 0){
            prepend(value)
        }else{
            const node = createNode(value)
            let prev = head;
            for(let i = 0; i<index-1; i++){
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node
            size++
        }
    }

    function print(){
        if(isEmpty()){
            console.log("List is empty!");
        }else{
            let current = head;
            let listValue = '';
            while(current){
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

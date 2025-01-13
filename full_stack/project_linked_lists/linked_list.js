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
    }
}

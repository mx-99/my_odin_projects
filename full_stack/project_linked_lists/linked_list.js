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

 
    return {
        isEmpty,
        getSize,
    }
}

class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    buildTree(array) {
      const uniqueSortedArray = [...new Set(array)].sort((a, b) => a - b);
      this.root = this.buildBalancedTree(uniqueSortedArray);
    }
  
    buildBalancedTree(array) {
      if (array.length === 0) return null;
      const mid = Math.floor(array.length / 2);
      const root = new Node(array[mid]);
      root.left = this.buildBalancedTree(array.slice(0, mid));
      root.right = this.buildBalancedTree(array.slice(mid + 1));
      return root;
    }
  
    insert(value) {
      const newNode = new Node(value);
      if (!this.root) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    insertNode(root, newNode) {
      if (newNode.value < root.value) {
        if (root.left === null) {
          root.left = newNode;
        } else {
          this.insertNode(root.left, newNode);
        }
      } else {
        if (root.right === null) {
          root.right = newNode;
        } else {
          this.insertNode(root.right, newNode);
        }
      }
    }
  }
  

  
  
  
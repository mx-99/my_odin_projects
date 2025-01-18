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
  
    delete(value) {
      this.root = this.deleteNode(this.root, value);
    }
  
    deleteNode(root, value) {
      if (root === null) return root;
      if (value < root.value) {
        root.left = this.deleteNode(root.left, value);
      } else if (value > root.value) {
        root.right = this.deleteNode(root.right, value);
      } else {
        if (!root.left && !root.right) return null;
        if (!root.left) return root.right;
        if (!root.right) return root.left;
  
        root.value = this.min(root.right);
        root.right = this.deleteNode(root.right, root.value);
      }
      return root;
    }
  
    find(value) {
      return this.search(this.root, value);
    }
  
    search(root, value) {
      if (!root) return null;
      if (root.value === value) return root;
      return value < root.value
        ? this.search(root.left, value)
        : this.search(root.right, value);
    }
  
   
  }
  

  
  
  
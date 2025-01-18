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
  
    preOrder(root, callback) {
      if (root) {
        callback(root);
        this.preOrder(root.left, callback);
        this.preOrder(root.right, callback);
      }
    }
  
    inOrder(root, callback) {
      if (root) {
        this.inOrder(root.left, callback);
        callback(root);
        this.inOrder(root.right, callback);
      }
    }
  
    postOrder(root, callback) {
      if (root) {
        this.postOrder(root.left, callback);
        this.postOrder(root.right, callback);
        callback(root);
      }
    }
  
    levelOrder(callback) {
      if (typeof callback !== 'function') throw new Error('Callback is required');
  
      const queue = [this.root];
      while (queue.length) {
        let current = queue.shift();
        callback(current);
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
      }
    }
  
    height(node) {
      if (!node) return -1;
      return 1 + Math.max(this.height(node.left), this.height(node.right));
    }
  
    depth(node) {
      let current = this.root;
      let depth = 0;
  
      while (current && current !== node) {
        if (node.value < current.value) {
          current = current.left;
        } else {
          current = current.right;
        }
        depth++;
      }
  
      return current === node ? depth : -1;
    }
  
    
  }
  

  
  
  
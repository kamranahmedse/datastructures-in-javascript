class Node {
  constructor(value = null, left = null, right = null) {
    this.value = value;

    this.right = right;
    this.left = left;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new Node(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new Node(value);
      } else {
        this.right.insert(value);
      }
    }
  }

  contains(value) {
    if (this.value === value) {
      return true;
    }

    if (value < this.value) {
      if (this.left === null) {
        return false;
      }

      return this.left.contains(value);
    }

    if (this.right === null) {
      return false;
    }

    return this.right.contains(value);
  }

  printInOrder() {
    if (this.left !== null) {
      this.left.printInOrder();
    }

    console.log(this.value);

    if (this.right !== null) {
      this.right.printInOrder();
    }
  }

  printPreOrder() {
    console.log(this.value);

    if (this.left !== null) {
      this.left.printInOrder();
    }

    if (this.right !== null) {
      this.right.printInOrder();
    }
  }

  printPostOrder() {
    if (this.left !== null) {
      this.left.printInOrder();
    }

    if (this.right !== null) {
      this.right.printInOrder();
    }

    console.log(this.value);
  }
}

const tree = new Node(5);

tree.insert(6);
tree.insert(2);
tree.insert(8);
tree.insert(0);
tree.insert(4);
tree.insert(7);
tree.insert(9);
tree.insert(3);
tree.insert(5);

console.log(tree.contains(15));
console.log(tree.contains(7));

tree.printPostOrder();

console.log(JSON.stringify(tree, null, 2));

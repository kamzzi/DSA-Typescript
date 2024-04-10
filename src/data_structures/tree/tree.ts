class TreeNode<T> {
  constructor(
    public value: T,
    public left: TreeNode<T> | null = null,
    public right: TreeNode<T> | null = null
  ) {}
}

export class Tree<T> {
  constructor(public root: TreeNode<T> | null = null) {}

  insert(value: T) {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (true) {
      if (value === current.value) return undefined;

      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        } else {
          current = current.left;
        }
      }

      if (value > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }

  find(value: T) {
    if (!this.root) return null;

    let current = this.root;

    while (current) {
      if (current.value > value) {
        current = current.left;
      }
      if (current.value < value) {
        current = current.right;
      } else {
        return true;
      }
    }

    return null;
  }
}

const tree = new Tree();

tree.insert(10);
tree.insert(5);
tree.insert(3);
tree.insert(11);
tree.insert(7);
tree.insert(30);

console.log(tree);

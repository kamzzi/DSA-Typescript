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

  BFS() {
    if (!this.root) return;

    const data: TreeNode<T>[] = [];
    const queue: TreeNode<T>[] = [];

    let node = this.root;

    queue.push(node);

    while (queue.length) {
      node = queue.shift();

      data.push(node);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    console.log(data);
    return data;
  }

  DFSPreOrder() {
    if (!this.root) return null;

    const data: TreeNode<T>["value"][] = [];

    let current = this.root;

    const helper = (node: TreeNode<T>) => {
      data.push(node!.value);
      if (node.left) helper(node.left);
      if (node.right) helper(node.right);
    };

    helper(current);
    return data;
  }

  DFSPostOrder() {
    if (!this.root) return null;

    const data: TreeNode<T>["value"][] = [];

    let current = this.root;

    const helper = (node: TreeNode<T>) => {
      if (node.left) helper(node.left);
      if (node.right) helper(node.right);
      data.push(node!.value);
    };

    helper(current);
    return data;
  }

  DFSInOrder() {
    if (!this.root) return null;

    const data: TreeNode<T>["value"][] = [];

    let current = this.root;

    const helper = (node: TreeNode<T>) => {
      if (node.left) helper(node.left);
      data.push(node!.value);
      if (node.right) helper(node.right);
    };

    helper(current);
    return data;
  }
}

const tree = new Tree();

tree.insert(10);
tree.insert(6);
tree.insert(3);
tree.insert(8);
tree.insert(15);
tree.insert(20);

console.log(tree.DFSPostOrder());
console.log(tree.DFSPreOrder());
console.log(tree.DFSInOrder());

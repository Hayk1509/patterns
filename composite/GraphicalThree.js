// Function to generate a specified number of leaf nodes and add them to a parent node
function generateLeaf(count, parent) {
  for (let index = 0; index < count; index++) {
    const leaf = new Leaf();
    parent.addChild(leaf);
  }
}

// Function to create a composite tree branch from a given branch
function makeCompositeBranch(branch) {
  return new CompositeTree(branch);
}

// Function to remove a child item from a parent node
function removeItem(item, parent) {
  parent.removeChild(item);
}

// Define the base GraphicalTree class and its subclasses for Branch and Leaf nodes
class GraphicalTree {
  constructor(type, id) {
    this.type = type;
    this.id = id;
  }
}

class Branch extends GraphicalTree {
  constructor() {
    super("branch", Math.floor(Math.random() * 100));
  }
}

class Leaf extends GraphicalTree {
  constructor() {
    super("leaf", Math.floor(Math.random() * 100));
  }
}

// Define the CompositeTree class for composite nodes
class CompositeTree extends GraphicalTree {
  constructor({ type, id }) {
    super(type, id);
    this.child = [];
  }

  // Method to add a child node to the composite tree
  addChild(child) {
    if (this.type === "leaf") return false;
    this.child.push(child);
    return this;
  }

  // Method to remove a child node from the composite tree
  removeChild(item) {
    this.child = this.child.filter((i) => i.id !== item.id);
    return this;
  }
}

// Create instances of Branch, Leaf, and CompositeTree nodes
const root = new Branch();
const branchOne = new Branch();
const branchTwo = new Branch();
const branchThree = new Branch();
const branchFour = new Branch();
const subBranch = new Branch();

// Create composite branches and add child nodes to them
const compositeRootBranch = makeCompositeBranch(root);
const compositeForBranchOne = makeCompositeBranch(branchOne);
const compositeForBranchTwo = makeCompositeBranch(branchTwo);
const compositeForBranchThree = makeCompositeBranch(branchThree);
const compositeForBranchFour = makeCompositeBranch(branchFour);
const compositeSubBranch = makeCompositeBranch(subBranch);
compositeForBranchOne.addChild(compositeSubBranch);
generateLeaf(5, compositeForBranchOne);
generateLeaf(5, compositeSubBranch);
generateLeaf(2, compositeForBranchTwo);
generateLeaf(5, compositeForBranchThree);

// Create the hierarchy of composite tree nodes
compositeRootBranch
  .addChild(compositeForBranchOne)
  .addChild(compositeForBranchTwo)
  .addChild(compositeForBranchThree)
  .addChild(compositeForBranchFour);

// Create a <pre> element and display the JSON representation of the composite tree
let pre = document.createElement("pre");
pre.textContent = JSON.stringify(compositeRootBranch, null, 3);
document.body.appendChild(pre);

// Remove a specific item from the composite tree and display the updated tree
removeItem({ id: 25 }, compositeForBranchThree);

let pre1 = document.createElement("pre");
pre1.textContent = JSON.stringify(compositeRootBranch, null, 3);

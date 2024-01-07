function generateLeaf(count, parent) {
  for (let index = 0; index < count; index++) {
    const leaf = new Leaf();
    parent.addChild(leaf);
  }
}

function makeCompositeBranch(branch) {
  return new CompositeTree(branch);
}
function removeItem(item, parent) {
  parent.removeChild(item);
}
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

class CompositeTree extends GraphicalTree {
  constructor({ type, id }) {
    super(type, id);
    this.child = [];
  }
  addChild(child) {
    if (this.type === "leaf") return false;
    this.child.push(child);
    return this;
  }
  removeChild(item) {
    this.child.filter((i) => i.id !== item.id);
    return this;
  }
}
const root = new Branch();
const branchOne = new Branch();
const branchTwo = new Branch();
const branchThree = new Branch();
const branchFour = new Branch();
const subBranch = new Branch();
const compositeRootBranch = makeCompositeBranch(root);
const compositeForBranchOne = makeCompositeBranch(branchOne);
const compositeForBrancTwo = makeCompositeBranch(branchTwo);
const compositeForBranchThree = makeCompositeBranch(branchThree);
const compositeForBranchFour = makeCompositeBranch(branchFour);
const compositeSubBranch = makeCompositeBranch(subBranch);
compositeForBranchOne.addChild(compositeSubBranch);
generateLeaf(5, compositeForBranchOne);
generateLeaf(5, compositeSubBranch);
generateLeaf(2, compositeForBrancTwo);
generateLeaf(5, compositeForBranchThree);

compositeRootBranch
  .addChild(compositeForBranchOne)
  .addChild(compositeForBrancTwo)
  .addChild(compositeForBranchThree)
  .addChild(compositeForBranchFour);

let pre = document.createElement("pre");
pre.textContent = JSON.stringify(compositeRootBranch, null, 3);
document.body.appendChild(pre);
removeItem({ id: 25 }, compositeForBranchThree);

let pre1 = document.createElement("pre");
pre1.textContent = JSON.stringify(compositeRootBranch, null, 3);

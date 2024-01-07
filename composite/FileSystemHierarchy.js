// Help to add and remove easy way
function addChild(parent, child) {
  return parent.append(child);
}
function removeChild(parent, child) {
  return parent.remove(child);
}

class FileSystemHierarchy {
  constructor(name, type, id) {
    this.name = name;
    this.type = type;
    this.id = id;
  }
}

class Folder extends FileSystemHierarchy {
  constructor(name) {
    super(name, "folder", Math.floor(Math.random() * 10000));
  }
}
class File extends FileSystemHierarchy {
  constructor(name) {
    super(name, "file", Math.floor(Math.random() * 10000));
  }
}

class CompositeFileSystemHierarchy extends FileSystemHierarchy {
  constructor({ name, type, id }) {
    super(name, type, id);
    this.children = [];
  }
  append(child) {
    if (this.type === "file") return false;
    this.children.push(child);
    return this;
  }
  remove(child) {
    // Here you can implement your own remove functionality, Here we compare name becouse you can't add the same name or folder name if already exist inside that folder
    this.children = this.children.filter((item) => item.name !== child.name);
    return this;
  }
}

const compositeFile = new CompositeFileSystemHierarchy(new Folder("src"));
compositeFile.append(new File("index.js"));
compositeFile.append(new File("style.css"));
const hook = new Folder("hook");
const helpers = new CompositeFileSystemHierarchy(new Folder("helpers"));
const helpersFile = new File("helpers.js");
const hookFolder = new CompositeFileSystemHierarchy(hook)
  .append(new File("hook.js"))
  .append(new File("useHook.js"))
  .append(
    helpers
      .append(helpersFile)
      .append(
        new CompositeFileSystemHierarchy(new Folder("constants")).append(
          new File("constants.js")
        )
      )
  );
addChild(compositeFile, hookFolder);
let pre1 = document.createElement("pre");
pre1.textContent = JSON.stringify(compositeFile, null, 3);
console.log(JSON.stringify(compositeFile, null, 3));
console.log(
  "-------------------------------------------------------------------------------"
);
removeChild(compositeFile, hookFolder);
let pre2 = document.createElement("pre");
pre2.textContent = JSON.stringify(compositeFile, null, 3);
console.log(JSON.stringify(compositeFile, null, 3));

console.log(
  "-------------------------------------------------------------------------------"
);
addChild(compositeFile, hookFolder);
let pre3 = document.createElement("pre");
pre3.textContent = JSON.stringify(compositeFile, null, 3);
console.log(JSON.stringify(compositeFile, null, 3));
removeChild(helpers, helpersFile);
console.log(
  "-------------------------------------------------------------------------------"
);
let pre4 = document.createElement("pre");
pre4.textContent = JSON.stringify(compositeFile, null, 3);
console.log(JSON.stringify(compositeFile, null, 3));
document.body.appendChild(pre1);
document.body.appendChild(pre2);

document.body.appendChild(pre3);

document.body.appendChild(pre4);

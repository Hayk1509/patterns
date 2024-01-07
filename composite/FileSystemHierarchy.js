// Helper functions to add and remove child elements to/from a parent
function addChild(parent, child) {
  return parent.append(child);
}

function removeChild(parent, child) {
  return parent.remove(child);
}

// Base class for representing items in a file system hierarchy
class FileSystemHierarchy {
  constructor(name, type, id) {
    this.name = name;
    this.type = type;
    this.id = id;
  }
}

// Subclass representing a folder in the file system hierarchy
class Folder extends FileSystemHierarchy {
  constructor(name) {
    super(name, "folder", Math.floor(Math.random() * 10000));
  }
}

// Subclass representing a file in the file system hierarchy
class File extends FileSystemHierarchy {
  constructor(name) {
    super(name, "file", Math.floor(Math.random() * 10000));
  }
}

// Composite class to represent a composite file system hierarchy
class CompositeFileSystemHierarchy extends FileSystemHierarchy {
  constructor({ name, type, id }) {
    super(name, type, id);
    this.children = [];
  }

  // Method to add a child element
  append(child) {
    if (this.type === "file") return false;
    this.children.push(child);
    return this;
  }

  // Method to remove a child element
  remove(child) {
    // Here you can implement your own remove functionality.
    // In this example, we compare names because you can't add items with the same name inside a folder.
    this.children = this.children.filter((item) => item.name !== child.name);
    return this;
  }
}

// Create instances of the file system hierarchy elements
const compositeFile = new CompositeFileSystemHierarchy(new Folder("src"));
compositeFile.append(new File("index.js"));
compositeFile.append(new File("style.css"));

const hook = new Folder("hook");
const helpers = new CompositeFileSystemHierarchy(new Folder("helpers"));
const helpersFile = new File("helpers.js");

// Create a composite hierarchy for the 'hook' folder
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

// Add the 'hook' folder to the 'src' folder
addChild(compositeFile, hookFolder);

// Create a <pre> element to display the file system hierarchy
let pre1 = document.createElement("pre");
pre1.textContent = JSON.stringify(compositeFile, null, 3);
console.log(JSON.stringify(compositeFile, null, 3));
console.log(
  "-------------------------------------------------------------------------------"
);

// Remove the 'hook' folder from the 'src' folder
removeChild(compositeFile, hookFolder);

let pre2 = document.createElement("pre");
pre2.textContent = JSON.stringify(compositeFile, null, 3);
console.log(JSON.stringify(compositeFile, null, 3));

console.log(
  "-------------------------------------------------------------------------------"
);

// Add the 'hook' folder back to the 'src' folder
addChild(compositeFile, hookFolder);

let pre3 = document.createElement("pre");
pre3.textContent = JSON.stringify(compositeFile, null, 3);
console.log(JSON.stringify(compositeFile, null, 3));

// Remove the 'helpers.js' file from the 'helpers' folder
removeChild(helpers, helpersFile);

console.log(
  "-------------------------------------------------------------------------------"
);

let pre4 = document.createElement("pre");
pre4.textContent = JSON.stringify(compositeFile, null, 3);
console.log(JSON.stringify(compositeFile, null, 3));

// Append the <pre> elements to the document body
document.body.appendChild(pre1);
document.body.appendChild(pre2);
document.body.appendChild(pre3);
document.body.appendChild(pre4);

// Define HTMLTag base class and its subclasses for different HTML elements
class HTMLTag {
  constructor(tag, params) {
    this.tag = tag;
    this.params = params;
  }
}

class Div extends HTMLTag {
  constructor(params) {
    super("div", params);
  }
}

class Span extends HTMLTag {
  constructor(params) {
    super("span", params);
  }
}

class Input extends HTMLTag {
  constructor(params) {
    super("input", params);
  }
}

// Create a CompositeHTMLTag class to represent composite HTML elements
class CompositeHTMLTag extends HTMLTag {
  constructor({tag, params}) {
    super(tag, params);
    this.children = [];
  }

  // Method to add child HTML elements to the composite
  add(child) {
    this.children.push(child);
  }

  // Method to remove child HTML elements from the composite
  remove(child) {
    const index = this.children.indexOf(child);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }
}

// Create instances of Div, Span, and Input elements
const div1 = new Div({ class: "div1" });
const div2 = new Div({ class: "div2" });
const div3 = new Div({ class: "div3" });

// Create a CompositeHTMLTag for div elements and add them as children
const compositeHTMLTagDiv = new CompositeHTMLTag(div1);
compositeHTMLTagDiv.add(div2);
compositeHTMLTagDiv.add(div3);

const span1 = new Span({ class: "span1" });
const span2 = new Div({ class: "span2" });
const input1 = new Input({ class: "input1" });

// Create a CompositeHTMLTag for span and input elements and add them as children
const compositeHTMLTagSpan = new CompositeHTMLTag(span1);
compositeHTMLTagSpan.add(span2);
compositeHTMLTagSpan.add(input1);

// Create a wrapperDiv element
const wrapperDiv = new Div({ class: "wrapperDiv", width: "300px" });

// Create a CompositeHTMLTag for the wrapperDiv and add the composite div and span as children
const compositeWrapperDiv = new CompositeHTMLTag(wrapperDiv);
compositeWrapperDiv.add(compositeHTMLTagDiv);
compositeWrapperDiv.add(compositeHTMLTagSpan);

// Log the resulting composite HTML structure
console.log(compositeWrapperDiv)

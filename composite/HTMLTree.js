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
  class CompositeHTMLTag extends HTMLTag {
    constructor({tag, params}) {
      super(tag, params);
      this.children = [];
    }
    add(child) {
      this.children.push(child);
    }
  
    remove(child) {
      const index = this.children.indexOf(child);
      if (index !== -1) {
        this.children.splice(index, 1);
      }
    }
  }
  const div1 = new Div({ class: "div1" });
  const div2 = new Div({ class: "div2" });
  const div3 = new Div({ class: "div3" });
  const compositeHTMLTagDiv = new CompositeHTMLTag(div1);
  compositeHTMLTagDiv.add(div2);
  compositeHTMLTagDiv.add(div3);
  
  const span1 = new Span({ class: "span1" });
  const span2 = new Div({ class: "span2" });
  const input1 = new Input({ class: "input1" });
  const compositeHTMLTagSpan = new CompositeHTMLTag(span1);
  compositeHTMLTagSpan.add(span2);
  compositeHTMLTagSpan.add(input1);
  
  const wrapperDiv = new Div({ class: "wrapperDiv", width: "300px" });
  
  const compositeWrapperDiv = new CompositeHTMLTag(wrapperDiv);
  compositeWrapperDiv.add(compositeHTMLTagDiv);
  compositeWrapperDiv.add(compositeHTMLTagSpan);
  
  console.log(compositeWrapperDiv)
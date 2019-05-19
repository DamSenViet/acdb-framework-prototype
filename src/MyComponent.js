
// JS hoisting for better code organization
MyComponent.prototype = Object.create(Component.prototype);
MyComponent.prototype.constructor = MyComponent;

function MyComponent(first, last) {
  Component.call(this, "my-component")
  this.first = first;
  this.last = last;
}

MyComponent.prototype.onFirstClick = function (event) {
  console.log("first was clicked from:");
  console.log(this);
};

MyComponent.prototype.onLastClick = function (event) {
  console.log("last was clicked from:");
  console.log(this);
}

MyComponent.prototype.fill = function (node) {
  let firstEl = node.querySelector(".first");
  firstEl.innerText = this.first;
  let lastEl = node.querySelector(".last");
  lastEl.innerText = this.last;

  // can also attach event handlers here !!!
  // need to bind to prototype instance when rendering
  firstEl.addEventListener('click', this.onFirstClick.bind(this));
  lastEl.addEventListener('click', this.onLastClick.bind(this));

  return node;
};

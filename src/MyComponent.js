
// JS hoisting for better code organization
MyComponent.templateId = "my-component";
MyComponent.prototype = Object.create(Component.prototype);
MyComponent.prototype.constructor = MyComponent;

function MyComponent(first = "", last = "") {
  Component.call(this); // super constructor call
  this.first = first; // hold state
  this.firstEl = null;
  this.last = last; // hold state
  this.lastEl = null;
};

MyComponent.prototype.onFirstClick = function (event) {
  console.log("first was clicked from:");
  console.log(this);
};

MyComponent.prototype.onLastClick = function (event) {
  // can also use event.target
  console.log("last was clicked from:");
  console.log(this);
};

// cache critical elements, modify for render, attach event handlers
MyComponent.prototype.fill = function () {
  this.firstEl = this.containerEl.querySelector(".first");
  this.firstEl.innerText = this.first;
  this.lastEl = this.containerEl.querySelector(".last");
  this.lastEl.innerText = this.last;

  // need to bind to prototype instance
  this.firstEl.addEventListener('click', this.onFirstClick.bind(this));
  this.lastEl.addEventListener('click', this.onLastClick.bind(this));
  // alternatively for singleton event handling
  // lastEl.onclick = this.onFirstClick.bind(this)
};

MyComponent.prototype.updateName = function (first, last) {
  this.first = first;
  this.firstEl.innerText = first;
  this.last = last;
  this.lastEl.innerText = last;
};


# acdb-framework.js

A lightweight component framework


## Table of Contents

* [Main Concepts](#main-concepts)
  * [The Global App](#the-global-app)


## Main Concepts

### The Global App



## Lifecycle

### Definitions

A custom component called `MyComponent` starts off with the following definitions:

```javascript
MyComponent.templateId = "my-component"; // rendering
MyComponent.prototype = Object.create(Component.prototype); // proto-chain
MyComponent.prototype.constructor = MyComponent; // fix constructor

function MyComponent() {
  Component.call(this); // super constructor call
  // component state properties here e.g. this.firstName
};

MyComponent.prototype.fill() {
  const { containerEl } = this; // deconstruct for exposure
  // seek out component's elements, add event handlers
};
```


### Mounting

Mounting refers to connecting a component's logic to a visual representation. This includes establishing references to DOM elements belonging to the component and attaching event handlers.

During the mounting phase, you can either render and mount at the same time, or mount your component's logic onto an existing visual representation.

An individual components instance can only be mounted to a dom element once. Multiple attempts to mount will either:

* change the location of the where the component is rendered
* change where the component's logic will operate

So it is recommend to create multiple component instances instead.


#### mount

```javascript
component.mount()
```

`component.mount` returns a dom element that you can manually attach to the DOM. It is constructed out of the compnent's template tag. Use `mount` when you need to generate components dynamically.

```javascript
const myComponent = new MyComponent();
document.body.appendChild(foo.mount());
```


#### mountOn

```javascript
component.mountOn(element);
```

`component.mountOn()` mounts the logic of a component without rendering it by directly mounting the logic on to an existing DOM element. It is preferable to use `mountOn` when you are not dynamically generating components.

```javascript
const myComponentEl = document.querySelector("my-compoennt");
const myComponent = new MyComponent();
myComponent.mountOn(myComponentEl);
```

### unmount

```javascript
component.unmount();
```

`component.unmount()` unmounts removes the component and its connected DOM element. The unmounted component can be re-rendered with `component.mount()`.

### Updates




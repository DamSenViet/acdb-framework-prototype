
// JS hoisting for better code organization
ExtendedComponent.prototype = Object.create(MyComponent.prototype);
ExtendedComponent.prototype.constructor = ExtendedComponent;

function ExtendedComponent(first, last) {
  MyComponent.call(this, first, last);
}


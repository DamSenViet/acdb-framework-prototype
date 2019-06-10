
const body = document.body;
const somewhereElse = document.querySelector(".somewhere-else");

const instance = new MyComponent("Viet", "Tran");

somewhereElse.appendChild(instance.mount());

// last mount is removed b/c no copies allowed by DOM
// could add copy tracking, but out of scope
body.appendChild(instance.mount());

// unmount the last valid mounted instance
// instance.unmount();

const anotherInstance = new MyComponent("Andy", "Tran");
// mount on an existing dom element with template structure
anotherInstance.mountOn(document.querySelector(".static-my-component"));


const outer = new OuterComponent();
body.appendChild(outer.mount());


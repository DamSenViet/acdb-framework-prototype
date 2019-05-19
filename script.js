

let test = new MyComponent("Viet", "Tran");
// console.log(test.render());
// console.log(test.templateId) // should not have it, belongs to class

let body = document.querySelector("body");
body.appendChild(test.render());
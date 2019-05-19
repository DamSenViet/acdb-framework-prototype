
function Component(templateId) {
  // assign static variable
  this.constructor.templateId = templateId;
}

Component.prototype.fill = function (node) {
  return node;
}

Component.prototype.render = function () {
  let template = document.querySelector(`#${this.constructor.templateId}`);
  let node = document.importNode(template.content, true); // copy
  return this.fill(node);
}

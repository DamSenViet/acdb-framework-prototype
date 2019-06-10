
function Component() {
  // this._instanceCopies = new Set();
  this.containerEl = null;
};

Component.prototype.fill = function () {};

Component.prototype.mount = function () {
  if (!("templateId" in this.constructor)) {
    throw new MissingTemplateIdError();
  }

  // prevent stray copies
  if (this.containerEl)
    return this.containerEl;

  const { templateId } = this.constructor; // expose property as variable
  const templateEl = document.querySelector(`template#${templateId}`);
  const node = document.importNode(templateEl.content, true);
  const possibleContainers = node.children;

  if (possibleContainers.length !== 1)
    throw new UnknownContainerError("");

  this.containerEl = possibleContainers[0];
  this.fill();
  return this.containerEl;
};

Component.prototype.mountOn = function (containerEl) {
  this.containerEl = containerEl;
  this.fill();
};

Component.prototype.unmount = function () {
  this.containerEl.remove();
};

Component.prototype.umountOn = function() {
  // figure something out
};

function MissingTemplateIdError() {
  let error = Error.apply(this, arguments);
  error.name = this.constructor.name;
  return error;
};

function UnknownContainerError() {
  let error = Error.apply(this, arguments);
  error.name = this.constructor.name;
  return error;
};



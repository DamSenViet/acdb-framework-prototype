
InnerComponent.templateId = "inner-component";
InnerComponent.prototype = Object.create(Component.prototype);
InnerComponent.prototype.constructor = InnerComponent;

function InnerComponent() {};

InnerComponent.prototype.fill = function () {};

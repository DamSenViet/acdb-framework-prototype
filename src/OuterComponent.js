
OuterComponent.templateId = "outer-component";
OuterComponent.prototype = Object.create(Component.prototype);
OuterComponent.prototype.constructor = OuterComponent;


function OuterComponent() {};

OuterComponent.prototype.fill = function () {
  // manual sub component connection
  const { containerEl } = this; // expose property as variable
  containerEl.appendChild(new InnerComponent().mount());
};



function App() {

};

App.prototype.mount = function() {
  // mount child components here
  this.myComponent = new myComponent();
  this.myComponent.mountOn(".static-my-component");
};


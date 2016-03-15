function StaffController(){
  this.name = "judy";
  this.email = "judy@learn.co";
  this.phone = "800-700-6000";
}

angular
  .module('app')
  .controller('StaffController', StaffController);
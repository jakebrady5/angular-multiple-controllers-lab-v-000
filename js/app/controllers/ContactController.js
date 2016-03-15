function ContactController(){
  this.name = "jake";
  this.email = "jake@learn.co";
  this.phone = "867-5309";

  var vm = this;
  this.changeName = function(){
    vm.name = "chris";
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController);
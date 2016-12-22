function ContactController() {

  var vm = this;

  vm.list = {
    contacts: [
        {
            name: 'Bob',
            phone: '0123458690'
        },
        {
            name: 'Tim',
            phone: '3934203242'
        },
        {
            name: 'Ross',
            phone: '0684059433'
        }
      ]
    }

    this.addContact = function () {
        vm.list.contacts.push({
            name: vm.currentContact.name,
            phone: vm.currentContact.phone
        });
    }
}

angular
    .module('app')
    .controller('ContactController', ContactController);

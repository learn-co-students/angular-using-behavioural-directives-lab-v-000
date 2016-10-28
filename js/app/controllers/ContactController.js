function ContactController() {
    var vm = this;

    vm.contacts = [{
        name: 'Bob',
        phone: '0123458690'
    },{
        name: 'Tim',
        phone: '3934203242'
    },{
        name: 'Ross',
        phone: '0684059433'
    }];

    vm.addContact = function () {
        vm.contacts.push({
            name: vm.name,
            phone: vm.phone
        });
    }
}

angular
    .module('app')
    .controller('ContactController', ContactController);

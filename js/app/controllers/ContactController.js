function ContactController() {
    var ctrl = this;
    ctrl.contacts = [{
        name: 'Bob',
        phone: '0123458690'
    },{
        name: 'Tim',
        phone: '3934203242'
    },{
        name: 'Ross',
        phone: '0684059433'
    }];

    ctrl.addContact = function () {
        ctrl.contacts.push({
            name: ctrl.name,
            phone: ctrl.phone
        });
    }
}

angular
    .module('app')
    .controller('ContactController', ContactController);

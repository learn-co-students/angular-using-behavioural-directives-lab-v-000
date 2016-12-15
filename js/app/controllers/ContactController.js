function ContactController() {
    this.tempContact = {};

    this.contacts = [{
        name: 'Bob',
        phone: '0123458690'
    },{
        name: 'Tim',
        phone: '3934203242'
    },{
        name: 'Ross',
        phone: '0684059433'
    }];

    this.reset = function() {
      this.tempContact = {}
    }

    this.addContact = function () {
        this.contacts.push(this.tempContact);
        this.reset();
    }
}

angular
    .module('app')
    .controller('ContactController', ContactController);

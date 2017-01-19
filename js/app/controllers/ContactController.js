function ContactController() {
    this.newContact = {};

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

    this.addContact = function() {
        this.contacts.push(this.newContact);
        this.reset();
    }

    this.reset = function() {
        this.newContact = {};
    }
}

angular
    .module('app')
    .controller('ContactController', ContactController);
function ContactController() {

    this.name = '';
    this.phone = '';

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

    this.addContact = function () {
        this.contacts.push({
            name: this.name,
            phone: this.phone
        });
        this.name = '';
        this.phone = '';
    }
}

angular
    .module('app')
    .controller('ContactController', ContactController);

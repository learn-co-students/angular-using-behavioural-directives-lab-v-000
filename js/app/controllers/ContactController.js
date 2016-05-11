function ContactController() {
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
            name: this.newContactName,
            phone: this.newContactPhone
        });

        this.newContactName =  "", this.newContactPhone = "";
    }
}

angular
    .module('app')
    .controller('ContactController', ContactController);

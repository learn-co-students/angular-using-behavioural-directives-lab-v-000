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

    //create new variables to get new contact name/phone
    this.newName = "Type new name...";
    this.newPhone = "Type new phone...";

    this.addContact = function () {
        this.contacts.push({
            //set values to property values above
            name: this.newName,
            phone: this.newPhone
        });
    }
}

angular
    .module('app')
    .controller('ContactController', ContactController);

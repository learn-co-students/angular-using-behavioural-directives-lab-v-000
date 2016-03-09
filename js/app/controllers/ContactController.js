function ContactController() {
    this.contacts = [{
        name: 'Bob',
        phone: '0123458690',
        hobby: '',
        favoriteFood: '',
        nickname: ''
    },{
        name: 'Tim',
        phone: '3934203242',
        hobby: '',
        favoriteFood: '',
        nickname: ''
    },{
        name: 'Ross',
        phone: '0684059433',
        hobby: '',
        favoriteFood: '',
        nickname: ''
    }];

    this.addContact = function () {
        this.contacts.push({
            name: 'New Contact',
            phone: 'Phone Number'
        });
    }
}

angular
    .module('app')
    .controller('ContactController', ContactController);

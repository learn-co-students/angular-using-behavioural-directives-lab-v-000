describe('ContactController', function() {
	beforeEach(module('app'));

	var $controller;

	beforeEach(inject(function(_$controller_) {
		$controller = _$controller_;
	}));

	it('has a name and phone property', function() {
		var $scope = {}

		var controller = $controller('ContactController', { $scope: $scope });

		expect(controller.contacts).toEqual([{
        name: 'Bob',
        phone: '0123458690'
    },{
        name: 'Tim',
        phone: '3934203242'
    },{
        name: 'Ross',
        phone: '0684059433'
    }]);
	});

});

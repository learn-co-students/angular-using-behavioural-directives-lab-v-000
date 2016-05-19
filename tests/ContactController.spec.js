describe('ContactController', function () {
  var $controller;

  beforeEach(module('app'));

  beforeEach(inject(function (_$controller_) {
    $controller = _$controller_;
  }));

  it('should display contact names', function () {
    var $scope = {};

    var controller = $controller('ContactController as vm', { $scope: $scope });

    // var originalCount = controller.votes;
    var contactsCount = controller.contacts.length

    expect($scope.li).toEq(contactsCount);
  });

//   it('should decrement the vote count', function () {
//     var $scope = {};

//     var controller = $controller('VoteController as vm', { $scope: $scope });

//     var originalCount = controller.votes;

//     controller.decrementVotes();

//     expect(controller.votes).toBe(originalCount - 1);
//   });
// });

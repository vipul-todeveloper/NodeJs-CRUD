app.controller("userCtrl",['$scope', '$location', '$routeParams', 'User',
    function($scope, $location, $routeParams, User){
        $scope.user = {
            user_id : '',
            name:'',
            email:'',
            password:''
        };

        $scope.find = function() {
            User.query(function(users) {
                $scope.users = users;
            });
        };

        $scope.find();

        $scope.create = function(newUser) {
            var user = new User(newUser);
            user.$save(function(response) {
                $location.path('/');
             });
        };

        $scope.findOne = function() {
            if($routeParams.userId)
            {
                User.get({
                    userId: $routeParams.userId
                }, function(user) {
                    $scope.user = user;
                });
            }
        };

        $scope.update = function(newUser) {
            var user = new User(newUser);
            user.$update(function(response) {
                $location.path('/');
            });
        };

        $scope.remove = function(id) {
            var isDelete = confirm('Would like to delete this user?');
            if(isDelete){
                User.delete({ userId: id });
                $scope.users = User.query();
            }
        };

}]);
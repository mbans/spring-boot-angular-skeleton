//define your dependancies for your controller
helloWorldApp.controller('HelloWorldController', ['$scope', '$http',

        //Inject your dependancies into your controller function
        //These are now in scope for use in your cntroller
    	 function($scope, $http) {

           //your model
           $scope.greetingMessage = "Set me please";

            $scope.getGreeting = function () {

                $http({
                    url: HELLO_WORLD_BASE_URL + '/greeting',
                            method: 'GET',
                    }).then(function successCallback(response) {

                        $scope.greetingMessage=response.data.message;

                    }, function errorCallback(response) {
                            $scope.greetingMessage="Error! Something went wrong :(";
                    });
            }

            $scope.clear = function() {
                $scope.greetingMessage = 'Cleared :)';
                console.log("cleared.")

            }

        }
]);

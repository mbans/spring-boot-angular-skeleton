//define your dependancies for your controller

helloWorldApp.controller('HelloWorldController', ['$scope', '$http', '$cookies', '$window',
    //Inject your dependancies into your controller function. These are now in scope for use in your cntroller
    function($scope, $http, $cookies, $window) {

       //your model
       $scope.greetingMessage = "Set me please1";
       $scope.cookieValue = "Cookie Value";

            $scope.WriteCookie = function () {
//                $cookies.put("Name", $scope.Name);
                 localStorage.setItem("Name", $scope.Name);
            };
            $scope.ReadCookie = function () {
                var val = localStorage.getItem('Name');
//                var val = $cookies.get('Name');
                $window.alert(val);
            };
            $scope.RemoveCookie = function () {
//                $cookies.remove("n Name");
                localStorage.removeItem("Name");
            };





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

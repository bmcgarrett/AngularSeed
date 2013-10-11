'use strict';

/* Controllers */


function GenericViewCtrl($scope) {
}
GenericViewCtrl.$inject = ['$scope'];


function ContactViewCtrl($scope, $http) {

    $scope.lastForm = {};

    $scope.sendForm = function(form) {
        $scope.lastForm = angular.copy(form);
        $http({
            method: 'POST',
            url: "/backend/email.php",
            data: {
                'contactname':$scope.form.name,
                'weburl':$scope.form.website,
                'email':$scope.form.email,
                'app':$scope.form.project,
                'subject':$scope.form.subject,
                'message':$scope.form.message
            },
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function(data, status, headers, config) {
                $scope.resultData = data;
                alert("Message sent successfully. We'll get in touch with you soon.");

            }).error(function(data, status, headers, config) {
                $scope.resultData = data;
                alert("Sending message failed.");
            });
    }

    $scope.resetForm = function() {
        $scope.form = angular.copy($scope.lastForm);
    }

}

ContactViewCtrl.$inject = ['$scope', '$http'];

function BootstrapViewCtrl($scope){
    $scope.UserInfo = {
        name: "Brendan",
        phone: "5712058770",
        active: false
    };

    $scope.EmployeeNames = [{
        employeeName:"Brendan",
        employeePhone: 5712058770
    },
    {
        employeeName:"Megan",
        employeePhone: 5712055453
    },
    {
        employeeName:"Lady",
        employeePhone: 5712058343
    }];

    $scope.ToggleUserInfoActive = function(UserInfo){
        UserInfo.active = true;
    }
}




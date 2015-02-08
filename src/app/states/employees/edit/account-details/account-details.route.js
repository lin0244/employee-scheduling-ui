'use strict';

function employeesAccountDetailsRoute($stateProvider) {

    return $stateProvider
        .state('employees.edit.account-details', {
            url: '/account-details',
            views: {
                'modal@': {
                    templateUrl: 'app/states/employees/edit/account-details/account-details.html'
                }
            }
        });
}
employeesAccountDetailsRoute.$inject = ['$stateProvider'];

export default employeesAccountDetailsRoute;

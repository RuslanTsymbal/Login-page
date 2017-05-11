'use strict';

import angular from 'angular';

const module = 'factorySaveUser';

angular.module(module, [])
    .factory("factorySaveUser", function () {

        let user = {};

        user.give = (login, password) => {
            let dataUser = {
                "login": login,
                "password": password
            };
            user.saveLS(dataUser, "user");
        };

        user.saveLS = (data, key) => {
            localStorage[key] = angular.toJson(data);
        };

        user.getUser = () => {
            let result = JSON.parse(localStorage.getItem("user"));
            return result;
        };

        return user;
    });

export default module;

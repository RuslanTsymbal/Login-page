'use strict';

import angular from 'angular';
import translate from 'angular-translate';

const module = 'headerCtrl';

//Factories
import factorySaveUser from './factorySaveUser.js';

angular.module(module, [])
    .controller('headerCtrl', function ($scope, $state, factorySaveUser, $translate) {
        $scope.loginUser = "";
        $scope.passwordUser = "";
        $scope.nameUser = "";
        $scope.showForm = true;
        $scope.showButtons = false;
        let languageRus = false;

        if (localStorage.getItem("user")) {
            $scope.showForm = false;
            $scope.showButtons = true;
            let dataUser = factorySaveUser.getUser();
            $scope.nameUser = dataUser.login;
        }

        $scope.getData = (login, password) => {
            if (login && password) {
                factorySaveUser.give(login, password);
                $scope.loginUser = "";
                $scope.passwordUser = "";
                $scope.nameUser = login;
                $scope.show();
            }
        };

        $scope.show = () => {
            $scope.showForm = false;
            $scope.showButtons = true;
            $state.go("page-second");
        };

        $scope.exit = () => {
            localStorage.clear();
            $state.go("index");
        };

        $scope.changeLanguage = function (en, ru) {
            if (!languageRus) {
                $translate.use(ru);
                languageRus = true;
            } else {
                $translate.use(en);
                languageRus = false;
            }
        };
    });

export default module;

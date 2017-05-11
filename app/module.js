'use strict';

import angular from 'angular';

//-----modules-----

import appRouter from "./routes.js";
import angularUiRouter from 'angular-ui-router';
import translate from 'angular-translate';

//Controllers
import headerCtrl from './shared/header/headerCtrl.js';
import secondPageCtrl from './components/secondPage/secondPageCtrl.js';
import firstPageCtrl from './components/firstPage/firstPageCtrl.js';

//Factories
import factorySaveUser from './shared/header/factorySaveUser.js';

const modulename = 'myApp';

angular.module(modulename, [
        angularUiRouter,
        headerCtrl,
        firstPageCtrl,
        secondPageCtrl,
        factorySaveUser,
        translate
    ])
    .config(appRouter)
    .config(function ($translateProvider) {
        $translateProvider.translations('en', {
            NAME_USER: 'Name user :',
            BUTTON_LANG: 'Change language',
            LOGO_UT: 'Logo ut',
            SIGN_IN: 'Sign in',
            TEXT_PAGE_1: 'Please enter your name and password.',
            TEXT_PAGE_2: 'Welcome!'
        });
        $translateProvider.translations('ru', {
            NAME_USER: 'Имя пользователя :',
            BUTTON_LANG: 'Сменить язык',
            LOGO_UT: "Выход",
            SIGN_IN: "Войти",
            TEXT_PAGE_1: 'Пожалуйста введите ваше имя и пароль.',
            TEXT_PAGE_2: 'Добро пожаловать!'
        });
        $translateProvider.preferredLanguage('en');
    });

export default module;

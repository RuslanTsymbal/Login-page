'use strict';

//Controllers
import headerCtrl from './shared/header/headerCtrl.js';
import pageCtrl from './components/secondPage/secondPageCtrl.js';
import firstPageCtrl from './components/firstPage/firstPageCtrl.js';

import angular from 'angular';

function appRouter($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('index', {
            url: "/",
            views: {
                'header': {
                    templateUrl: './dist/shared/header/header.html',
                    controller: headerCtrl
                },
                'page': {
                    templateUrl: './dist/components/firstPage/firstPage.html',
                    controller: firstPageCtrl
                }
            },
            cache: false
        })

        .state('page-second', {
            url: "/page-second",
            views: {
                'header': {
                    templateUrl: './dist/shared/header/header.html',
                    controller: headerCtrl
                },
                'page': {
                    templateUrl: './dist/components/secondPage/secondPage.html',
                    controller: pageCtrl
                }
            },
            cache: false
        })
}

export default appRouter;

'use strict';

/**
 * @ngdoc overview
 * @name sigSipApp
 * @description
 * # sigSipApp
 *
 * Main module of the application.
 */
angular
  .module('sigSipApp', [
    'sygsyp.config',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'inscriptionController',
    'menuController',
    'questionsController',
    'parametersController',
    'LocalStorageModule',
    'rzModule',
    'parameterService',
    'serviceQuestion',
    'resultController',
    'monospaced.qrcode',
    'interceptorService',
    'uploadSurveyController',
    'serviceUploadSurvey',
    'addCompanyController',
    'resultsConsultantController',
    'lr.upload',
    'consultantsController',
    'entrepriseController',
    'serviceEntreprise',
    'angular.filter',
    'serviceResult',
    'testsCollaborateursController',
    'parametersConsultantController',
    'ngCsv',
    'toastr',
    'chartPDFController',
    'xlsx-model',
    'naif.base64'
  ]).config(function($stateProvider, $urlRouterProvider, $httpProvider){

    $urlRouterProvider.otherwise('/home');

 $stateProvider
  .state('home',{
    url:'/home',
    views :{
        'menu':{
            templateUrl: 'views/menu.html',
            controller: 'MenuCtrl'
        },
        'bodyContent':{
            templateUrl: 'views/about.html',
            controller: 'MenuCtrl'
        }
    }

  })
  .state('inscription',{
    url:'/inscription',
    views :{
        'menu':{
            templateUrl: 'views/menu.html',
            controller: 'MenuCtrl'
        },
        'bodyContent':{
            templateUrl: 'views/inscription.html',
            controller: 'InscriptionCtrl'
        }
    }})
  .state('resultatPdf',{
    url:'/generatePDF',
    views :{
        'menu':{
            templateUrl: 'views/menu.html',
            controller: 'MenuCtrl'
        },
        'bodyContent':{
            templateUrl: 'views/chartPDF.html',
            controller: 'ChartPDFCtrl'
        }
    },
    params: {
       obj: {}
   }
  }).state('connection',{
    url:'/connection',
    views :{
        'menu':{
            templateUrl: 'views/menu.html',
            controller: 'MenuCtrl'
        },
        'bodyContent':{
            templateUrl: 'views/connection.html',
            controller: 'ConnectionCtrl'
        }
    }
  }).state('question',{
    url:'/question',
    views :{
        'menu':{
            templateUrl: 'views/menu.html',
            controller: 'MenuCtrl'
        },
        'bodyContent':{
            templateUrl: 'views/question.html',
            controller: 'QuestionCtrl'
        }
    }
  }).state('visualiseResult',{
    url:'/visualiseResult',
    views :{
        'menu':{
            templateUrl: 'views/menu.html',
            controller: 'MenuCtrl'
        },
        'bodyContent':{
            templateUrl: 'views/result.html',
            controller: 'ResultCtrl'
        }
    }
  }).state('testsCollaborateurs',{
    url:'/testsCollaborateurs',
    views :{
        'menu':{
            templateUrl: 'views/menu.html',
            controller: 'MenuCtrl'
        },
        'bodyContent':{
            templateUrl: 'views/testsCollaborateurs.html',
            controller: 'TestsCollaborateursCtrl'
        }
    }
  }).state('entreprises',{
    url:'/entreprises',
    views :{
        'menu':{
            templateUrl: 'views/menu.html',
            controller: 'MenuCtrl'
        },
        'bodyContent':{
            templateUrl: 'views/entreprises.html',
            controller: 'EntreprisesCtrl'
        }
    }
  }).state('createEntreprise',{
    url:'/createEntreprise',
    views :{
        'menu':{
            templateUrl: 'views/menu.html',
            controller: 'MenuCtrl'
        },
        'bodyContent':{
            templateUrl: 'views/addCompany.html',
            controller: 'AddCompanyCtrl'
        }
    }
  }).state('personnalisationPDF',{
    url:'/personnalisationPDF',
    views :{
        'menu':{
            templateUrl: 'views/menu.html',
            controller: 'MenuCtrl'
        },
        'bodyContent':{
            templateUrl: 'views/parametersConsultant.html',
            controller: 'ParametersConsultantCtrl'
        }
    }
  }).state('consultants',{
    url:'/consultants',
    views :{
        'menu':{
            templateUrl: 'views/menu.html',
            controller: 'MenuCtrl'
        },
        'bodyContent':{
            templateUrl: 'views/consultants.html',
            controller: 'ConsultantsCtrl'
        }
    }
  }).state('questionnaires',{
    url:'/questionnaires',
    views :{
        'menu':{
            templateUrl: 'views/menu.html',
            controller: 'MenuCtrl'
        },
        'bodyContent':{
            templateUrl: 'views/uploadSurvey.html',
            controller: 'UploadSurveyCtrl'
        }
    }
  }).state('parametres',{
    url:'/parametres',
    views :{
        'menu':{
            templateUrl: 'views/menu.html',
            controller: 'MenuCtrl'
        },
        'bodyContent':{
            templateUrl: 'views/parameters.html',
            controller: 'ParameterCtrl'
        }
    }
  }).state('reinitMdp',{
    url:'/reinitMdp',
    views :{
        'menu':{
            templateUrl: 'views/menu.html',
            controller: 'MenuCtrl'
        },
        'bodyContent':{
            templateUrl: 'views/reinitMdp.html',
            controller: 'ConnectionCtrl'
        }
    }
  }).state('popUpReinitMdp',{
    url:'/popUpReinitMdp',
    views :{
        'menu':{
            templateUrl: 'views/menu.html',
            controller: 'MenuCtrl'
        },
        'bodyContent':{
            templateUrl: 'views/popUpReinitMdp.html',
            controller: 'ConnectionCtrl'
        }
    },
    params: {
       obj: {}
   }
  }).state('mentions',{
    url:'/mentions',
    templateUrl: 'views/mentions.html',
    views :{
        'menu':{
            templateUrl: 'views/menu.html',
            controller: 'MenuCtrl'
        },
        'bodyContent':{
            templateUrl: 'views/mentions.html',
        }
    }
  });
  $httpProvider.interceptors.push('APIInterceptor');

});

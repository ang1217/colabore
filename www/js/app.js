// Ionic Starter App

// angular.module é um lugar global para criar, registrar e recuperar Angular modules
// 'starter' é o nome deste exemplo módulo angular (também definido em um <body> atributo no index.html)
// o segundo parâmetro é uma matriz de 'requires'
// 'starter.services' é encontrado em services.js
// 'starter.controllers' é encontrado em controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'jett.ionic.filter.bar', 'ng-mfb'])

.run(function($ionicPlatform) {
 
  $ionicPlatform.ready(function() {
   
    if( ionic.Platform.isAndroid()){

  
    }else{
  //   alert("no android");
   }
   }); 
})

.config(function($stateProvider, $urlRouterProvider, $ionicFilterBarConfigProvider) {

  // Ionic usa AngularUI Router que utiliza o conceito de states (estados)
  // Leia mais aqui: https://github.com/angular-ui/ui-router
  // Configurar os diversos estados que o aplicativo pode estar.
  // Cada controlador de cada estado pode ser encontrado em controllers.js
  $stateProvider

  // configurar um estado abstrato para as tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Cada guia tem sua própria pilha de histórico de navegação:

  .state('tab.fiscalizar', {
      cache:false,
    url: '/fiscalizar',
    views: {
      'tab-fiscalizar': {
        templateUrl: 'templates/tab-fiscalizar.html',
        controller: 'FiscalizarCtrl'
      }
    }
  })
  .state('tab.fiscalizar-detalhe', {
      cache:false,
    url: '/fiscalizar/:publicacaoId',
    views: {
      'tab-fiscalizar': {
        templateUrl: 'templates/fiscalizar-detalhe.html',
        controller: 'PublicacaoDetailCtrl'
      }
    }
  })

  .state('tab.publicar', {
      cache:false,
      url: '/publicar',
      views: {
        'tab-publicar': {
          templateUrl: 'templates/tab-publicar.html',
          controller: 'PublicarCtrl'
        }
      }
    })

  .state('tab.atividade', {
      cache:false,
    url: '/atividade',
    views: {
      'tab-atividade': {
        templateUrl: 'templates/tab-atividade.html',
        controller: 'AtividadeCtrl'
      }
    }
  })
 .state('login', {
    url: "/login",
        templateUrl: "templates/login.html",
         controller: 'LoginCtrl'
      
 });

  // se nenhum dos estados acima são correspondidos, use isso como o fallback
  $urlRouterProvider.otherwise('/login');

});

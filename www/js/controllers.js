
angular.module('starter.controllers', [])
.controller('LoginCtrl', function($scope,$state,$ionicPopup) {
  $scope.fbLogin = function(){
    $state.go("tab.fiscalizar");
  }
  $scope.googleLogin = function(){
    $state.go("tab.fiscalizar");
  }
  $scope.LoginAgrNao = function(){
      var popupAgrNo = $ionicPopup.show({
          template: '<h5>Nesta opção você não poderá publicar nem receber notificações.<b> Deseja continuar?</b> </h5>',
          title: '<b>Atenção!</b>',
          scope: $scope,
          buttons: [             
            {
              text: '<b>Voltar</b>',
              type: 'button button-clear button-assertive',
              onTap: function(e) {        
              }
            },
            {
              text: '<b>Ok</b>',
              type: 'button button-clear button-assertive',
              onTap: function(e) {   
                $state.go("tab.fiscalizar");
              }
            }
          ]
       });
  }
})
.controller('SearchButtonsCtrl', function($scope,$ionicFilterBar,Exchanges) {
  $scope.$on('handlebroadcast',function(){
    $scope.hideSearch=Exchanges.message;
  });
  /*$scope.showFilterBar = function () {
    filterBarInstance = $ionicFilterBar.show({
      items: $scope.items,
      update: function (filteredItems, filterText) {
       /* $scope.items = filteredItems;
        if (filterText) {
          $scope.$broadcast('broadcast',$scope.items);
        }
      }
    });
  };*/

  })
.controller('PopoverButtonsCtrl', function($scope,$ionicPopover) {
   $ionicPopover.fromTemplateUrl('templates/popover.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.popover = popover;
  });

  document.body.classList.add('platform-android');
 
})
.controller('PublicarCtrl', function($scope,Transicao,Exchanges) {
  Exchanges.prepForBroadcast(true);
  $scope.goForward = function () {
    Transicao.goForward();
  }
  $scope.goBack = function () {
    Transicao.goBack();     
  }
})

.controller('FiscalizarCtrl', function($scope, Publicacoes,Transicao,Exchanges, $timeout) { 
  Exchanges.prepForBroadcast(false);
   $scope.doRefresh = function() {
    $timeout(function () {
     $scope.$broadcast('scroll.refreshComplete');
    },3000);
     
  }
   $scope.goForward = function () {
    Transicao.goForward();
  }
  $scope.goBack = function () {
    Transicao.goBack();     
  }
  $scope.publicacoes = Publicacoes.all();
  $scope.item = { qtd: 0 };
  $scope.updateApoio = function(id) {
    // $scope.item.qtd= 20;
    var x =Publicacoes.setApoio(id);
    $scope.publicacao = { apoio:  x };
  };
})

.controller('PublicacaoDetailCtrl', function($scope, $stateParams, Publicacoes,Exchanges, Meses) {
  $scope.publicacao = Publicacoes.get($stateParams.publicacaoId);
  Exchanges.prepForBroadcast(false);
  $scope.addComent = function(){
    var now = new Date;
    var coment =  document.getElementById("comentario").value;
    var dadosComentario ={
      id: 0,
      nome:"Thiago Bezerra",
      data: now.getDate()+" de "+Meses.get(now.getMonth())+" de "+ now.getFullYear(),
      face:'img/thiago.jpg',
      comentario:coment
    };
    Publicacoes.addComent($stateParams.publicacaoId,dadosComentario); 
    document.getElementById("comentario").value="";
  }
  $scope.cleanComent=function(){
    document.getElementById("comentario").value="";
  }
})

.controller('AtividadeCtrl', function($scope,Transicao,Publicacoes,Exchanges) {
  Exchanges.prepForBroadcast(false);
   $scope.goForward = function () {
    Transicao.goForward();
  }
  $scope.goBack = function () {
    Transicao.goBack();     
  }
  $scope.minhasPublicacoes = Publicacoes.getMinhasPublicacoes("Thiago Bezerra"); 
});
angular.module('starter.services', [])

/*.factory('Transicao', function() {
 return {
    forward: function($ionicTabsDelegate) {
      var selected = $ionicTabsDelegate.selectedIndex();
        if (selected != -1) {
          $ionicTabsDelegate.select(selected + 1);
        }
    return null;
    },
    back: function($ionicTabsDelegate) {
        var selected = $ionicTabsDelegate.selectedIndex();
        if (selected != -1 && selected != 0) {
            $ionicTabsDelegate.select(selected - 1);
        }
    return null;
    }
  };
 
})

*/
.factory('Exchanges', function($rootScope) {
var sharedService={};
sharedService.message=false;
sharedService.prepForBroadcast= function(msg){
  this.message = msg;
  this.broadcastItem();
}
sharedService.broadcastItem = function(){
   // alert("test");
  $rootScope.$broadcast('handlebroadcast');
}
return sharedService;
})
.service('Transicao', function($ionicTabsDelegate){  
    this.goForward = function(){
         var selected = $ionicTabsDelegate.selectedIndex();
        if (selected != -1) {
          $ionicTabsDelegate.select(selected + 1);
        }
        return true;
    };     
    this.goBack = function(){
        var selected = $ionicTabsDelegate.selectedIndex();
        if (selected != -1 && selected != 0) {
            $ionicTabsDelegate.select(selected - 1);
        }
         return true;
    };        
})
.factory('Meses', function() {
 
  var meses = ["janeiro","fevereiro","março","abril","maio","junho",
  "julho","agosto","setembro","outubro","novembro","dezembro"]; 

  return{
     get: function(numMes) {
          return meses[numMes];
     }
  }

})
.factory('Publicacoes', function() {
  // Pode usar um recurso aqui que retorna uma array JSON

  // Alguns dados de testes falso
  var publicacoes = [{
    id: 0,
    nome: 'Ben Sparrow',
    data: "3 de maio de 2016",
    descricao: 'You on your way?',
    face: 'img/ben.png',
    foto: 'img/photo/12917836_1011652265550934_765238525_n.jpg',
    apoio:0,
    resolvido:false,
    nComentarios:0,
    comentarios: []
  }, {
    id: 1,
    nome: 'Max Lynx',
    data: "1 de  maio de 2016",
    descricao: 'Hey, it\'s me',
    face: 'img/max.png',
    foto: 'img/photo/12959915_1025189597548708_2087513361_n.jpg',
    apoio:0,
    resolvido:false,
    nComentarios:3,
    comentarios:  [{id: 1,
                   nome:"Thiago Bezerra",
                   data:"10 de fevereiro de 2016",
                   face:'img/thiago.jpg',
                   comentario:"testes"
                 },{
                   id:2,
                   nome:"Perry Governor",
                   data:"10 de fevereiro de 2016",
                   face:'img/perry.png',
                   comentario:"testes"
                 },{
                   id:3,
                   nome:"Perry Governor",
                   data:"10 de fevereiro de 2016",
                   face:'img/perry.png',
                   comentario:"testes"}
                   ]
  }, {
    id: 2,
    nome: 'Adam Bradleyson',
    data: "21 de abril de 2016",
    descricao: 'I should buy a boat',
    face: 'img/adam.jpg',
    foto: 'img/photo/12959949_697888996981196_1152474910_n.jpg',
    apoio:0,
    resolvido:true,
    nComentarios:0,
    comentarios:  []
  }, {
    id: 3,
    nome: 'Perry Governor',
    data: "25 de março de 2016",
    descricao: 'Look at my mukluks!',
    face: 'img/perry.png',
    foto: 'img/photo/12959953_471822229694124_1099346753_n.jpg',
    apoio:0,
    resolvido:true,
    nComentarios:3,
    comentarios: [{id: 1,
                   nome:"Thiago Bezerra",
                   data:"10 de fevereiro de 2016",
                   face:'img/thiago.jpg',
                   comentario:"testes"
                 },{
                   id:2,
                   nome:"Perry Governor",
                   data:"10 de fevereiro de 2016",
                   face:'img/perry.png',
                   comentario:"testes"
                 },{
                   id:3,
                   nome:"Perry Governor",
                   data:"10 de fevereiro de 2016",
                   face:'img/perry.png',
                   comentario:"testes"}
                   ]
  }, {
    id: 4,
    nome: 'Thiago Bezerra',
    data: '16 de fevereiro de 2016',
    descricao: 'I love coffee.',
    face: 'img/thiago.jpg',
    foto: 'img/photo/13109037_1606067166351284_793594177_n.jpg',
    apoio:0,
    resolvido:true,
    nComentarios:3,
    comentarios:  [{id: 1,
                   nome:"Thiago Bezerra",
                   data:"10 de fevereiro de 2016",
                   face:'img/thiago.jpg',
                   comentario:"testes"
                 },{
                   id:2,
                   nome:"Perry Governor",
                   data:"10 de fevereiro de 2016",
                   face:'img/perry.png',
                   comentario:"testes"
                 },{
                   id:3,
                   nome:"Perry Governor",
                   data:"10 de fevereiro de 2016",
                   face:'img/perry.png',
                   comentario:"testes"}
                   ]
  }, {
    id: 5,
    nome: 'Mike Harrington',
    data: "10 de fevereiro de 2016",
    descricao: 'This is wicked good ice cream.',
    face: 'img/mike.png',
    foto: 'img/photo/12976678_1114384848619243_270315244_n.jpg',
    apoio:0,
    resolvido:true,
    nComentarios:3,
    comentarios: [{id: 1,
                   nome:"Thiago Bezerra",
                   data:"10 de fevereiro de 2016",
                   face:'img/thiago.jpg',
                   comentario:"testes"
                 },{
                   id:2,
                   nome:"Perry Governor",
                   data:"10 de fevereiro de 2016",
                   face:'img/perry.png',
                   comentario:"testes"
                 },{
                   id:3,
                   nome:"Perry Governor",
                   data:"10 de fevereiro de 2016",
                   face:'img/perry.png',
                   comentario:"testes"}
                   ]
  },{
    id: 4,
    nome: 'Thiago Bezerra',
    data: '16 de fevereiro de 2016',
    descricao: 'I love coffee.',
    face: 'img/thiago.jpg',
    foto: 'img/photo/13109037_1606067166351284_793594177_n.jpg',
    apoio:0,
    resolvido:false,
    nComentarios:0,
    comentarios: []
  }
  ];

  return {
    all: function() {
      return publicacoes;
    },
    get: function(publicacaoId) {
      for (var i = 0; i < publicacoes.length; i++) {
        if (publicacoes[i].id === parseInt(publicacaoId)) {
          return publicacoes[i];
        }
      }
      return null;
    },
    setApoio: function(publicacaoId) {
      for (var i = 0; i < publicacoes.length; i++) {
        var obj = publicacoes[i];
        if (obj.id == publicacaoId) {
            obj.apoio = obj.apoio+1;
            return obj.apoio;
        }
      }
      return null;
    },
     setNComentarios: function(publicacaoId) {
      for (var i = 0; i < publicacoes.length; i++) {
        var obj = publicacoes[i];
        if (obj.id == publicacaoId) {
            obj.nComentarios = obj.nComentarios+1;
            return obj.nComentarios;
        }
      }
      return null;
    },
     addComent: function(publicacaoId,dadosComentario) {
    //  dadosComentario.id =publicacoes[publicacaoId].comentarios.length;
      for (var i = 0; i < publicacoes.length; i++) {
        var obj = publicacoes[i];
        if (obj.id == publicacaoId) {
            obj.comentarios.push( dadosComentario);
            obj.nComentarios = obj.nComentarios+1;
            return obj.nComentarios;
        }
      }
      return null;
    },
    getMinhasPublicacoes: function(nome) {
        var my = [];
        for (var i = 0; i < publicacoes.length; i++) {
        var obj = publicacoes[i];
        if (obj.nome == nome) {
           my.push(obj);
        }
      }
      return my;
    }

  };
});

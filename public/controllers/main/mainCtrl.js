(function(){
	"use strict";
	angular.module("booksApp")
		.controller("MainCtrl",MainCtrl);
	function MainCtrl($state){
      var me = this;
      me.active=1;
      me.active2=0;
      me.slide=function(vista){
      	me.active=vista;
      }
      me.vista2=function(vista2){
         me.active2=vista2;
      }
      me.comentarios=[{
        coment:'hola'
      },
      {
        coment:'hola'
      },
      {
        coment:'hola'
      }
      ];
      me.responder= function(hola){
        var coment={coment:hola};
        me.comentarios.unshift(coment);
      };
      me.state=true;
      me.editar = function(){
        me.state=!me.state;
      }
      me.buscar = function(){
        console.log("hola");
      }


  }
}());
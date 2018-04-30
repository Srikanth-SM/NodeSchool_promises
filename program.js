'use strict';
require('es6-promise');
//      setTimeout(()=>{
//	console.log("TIMED OUT!");
//},300);

let     promise = new Promise(function(fulfill,reject){
	setTimeout(function(){
	fulfill('FULFILLED!');
},300);
}).then(result=>console.log(result));

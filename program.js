'use strict';
require('es6-promise');
//      setTimeout(()=>{
//	console.log("TIMED OUT!");
//},300);

/*let     promise = new Promise(function(fulfill,reject){
	setTimeout(function(){
	reject(new Error('REJECTED!'));
},300);
})
.then(result=>console.log(result),reject);


function reject(error){
	console.log(error.message);
}*/

//To reject or not to reject
/*let promise = new Promise(function(resolve,reject){
	resolve('I FIRED');
	reject(new Error('I AM NOT FIRED'));
});

function OnReject(error){
        console.log(err.message);
}

promise.then(console.log,OnReject);
*/

//Always asynchronous

/*let promise = new Promise(function(resolve,reject){
	resolve('PROMISE VALUE');
})

function successHandler(success){
	console.log(success);
}

function failureHandler(error){
	console.log(error.message);
}
*/

//shortcuts


let promise = Promise.resolve('I FIRED');
promise.catch((err)=>{console.log("there is an error");console.log(err.message);});

promise.then(successHandler,failureHandler);

console.log('MAIN PROGRAM');

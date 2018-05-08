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

/*
let promise = Promise.resolve('I FIRED');
promise.catch((err)=>{console.log("there is an error");console.log(err.message);});

promise.then(successHandler,failureHandler);

console.log('MAIN PROGRAM');
*/

//Promise after promise

/*
let promise = first()
                .then(firstResult=>{
                return second(firstResult);
})
.then(secondResult=>{
        onFullfilled(secondResult);
});

function onFullfilled(res){
        console.log(res);
}*/

//Values and promises

/*
function attachTitle(title){
	return 'DR. '+title;
}

let promise = Promise.resolve('MANHATTAN');
promise
.then(attachTitle)
.then(console.log);
*/

// Throw an error

/*
function parsePromised(json){
//	console.log(json);
return new Promise(function(resolve,reject){
	try{
	let parsedJSON = JSON.parse(json);
	//console.log('parsed',parsedJSON);
//	resolve(parsedJSON);
	}
	catch(e){
	//console.log('inside catch',e);
	reject(e.message);
	}
}
)}
*/

/*
function parsePromised(json) {
  return new Promise(function (fulfill, reject) {
    try {
      fulfill(JSON.parse(json));
    } catch (e) {
      reject(e);
    }
  });
}

function onReject(error) {
  console.log(error.message);
}

parsePromised(process.argv[2])
.then(null, onReject);
*/
//parsePromised(process.argv[2]).then(console.log,console.log);


//IMPORTANT RULE
/*
function alwaysThrows(){
	throw new Error('OH NOES');
}

function iterate(i){
	console.log(i);
	return i+1;
}

let promise = Promise.resolve(iterate(1));
promise
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)

.then(alwaysThrows)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.catch((e)=>console.log(e.message));
*/



//important revision

function alwaysThrows(){
	throw new Error('OH NOES');
}

function iterate(i){
	console.log(i);
	return i+1;
}

/*
let promise = Promise.resolve(iterate(1));

promise
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)

.then(alwaysThrows)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(null,error);

function error(e){
	console.log(e.message);
}

*/


function all(promise1,promise2){
var counter = 0;



return new Promise(function(resolve,reject){
	var arr=[];
	promise1.then((res)=>{
//		console.log(res);
		counter++;
		arr[0]=res;
//		console.log(arr);
		if(counter>=2){
		resolve(arr);
		}
	});
	promise2.then((res)=>{
		counter++;
//		console.log('p2',res);
		arr[1]=res;
//		console.log(arr);
		if(counter>=2){
			resolve(arr);
		}
	})

});
}



all(getPromise1(),getPromise2())
.then(console.log);
=======
let promise = new Promise(function(fulfill,reject){
	setTimeout(function(){
	fulfill('FULFILLED!');
},300);
}).then(result=>console.log(result));
>>>>>>> 3d33e1c6728351815d694b5ad0b1ffa31d195476

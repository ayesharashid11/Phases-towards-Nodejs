const myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function()
    { myResolve("Hello Node!!"); }, 3000);
  });
  
  myPromise.then(function(value) {
 console.log(value)
  });

//   function resolved(result) {
//     console.log('Resolved');
//   }
  
//   function rejected(result) {
//     console.error(result);
//   }
  
//   Promise.reject(new Error('fail')).then(resolved, rejected);

const promise1 = Promise.resolve(123);

promise1.then((value) => {
  console.log(value);
});
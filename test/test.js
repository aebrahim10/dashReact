var {fruits} = require('./data.js')
var {someNumbers} = require('./data.js')


console.log('fruits: ', fruits)
fruits.push('kiwis')
console.log('fruits: ',...fruits)
var banner=''

function findNamesWithChar(c){
    fruits.forEach(element => {
        if(element.includes(c)){
            console.log(element)
        }  
    });
}
findNamesWithChar('s')
console.log(someNumbers)

var str = someNumbers.reduce(getSumEven)
console.log('str = ',str)


function getSumEven(str, num){
   if (num % 2 == 0 ) 
    {   str = ""+str+num
       
    }
    return str
}

function invokeAfterDelay(callback) {
    setTimeout(callback, 2000); // 2000 milliseconds = 2 second
  }
  function display_message() {
    console.log('Hello!');
  }
  invokeAfterDelay(display_message); // Invokes the sayHello function after a 1-second delay
  function callback_BasedFunction(arg1, arg2, callback) {
    // Perform asynchronous operations
    // Call the callback with the result or error
    setTimeout(() => {
      const result = arg1 + arg2;
      if (result % 2 !== 0) {
        callback(null, result);
      } else {
        callback(new Error('Result is not odd!'), null);
      }
    }, 1000);
  }
  
  function promisifiedFunction(arg1, arg2) {
    return new Promise((resolve, reject) => {
      callback_BasedFunction(arg1, arg2, (error, result) => {
        if (error) {
          reject(error); // Reject the Promise with the error
        } else {
          resolve(result); // Resolve the Promise with the result
        }
      });
    });
  }
  
  // Usage example:
  promisifiedFunction(2, 3)
    .then(result => {
      console.log('Result:', result);
    })
    .catch(error => {
      console.log('Error:', error.message);
    });
  
  promisifiedFunction(2, 4)
    .then(result => {
      console.log('Result:', result);
    })
    .catch(error => {
      console.log('Error:', error.message);
    });
  

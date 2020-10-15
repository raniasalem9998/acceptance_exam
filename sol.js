'use strict'

/*
    write a function named "vowelCount" that takes a string parameter and returns the number of vowel letters in it.
    vowel letters in English are (a, e, i, o, u). the function must check the type of the parameter. if it not a string the function must 		return null.

    example:
	
    vowelCount('hello world!'); // must return 3 (the string has a letter 'e' and two letters 'o');
    vowelCount(34); //must return null since the param is not a string
    vowelCount('34'); // must return 0 since the param is a string but has no vowels

      write your code inside the empty function below:
*/

//Please do not change the function name or params
const str = 5;
function vowelCount(str) {
    //write your code here
    let type = typeof str;
    let count = [];
    let array = ['a', 'e', 'i', 'o', 'u'];

    if (type === "string") {
        for (var i = 0; i < str.length; i++) {

            array.forEach(element => {
                if (str.charAt(i) == element) {
                    count.push(str.charAt(i))
                };
            });
        };
        console.log(count.length)
        return count.length;
    }else {
        console.log('null');
        return "null";
    }
}
vowelCount(str);

//=============================================
/*
    write a function named "pairElements" that takes two arrays and returns a new array containing pairs of 
    elements from both arrays. the 		
    function should concatenate each element from the first array with the element from the second array that
     has the same index and add a 	
    space between them. if the arrays are not of the same size the function must return null.

    example 1:

    const array1 = ['toyota', 'kia', 'ford'];
    const array2 = ['prius', 'niro', 'focus'];
    const result = pairElements(array1, array2); // result should be ['toyota prius', 'kia niro', 'ford focus']
	
    example 2:
	
    const array1 = [1, 2, 3];
    const array2 = [4, 5];
    const result = pairElements(array1, array2); // result must be null

      write your code inside the empty function below:
*/

//Please do not change the function name or params
const array1 = ['toyota', 'kia', 'ford'];
const array2 = ['prius', 'niro', 'focus'];
function pairElements(array1, array2) {
    let array3 = [];
    if (array1.length === array2.length) {
        for (let i in array1) {
            array3.push(array1[i] + ' ' + array2[i])
        }
    }
    //write your code here
    console.log(array3)
    return array3;
}
pairElements(array1, array2);

// ================================================
/*
    write a function named "addToObject" that appends a key and a value to an existing object. 
    the function takes 3 parameters. the first 		
    parameter is the object that we wich to append to.
     the second is the new key. the third is the new value. if the key already exists the value 		
     shall override the existing one.

	examples:

	addName({}, "Brutus", 300); // returns { Brutus: 300 }

	addName({ piano: 500 }, "Brutus", 400); //returns { piano: 500, Brutus: 400 }

	addName({ Brutus: 1000 }, "Brutus", 400); //returns { Brutus: 400 }

 	write your code inside the empty function below:
*/

//Please do not change the function name or params
function addToObject(obj, key, value) {
    //write your code here
   obj[`${key}`] = value;
   console.log(obj);
   return obj;
}
addToObject({Brutus: 1000}, "Brutus", 400);



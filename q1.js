// 1. In your favourite programming language (e.g Java, PHP, C#, JavaScript), write code that will find a duplicate value in an array. Do the same for dictionaries

function findDuplicateValueInArray(inputArray) {

    let sortedArray = inputArray.sort();
    let duplicateValues = [];
    for(let i = 0; i < sortedArray.length - 1; i++) {

        if((sortedArray[i] == sortedArray[i+1]) && duplicateValues.indexOf(sortedArray[i]) == -1) {
            duplicateValues.push(sortedArray[i]);
        }
    }

    return duplicateValues;

}

const arrayDuplicateTestCase1 = [1,2,3,3,3,3,4,4,5,6,7,7,8,8,9,1];
console.log("findDuplicateValueInArray");
console.log(findDuplicateValueInArray(arrayDuplicateTestCase1));

function findDuplicateValueInArrayForDictionaries(inputArray) {

    let hashSet = new Set();
    let duplicateValues = [];
    for(let i =0; i < inputArray.length; i++) {
        if(hashSet.has(inputArray[i]) && duplicateValues.indexOf(inputArray[i]) == -1) {
            duplicateValues.push(inputArray[i]);
        }else {
            hashSet.add(inputArray[i]);
        }
    }
    return duplicateValues;
}

const arrayDuplicateForDictionariesTestCase1 = ["cat", "call", "kite", "call", "mango", "mango", "mango","call", "pen", "cat"];
console.log("findDuplicateValueInArrayForDictionaries");
console.log(findDuplicateValueInArrayForDictionaries(arrayDuplicateForDictionariesTestCase1));
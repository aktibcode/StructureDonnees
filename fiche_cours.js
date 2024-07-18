/**
 * // Tri par insertion //
*/
function insertionSort(array) {
    for (let i = 1; i < array.length; i++) { 
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j=j-1;
        }
        array[j + 1] = key;
    }
    return array;
}

/**
 * // Tri par fusion //
*/

function merge(left, right) {
    let sortedArr = [] //the sorted items will go here

    while (left.length && right.length) {
        // Insert the smallest item into sorteArr
        if (left[0] < right[0]) {
            sortedArr.push(left.shift());
        } else {
            sortedArr.push(right.shift());
            
        }
    }
    //Use spread operators to create a new array, combining the three arrays
    return [...sortedArr, ...left, ...right];

}

merge([1, 4], [2, 3, 9])

/**
 * // Inverser une chaine : Ecrivez une fonction qui prend une chaine en entrée et renvoie la chaine inversée
*/

function reverseString(str) {
    // let reversed = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //     reversed += str[i];
    // }
    return  str.split('').reverse().join('');
}
console.log(reverseString('hello')); // Output: 'olleh'

/**
 * // Calcul factoriel : Ecrivez une function qui calcule la factorielle d'un nombre donnée
*/

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120

/**
 * // Trouver le mot le plus long : Ecrivez une function qui 
 * prend une chaine comme argument et renvoie 
 * la longueur du mot le plus long de la chaine
*/

function findLongesWord(str) {
    let words = str.split(' ');
    let maxLength = 0;
    
    for (let word of words) {
        if (word.length > maxLength) {
            maxLength = word.length;
        }
    }
    return maxLength;
}

console.log(findLongestWord('The quick brown fox jumps over the lazy dog')); // Output: 6


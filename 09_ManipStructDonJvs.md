# Chapitre : MANIPULATION DE LA STRUCTURE DE DONNEES EN JAVASCRIPT (PROBLEME DE JOUETS)


# Problèmes de jouets

En JavaScript, les problèmes jouets désignent de petits défis de codage ou des exercices que les développeurs résolvent à l'aide du langage de programmation JavaScript. Ces problèmes sont conçus pour aider les développeurs à améliorer leurs compétences en résolution de problèmes, leur réflexion algorithmique et leur familiarité avec les fonctionnalités du langage JavaScript. Les problèmes jouets en JavaScript peuvent couvrir un large éventail de sujets, notamment la manipulation de chaînes, la manipulation de tableaux, la manipulation d'objets, la récursivité, les algorithmes de tri, les algorithmes de recherche, etc.

![](https://i.imgur.com/N9O8tmj.jpeg)

1. **Inverser une chaîne** : écrivez une fonction qui prend une chaîne en entrée et renvoie la chaîne inversée.

```
javascriptCopy code
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString('hello')); // Output: 'olleh'

```

1. **Calcul factoriel** : Écrivez une fonction qui calcule la factorielle d'un nombre donné.

```
javascriptCopy code
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5)); // Output: 120 (5! = 5 * 4 * 3 * 2 * 1)

```

1. **Trouver le mot le plus long** : écrivez une fonction qui prend une chaîne comme argument et renvoie la longueur du mot le plus long de la chaîne.

```
javascriptCopy code
function findLongestWord(str) {
    let words = str.split(' ');
    let maxLength = 0;

    for (let word of words) {
        if (word.length > maxLength) {
            maxLength = word.length;
        }
    }

    return maxLength;
}

console.log(findLongestWord('The quick brown fox jumps over the lazy dog')); // Output: 5 (for the word 'jumps')

```

# Il est temps d'appliquer vos compétences et d'obtenir des solutions à certains problèmes de jouets

* Jetez un oeil à ce [référentiel](https://github.com/salhi-khalil/Toy-problems-in-JavaScript/tree/main)
* Choisissez quelques problèmes et commencez la mise en œuvre de votre solution
* Partagez les résultats avec votre instructeur et vos amis

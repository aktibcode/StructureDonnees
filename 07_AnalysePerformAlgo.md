# Chapitre : ANALYSE DES PERFORMANCES DANS L'ALGORITHME


# Qu’est-ce que l’analyse des performances d’un algorithme ?

Si nous voulons aller de la ville **« A »** à la ville **« B »** , il existe plusieurs façons de procéder. Nous pouvons y aller en avion, en bus, en train et aussi en vélo. En fonction de la disponibilité et de la commodité, nous choisissons celui qui nous convient. De même, en informatique, il existe plusieurs algorithmes pour résoudre un problème. Lorsque nous avons plus d'un algorithme pour résoudre un problème, nous devons sélectionner le meilleur. L'analyse des performances nous aide à sélectionner le meilleur algorithme parmi plusieurs algorithmes pour résoudre un problème.
Lorsqu'il existe plusieurs algorithmes alternatifs pour résoudre un problème, nous les analysons et choisissons celui qui convient le mieux à nos besoins. La définition formelle est la suivante...

### La performance d’un algorithme est un processus de jugement évaluatif sur les algorithmes.

![](https://i.imgur.com/ZBUzBfB.png)

On peut également le définir comme suit...

### La performance d’un algorithme signifie prédire les ressources nécessaires à un algorithme pour effectuer sa tâche.

Cela signifie que lorsque nous avons plusieurs algorithmes pour résoudre un problème, nous devons sélectionner un algorithme approprié pour résoudre ce problème.
Nous comparons les algorithmes entre eux qui résolvent le même problème, pour sélectionner le meilleur algorithme. Pour comparer les algorithmes, nous utilisons un ensemble de paramètres ou un ensemble d'éléments comme la mémoire requise par cet algorithme, la vitesse d'exécution de cet algorithme, la facilité de compréhension, la facilité de mise en œuvre, etc.

Généralement, la performance d’un algorithme dépend des éléments suivants...

1. Cet algorithme fournit-il la solution exacte au problème ?
2. Est-ce facile à comprendre ?
3. Est-ce facile à mettre en œuvre ?
4. Combien d'espace (mémoire) faut-il pour résoudre le problème ?
5. Combien de temps faut-il pour résoudre le problème ? Etc.,

Lorsque nous voulons analyser un algorithme, nous ne prenons en compte que l'espace et le temps requis par cet algorithme particulier et nous ignorons tous les autres éléments.
Sur la base de ces informations, l'analyse des performances d'un algorithme peut également être définie comme suit...

### L'analyse des performances d'un algorithme est le processus de calcul de l'espace et du temps requis par cet algorithme...

L'analyse des performances d'un algorithme est effectuée à l'aide des mesures suivantes...

Espace requis pour accomplir la tâche de cet algorithme ( **complexité spatiale** ). Il comprend l'espace du programme et l'espace des données.
Temps requis pour accomplir la tâche de cet algorithme ( **complexité temporelle** ).

# Complexité spatiale

## Qu'est-ce que la complexité spatiale ?

Lorsque nous concevons un algorithme pour résoudre un problème, il a besoin de mémoire informatique pour terminer son exécution. Pour tout algorithme, la mémoire est nécessaire aux fins suivantes...

1. Pour stocker les instructions du programme.
2. Pour stocker des valeurs constantes.
3. Pour stocker des valeurs variables.
4. Et pour quelques autres choses comme les appels de fonctions, les instructions de saut, etc.

La complexité spatiale d’un algorithme peut être définie comme suit :

### La quantité totale de mémoire informatique requise par un algorithme pour terminer son exécution est appelée complexité spatiale de cet algorithme.

Pour calculer la complexité spatiale, nous devons connaître la mémoire requise pour stocker différentes valeurs de type de données (selon le compilateur). Par exemple, le compilateur du langage de programmation C requiert les éléments suivants...

* 2 octets pour stocker la valeur entière.
* 4 octets pour stocker la valeur à virgule flottante.
* 1 octet pour stocker la valeur du caractère.
* 6 (OU) 8 octets pour stocker une valeur double.

Considérez le morceau de code suivant :

```
function square(a) {
    return a * a;
}
```

Dans le morceau de code ci-dessus, 2 octets de mémoire sont nécessaires pour stocker la variable « a » et 2 autres octets de mémoire sont utilisés pour *la valeur de retour.*

### Cela signifie qu'il faut au total 4 octets de mémoire pour terminer son exécution. Et ces 4 octets de mémoire sont fixes pour toute valeur d'entrée de « a ». Cette complexité spatiale est dite « complexité spatiale constante ».

Considérez le morceau de code suivant :

```
function sum(A, n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += A[i];
    }
    return sum;
}
```

Dans le morceau de code ci-dessus, il faut
'n*2' octets de mémoire pour stocker la variable de tableau 'a[ ]'
2 octets de mémoire pour le paramètre entier 'n'
4 octets de mémoire pour les variables entières locales 'sum' et 'i' (2 octets chacune)
2 octets de mémoire pour la valeur de retour.

**Cela signifie qu'au total, il faut « 2n+8 » octets de mémoire pour terminer son exécution. Ici, la quantité totale de mémoire requise dépend de la valeur de « n ». Lorsque la valeur de « n » augmente, l'espace requis augmente également proportionnellement. Ce type de complexité spatiale est appelé complexité spatiale linéaire.**

### Si la quantité d'espace requise par un algorithme augmente avec l'augmentation de la valeur d'entrée, alors cette complexité spatiale est dite complexité spatiale linéaire.

# Complexité temporelle

![](https://i.imgur.com/9JkjAvi.png)

## Qu'est-ce que la complexité temporelle ?

Chaque algorithme nécessite un certain temps de calcul pour exécuter son instruction et réaliser la tâche. Ce temps de calcul requis est appelé complexité temporelle.
La complexité temporelle d'un algorithme peut être définie comme suit :

### La complexité temporelle d'un algorithme est la quantité totale de temps nécessaire à un algorithme pour terminer son exécution.

En général, le temps d’exécution d’un algorithme dépend des éléments suivants...

1. Qu'il soit exécuté sur une machine à processeur **unique** ou sur une machine à processeurs **multiples** .
2. Qu'il s'agisse d'une machine **32** bits ou **64** bits.
3. Vitesse de lecture et d'écriture de la machine.
4. La durée nécessaire à un algorithme pour effectuer des opérations **arithmétiques** , des opérations **logiques** , des opérations de valeur **de retour** et **d'affectation** , etc.
5. Des données d'entrée

![](https://i.imgur.com/zRQmoVY.png)

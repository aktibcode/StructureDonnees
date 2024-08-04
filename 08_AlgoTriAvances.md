# Chapitre : ALGORITHMES DE TRI AVANCES


# Comprendre le tri par insertion

Le tri par insertion est un algorithme de tri simple qui fonctionne de la même manière que le tri des cartes à jouer dans vos mains. L'algorithme trie un tableau en prenant les éléments du tableau un par un et en les insérant à leur position correcte dans une nouvelle liste triée.

# Explication de l'algorithme

Voici comment fonctionne l'algorithme :

1. Commencez par le deuxième élément (supposons que le premier élément est la partie triée).
2. Stocker l'élément actuel dans une clé.
3. Vérifiez tous les éléments dans la partie triée qui se trouve à gauche de la clé. Si un élément est plus grand que la clé, décalez-le vers la droite.
4. Insérez la clé dans sa position correcte.
5. Passez à la touche suivante. Répétez les étapes.

<iframe allowfullscreen="true" frameborder="0" src="https://www.youtube.com/embed/nKzEJWbkPbQ"></iframe>

Implémentation du tri par insertion en JavaScript
Voici l'implémentation JavaScript du tri par insertion :

```
function insertionSort(array) {
		for(let i = 1; i < array.length; i++) {
				let key = array[i];
				let j = i - 1;
				while (j >= 0 && array[j] > key) {
						array[j + 1] = array[j];
						j = j - 1;
				}
				array[j + 1] = key;
		}
		return array;
}
```

# Explication du code

La boucle externe s'étend du deuxième élément au dernier élément du tableau. La clé contient l'élément actuel et j pointe vers l'élément avant la clé. La boucle while interne décale tous les éléments qui sont plus grands que la clé vers une position en avant. La clé est ensuite placée à sa position correcte dans la partie triée du tableau.

# Tri par fusion

![](https://i.imgur.com/XyIaERI.jpeg)

Le tri par fusion est l'un des algorithmes de tri les plus populaires. Il est utilisé pour trier les valeurs dans n'importe quelle structure de données traversable, telle qu'une liste. Il fonctionne en divisant la liste d'entrée en deux moitiés, en répétant le processus sur ces moitiés et en fusionnant finalement les deux moitiés triées ensemble.

#### Regardez cette vidéo pour mieux comprendre le tri par fusion.

<iframe allowfullscreen="true" frameborder="0" src="https://www.youtube.com/embed/4VqmGXwpLqc"></iframe>

# Qu'est-ce que l'algorithme de tri par fusion ?

Merge Sort est, vous l'avez deviné, un algorithme de tri qui peut être utilisé pour classer les éléments d'un tableau du plus petit au plus grand. Il prend un tableau, le trie, puis le recrache :

![](https://i.imgur.com/ZoBMsur.png)

Merge Sort est un algorithme de tri hors site, stable et de type comparaison

**L'algorithme « out-of-place »**  signifie qu'il a besoin de structures de données supplémentaires lors du tri. C'est le contraire des algorithmes de tri en place, où l'entrée est simplement écrasée et aucune structure de données supplémentaire n'est requise.

**Stable**  signifie que deux éléments avec des valeurs égales apparaîtront dans le même ordre dans la sortie triée qu'ils apparaissent dans le tableau d'entrée non trié.

Et enfin, un  **tri par comparaison**  est un algorithme de tri qui lit uniquement la liste des éléments via une seule opération de comparaison abstraite (généralement un « inférieur à » ou « égal à ») qui détermine lequel des deux éléments doit apparaître en premier dans le tableau de sortie trié final.

Consultez mon  [article de comparaison sur place et stable](https://www.doabledanny.com/algorithm-concepts)  si vous ne comprenez pas bien ce qui précède ou si vous ne savez pas pourquoi il est important de connaître ces propriétés d'un algorithme.

## Logique de tri par fusion

Le tri par fusion est une combinaison de deux choses : la fusion et le tri. Il exploite le fait que les tableaux de 0 ou 1 élément sont toujours triés, par exemple :

* [] est toujours trié
* [4] est toujours trié
* [5, 4] n'est pas trié

Le tri par fusion fonctionne en décomposant un tableau en tableaux plus petits de 0 ou 1 éléments, puis en créant un tableau nouvellement trié.

Tout d’abord, nous divisons le tableau jusqu’à obtenir des tableaux contenant 0 ou 1 élément. C’est le « cas de base » : nous savons que ces tableaux sont triés car ils ont une longueur de 1 ou 0.

## Tri par fusion - JavaScript

### Écriture d'une fonction d'aide à la fusion

Tout d’abord, nous devons comprendre comment fusionner deux tableaux triés.

Afin d'implémenter le tri par fusion, il est utile d'implémenter d'abord une fonction chargée de fusionner deux tableaux triés.

Étant donné deux tableaux triés, cette fonction d'assistance doit créer un nouveau tableau également trié et composé de tous les éléments des deux tableaux d'entrée.

Voici notre fonction d'aide à la fusion. N'oubliez pas qu'elle accepte deux tableaux SORTED et les fusionne en un seul tableau trié plus grand.

```
function merge(left, right) {
  let sortedArr = [] // the sorted items will go here
  while (left.length && right.length) {
    // Insert the smallest item into sortedArr
    if (left[0] < right[0]) {
      sortedArr.push(left.shift())
    } else {
      sortedArr.push(right.shift())
    }
  }
  // Use spread operators to create a new array, combining the three arrays
  return [...sortedArr, ...left, ...right]
}
merge([1, 4], [2, 6, 9]) // [1, 2, 4, 6, 9]
```

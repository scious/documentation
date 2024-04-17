---
sidebar_position: 5
pagination_next: null
---

import Figure from '../../components/figures'
import Arcade from '../../components/arcade'
import VideoGIF from '../../components/videogifs'
import Highlight from '../../components/highlight'
import BubblePropertyEditor from '../../components/bubblePropertyEditor';
import Embed from '../../components/embed'

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Visual elements

## Scious Search

Cet élément visuel est le cheval de bataille de Scious Search - c'est ce qui renvoie les résultats de recherche de votre fournisseur de choix.

<Figure src="img/scious-search/Scious Search Visual Element.png" />

**Entrées**

1. `Fournisseur de recherche` Le fournisseur de recherche avec lequel vous avez synchronisé vos données.
2. `Type de résultat` Type de données du résultat de recherche.
3. `Requête de recherche` Ajustez à la sortie de déclenchement de saisie pour obtenir de meilleurs résultats. Une requête de recherche vide renvoie tous les résultats correspondant aux `Filtres`.
4. `Champs à rechercher` Les champs Bubble à rechercher fournis sous forme de liste JSON.
5. `Filtres` Cette section vous permet de composer vos filtres en utilisant Javascript. Pour plus de détails, consultez notre [section Profondeur des filtres](#filters-deep-dive).
6. `Trier par` Un dictionnaire des champs à trier spécifiés en JSON.
7. `Résultats par page` Nombre de résultats de recherche renvoyés dans chaque page de résultats.
8. `Page` La page actuelle des résultats de recherche à afficher, en commençant à "1".
9. `Champ à surligner` Nom du champ pour lequel renvoyer les points forts. Doit être l'un des champs déjà répertoriés dans `Champs à rechercher`.
10. `Options avancées` Options supplémentaires pour affiner les résultats de recherche. Voir les détails dans notre [section Options avancées](#advanced-options).

**Sorties**

1. `Résultats de recherche` Liste des choses à bulles correspondantes du type de données spécifié par `Type de données`.
2. `Nombre de résultats` Nombre de résultats.
3. `Temps de recherche` Le temps nécessaire pour renvoyer un résultat de recherche en millisecondes.
4. `Nombre de pages` Nombre de pages de résultats pour la recherche en cours.
5. `Erreur renvoyée` Oui/Non indiquant s'il y a eu une erreur.
6. `Description de l'erreur` Texte supplémentaire décrivant l'erreur.
7. `Points forts` Liste des extraits de points forts correspondants.
8. `Page réelle` La page réelle des résultats de recherche renvoyée.

## Profondeur des filtres

Cette section s'applique aux éléments visuels suivants :

- [Scious Search](#scious-search)
- [Obtenir Facettes](#get-facets)

Que vous souhaitiez filtrer par un simple menu déroulant ou appliquer 12 critères différents avec des dépendances conditionnelles, notre capacité de filtrage est suffisamment flexible pour répondre à la plupart des besoins. La chose la plus importante à savoir est que notre entrée `Filtres` existe pour accomplir un seul but :

> **Faire d'une chaîne de texte quelque chose que votre fournisseur de recherche peut interpréter comme des filtres.**

C'est la grande idée. Nos fournisseurs de recherche attendent des chaînes de filtres contenant des opérateurs logiques, des comparaisons numériques, du GeoJSON, et plus encore - pour cela, nous avons fait en sorte que notre entrée `Filtres` attende du Javascript. Si vous connaissez l'élément `Expression` du [plugin Boîte à outils](https://bubble.io/plugin/1488796042609x768734193128308700), vous devriez vous sentir comme chez vous en l'utilisant.

Les exemples qui suivent vous aideront à filtrer avec Scious Search, en commençant simplement puis en devenant plus complexes. Nous examinerons des implémentations spécifiques de fournisseurs de recherche, alors assurez-vous de cliquer sur le bon ci-dessous pour suivre.

### Faible Complexité

<Tabs groupId="search-providers">
<TabItem value="Algolia" label="Algolia">

Ces exemples proviennent de notre démo [Algolia Filter](https://plugins.scious.io/scious-search-algolia-filter-exemples). Consultez sa [page de l'éditeur Bubble](https://bubble.io/page?version=live\&type=page\&name=scious-search-algolia-filter-examples\&id=scious-plugins\&tab=tabs-1) pour voir et interagir avec ceux-ci dans leur contexte.

**Voici.** Le filtre le plus simple que vous pouvez créer.

<BubblePropertyEditor title="Scioussearch Simple" searchProvider="Algolia">

```js
"usage_count<40"
```

</BubblePropertyEditor>

Comme nous l'avons dit, le but de l'expression `Filtres` est de créer un ensemble d'instructions de filtrage qu'Algolia peut comprendre. Ici, ce texte demande à Algolia de :

> Renvoyer tous les enregistrements où le `usage_count` est inférieur à `40`

Nous nous appuyons sur la [syntaxe de filtrage numérique d'Algolia](https://www.algolia.com/doc/guides/managing-results/refine-results/filtering/how-to/filter-by-numeric-value/#applying-a-numeric-filter) pour accomplir cela. Pour en savoir plus sur toutes les grammaires de filtres d'Algolia, consultez leur [excellente documentation ici](https://www.algolia.com/doc/guides/managing-results/refine-results/filtering/).

Enfin, veuillez noter que les noms de champs eux-mêmes (c'est-à-dire `usage_count` ci-dessus) sont sensibles à la casse - ils doivent correspondre à la casse des noms de champs tels qu'ils sont écrits dans votre base de données Bubble.


<TabItem value="Typesense" label="Typesense">

Ces exemples sont tirés de notre [démonstration de filtre Typesense](https://plugins.scious.io/scious-search-typesense-filter-examples). Consultez la [page de l'éditeur Bubble](https://bubble.io/page?version=live\&type=page\&name=scious-search-typesense-filter-examples\&id=scious-plugins\&tab=tabs-1) pour voir et interagir avec ces éléments dans leur contexte.

Voici. Le filtre le plus simple que vous pouvez créer.

<BubblePropertyEditor title="Scioussearch Simple" searchProvider="Typesense">

```js
"usage_count<40"
```

</BubblePropertyEditor>

Comme nous l'avons dit, l'objectif de l'expression `Filtres` est de créer un ensemble d'instructions de filtre que Typesense peut comprendre. Ici, ce texte demande à Typesense de :

> Retourner tous les enregistrements où le `usage_count` est inférieur à `40`

Nous nous appuyons sur la syntaxe de filtrage numérique de Typesense pour accomplir cela. Pour en savoir plus sur toutes les grammaires de filtres de Typesense, consultez leur [excellente documentation ici](https://typesense.org/docs/latest/api/search.html#filter-parameters).

Enfin, veuillez noter que les noms de champs eux-mêmes (c'est-à-dire `usage_count` ci-dessus) sont sensibles à la casse - ils doivent correspondre à la casse des noms de champs tels qu'ils sont écrits dans votre base de données Bubble.




### Complexité moyenne

<Tabs groupId="search-providers">
<TabItem value="Algolia" label="Algolia">

Cet exemple suivant utilise l'opérateur ternaire de Javascript pour conditionnellement construire un texte de filtre.

<BubblePropertyEditor title="Scioussearch mid complexity" searchProvider="Algolia">

```js
var categories_filter = (Multidropdown Catégories valeur:compte > 0) ? "catégories:'Multidropdown Catégories valeur:chaque élément Affichage joindre avec ' ET catégories:''": ""

categories_filter
```

</BubblePropertyEditor>

Analysons cela. Nous demandons à Algolia de :

> Retourner tous les enregistrements où le champ `catégories` contient tous les éléments de `Multidropdown Catégories`, mais seulement si `Multidropdown Catégories` a au moins une valeur sélectionnée.

Si nous devions construire ce filtre dans la recherche native de Bubble, nous `Faisons une recherche pour` et nous vérifions `ignorer les contraintes vides` pour ignorer le `Multidropdown Catégories` lorsqu'il est vide.

L'opérateur ternaire de Javascript est notre moyen de réaliser la même chose. C'est une forme condensée d'un`si`... `sinon`... déclaration et cela ressemble à ceci :

```js
var notre_variable = (une_condition) ? "valeur_A" : "valeur_B"
```

Ce qui se passe ici, c'est que lorsque `une_condition` est vraie, alors `notre_variable` se verra attribuer le texte `"valeur_A"`. Sinon, il se verra attribuer `"valeur_B"`.

Ainsi, dans notre exemple,

```js
var categories_filter = (Multidropdown Catégories valeur:compte > 0) ? "catégories:'Multidropdown Catégories valeur:chaque élément Affichage joindre avec ' ET catégories:''": ""
categories_filter
```

nous vérifions si `Multidropdown Catégories valeur:compte > 0`.

- **S'il est égal à zéro**, alors nous assignons le texte vide `""` à `categories_filter`. En conséquence, Algolia n'appliquera aucun filtre à nos résultats de recherche.
- **S'il est supérieur à zéro**, ici, nous voulons finalement créer un texte qui ressemble à quelque chose comme

  > `"catégories:'technique' ET catégories:'réseau social'"`

  Donc pour y parvenir, nous :

  - commençons par la phrase `catégories:'`
  - ajoutons `' ET catégories:'` à chaque `valeur de Multidropdown Catégories`
  - et finissons la chaîne avec un seul guillemet `'`

  Mettez tout cela ensemble, et cela ressemble à :

  > `"catégories:'Multidropdown Catégories valeur:chaque élément Affichage joindre avec ' ET catégories:''"`

Avec la variable `categories_filter` complètement définie, la dernière chose à faire dans l'entrée `Filtres` est d'indiquer la variable que nous voulons retourner. Comme nous n'avons qu'une seule variable de filtre, `categories_filter`, c'est celle que nous indiquons.

Pour conclure, dans cet exemple, nous nous sommes appuyés sur l'opérateur booléen d'Algolia pour `ET` plusieurs filtres de catégorie ensemble. Que nos valeurs sources proviennent d'un Multidropdown, d'une Intersection de listes, ou d'une autre liste, vous pouvez utiliser la même approche pour créer des filtres qui renvoient des enregistrements correspondant à TOUS les éléments d'un champ de liste. Notez qu'Algolia a également l'opérateur booléen `OU` qui peut être utilisé pour renvoyer des enregistrements correspondant à N'IMPORTE QUELS éléments d'un champ de liste. Ils ont également un opérateur `NON` qui, conjointement avec `ET` et `OU`, peut être enchaîné et encadré à l'aide de parenthèses `()` pour créer des filtres encore plus sophistiqués.


<TabItem value="Typesense" label="Typesense">

Cet exemple suivant utilise l'opérateur ternaire de Javascript pour conditionnellement construire un texte de filtre.

<BubblePropertyEditor title="Scioussearch mid complexity" searchProvider="Typesense">

```js
var categories_filter = (Multidropdown Catégories valeur:compte > 0) ? "catégories:='Multidropdown Catégories valeur:chaque élément Affichage joindre avec ' && catégories:''": ""

categories_filter
```

</BubblePropertyEditor>

Analysons cela. Nous demandons à Typesense de :

> Renvoyer tous les enregistrements où le champ `categories` contient tous les éléments de `Catégories Multidropdown`, mais seulement si `Catégories Multidropdown` a au moins une valeur sélectionnée.

Si nous devions construire ce filtre dans la recherche native de Bubble, nous devrions `Effectuer une recherche pour` et cocher `ignorer les contraintes vides` pour ignorer les `Catégories Multidropdown` lorsqu'elles sont vides.

L'opérateur ternaire de Javascript est notre moyen d'accomplir la même chose. C'est une forme condensée d'un `if`... `else`... déclaration et ça ressemble à ceci :

```js
var notre_variable = (some_condition) ? "valeur_A" : "valeur_B"
```

Ce qui se passe ici, c'est que lorsque `some_condition` est vrai, alors `notre_variable` se verra assigner le texte `"valeur_A"`. Sinon, elle se verra assigner `"valeur_B"`.

Ainsi, dans notre exemple,

```js
var filtre_categories = (Catégories Multidropdown valeur:compter > 0) ? "categories:='Catégories Multidropdown valeur:chaque élément Affichage joint avec ' && categories:''": ""
filtre_categories
```

nous vérifions si `Catégories Multidropdown valeur:compter > 0`.

- **Si c'est zéro**, alors nous assignons le texte vide `""` à `filtre_categories`. En conséquence, Typesense n'appliquera aucun filtre à nos résultats de recherche.
- **Si c'est supérieur à zéro**, ici nous voulons finalement créer un texte ressemblant à

  > `"categories:='technique' && categories:='réseau social'"`

  Pour ce faire, nous :

  - commençons par la phrase `categories:='`
  - ajoutons `' && categories:='` à chaque `Catégories Multidropdown valeur`
  - et terminons la chaîne avec un seul guillemet `'`

  En mettant tout ensemble, cela ressemble à :

  > `"categories:='Catégories Multidropdown valeur:chaque élément Affichage joint avec ' && categories:''"`

Avec la variable `filtre_categories` complètement définie, la dernière chose à faire dans l'entrée des `Filtres` est d'indiquer la variable que nous voulons renvoyer. Puisque nous n'avons qu'une seule variable de filtre, `filtre_categories`, c'est celle que nous indiquons.

Pour conclure, dans cet exemple, nous nous sommes appuyés sur l'opérateur booléen de [Typesense](https://typesense.org/docs/latest/api/search.html#filter-parameters) pour `&&` plusieurs filtres de catégories ensemble. Que nos valeurs sources proviennent d'un Multidropdown, d'une Intersection de listes, ou d'une autre liste, vous pouvez utiliser la même approche pour créer des filtres qui renvoient des enregistrements correspondant à TOUS les éléments d'un champ de liste. Notez que Typesense a également l'opérateur booléen `||` qui peut être utilisé pour renvoyer des enregistrements correspondant à N'IMPORTE QUELS éléments dans un champ de liste. Leurs opérateurs `&&` et `||` peuvent être chaînés et étendus en utilisant des parenthèses `()` pour créer des filtres encore plus sophistiqués.




### Complexité élevée

<Tabs groupId="search-providers">
<TabItem value="Algolia" label="Algolia">

Combinons plusieurs filtres.

<BubblePropertyEditor title="Scioussearch high-ish complexity" searchProvider="Algolia">

```js
var filtre_categories = (Catégories Multidropdown valeur:compter > 0) ? " ET categories:'Catégories Multidropdown valeur:chaque élément Affichage joint avec ' ET categories:''": ""

var filtre_utilisation = " ET usage_compte:[Valeur min de Compteur d'utilisation de l'entrée coulissante..Valeur max de Compteur d'utilisation de l'entrée coulissante]"

// Formatons notre condition de sorte que oui soit "vrai" et non soit 'faux'
var filtre_open_source = " ET publié_open_source:Bouton case à cocher Est open source est coché:formaté comme texte"

var filtres = filtre_categories + filtre_utilisation + filtre_open_source

filtres
```

</BubblePropertyEditor>

Nos trois filtres sont les suivants :

1. Le filtre `Catégories Multidropdown` de notre dernier exemple.
2. Un filtre `compte_d'utilisation` utilisant la syntaxe de filtre de plage numérique d'[Algolia](https://www.algolia.com/doc/guides/managing-results/refine-results/filtering/how-to/filter-by-numeric-value/#filtering-by-price-range).
3. Un filtre `published_open_source` utilisant la syntaxe de filtre booléen d'[Algolia](https://www.algolia.com/doc/guides/managing-results/refine-results/filtering/how-to/filter-by-boolean/#applying-a-boolean-filter). Si la case à cocher pertinente est cochée, alors nous formasons sa valeur sous forme de texte où `'oui'` est `true` et `'non'` est `false` (puisque c'est ce qu'Algolia attend).

Avec tous les trois textes de filtre définis, nous les concaténons ensuite dans la variable `filtres` en utilisant l'opérateur `+` de Javascript. Enfin, nous écrivons `filtres` pour que notre élément visuel sache qu'il s'agit de la variable contenant notre texte de filtre complet.

Les lecteurs remarqueront que nous commençons chaque filtre par la phrase `" ET "`. Comme mentionné dans notre exemple de complexité moyenne, cela est fait de sorte que lorsque nos chaînes de filtres sont ajoutées les unes aux autres, il y a un ET entre elles exactement comme le veut Algolia. Bien sûr, si votre cas d'utilisation mérite autre chose - vous pouvez également utiliser `OU` ou `NON` comme [Algolia le permet](https://www.algolia.com/doc/guides/managing-results/refine-results/filtering/in-depth/combining-boolean-operators/).


<TabItem value="Typesense" label="Typesense">

Combinons plusieurs filtres.

<BubblePropertyEditor title="Scioussearch high-ish complexity" searchProvider="Typesense">

```js
var filtre_categories = (Catégories Multidropdown valeur:compter > 0) ? " && categories:='Catégories Multidropdown valeur:chaque élément Affichage joint avec ' && categories:=''": ""

var filtre_utilisation = " && usage_compte:[Valeur min de Compteur d'utilisation de l'entrée coulissante..Valeur max de Compteur d'utilisation de l'entrée coulissante]"

// Formatons notre condition de sorte que oui soit "vrai" et non soit 'faux'
var filtre_open_source = " && publié_open_source:=Bouton case à cocher Est open source est coché:formatée comme texte"

var filtres = filtre_categories + filtre_utilisation + filtre_open_source

filtres
```

</BubblePropertyEditor>

Nos trois filtres sont les suivants :

1. Le filtre `Catégories Multidropdown` de notre dernier exemple.
2. Un filtre `compte_d'utilisation` utilisant la syntaxe de plage numérique de [Typesense](https://typesense.org/docs/latest/api/search.html#filter-parameters).
3. Un filtre `published_open_source` utilisant la syntaxe de filtre booléen de [Typesense](https://typesense.org/docs/latest/api/search.html#filter-parameters). Si la case à cocher pertinente est cochée, alors nous formasons sa valeur sous forme de texte où `'oui'` est `true` et `'non'` est `false` (puisque c'est ce que Typesense attend).

Avec tous les trois textes de filtre définis, nous les concaténons ensuite dans la variable `filtres` en utilisant l'opérateur `+` de Javascript. Enfin, nous écrivons `filters` afin que notre élément visuel sache que c'est la variable contenant notre texte complet de filtre.

Les lecteurs peuvent remarquer que nous commençons chaque filtre par la phrase `" && "`. Comme mentionné dans notre exemple de complexité moyenne, cela est fait pour que lorsque nos chaînes de filtres sont ajoutées les unes aux autres, il y ait un && entre elles comme le souhaite Typesense. Bien sûr, si votre cas d'utilisation justifie autre chose, vous pouvez également utiliser `OR` car Typesense le permet.




### Filtre d'entrée par rapport à l'élément d'expression de la Boîte à outils

<Tabs groupId="search-providers">
<TabItem value="Algolia" label="Algolia">

Plus tôt, nous avons dit que l'entrée `Filters` se comporte comme l'élément `Expression` du [plugin Boîte à outils](https://bubble.io/plugin/toolbox-1488796042609x768734193128308700). En vérité, nous avons apporté quelques modifications en coulisses pour rendre l'écriture des filtres aussi facile que possible :

1. Si le texte `Filters` résultant commence par la phrase `' AND '` ou `' OR '`, alors nous supprimons cette partie avant d'envoyer vos filtres à Algolia.

   Pour comprendre pourquoi, imaginez un filtre composé de deux opérateurs ternaires :

   ```js
   var mon_filtre = filtre_ternaire_a + filtre_ternaire_b
   ```

   Si `filtre_ternaire_a` est inactif en raison, par exemple, d'un menu déroulant Bubble vide, alors seul `filtre_ternaire_b` contribue à `mon_filtre`. Mais `filtre_ternaire_b` commence probablement par la phrase `AND` (ou `OR`) qui, si elle est envoyée à Algolia, provoquerait une erreur. Donc, pour maintenir l'ordre dans l'univers, nous supprimons ces phrases d'introduction.

2. Nous interprétons les apparitions **non citées** des phrases `yes` et `no` comme les booléens JavaScript `true` et `false`, respectivement. Nous interprétons les apparitions **citée** des phrases `:yes` et `:no` comme la phrase `:true` et `:false`, respectivement. Ensemble, cela vous permet d'utiliser les expressions dynamiques `yes` / `no` de Bubble dans les filtres sans devoir `Formater en texte` la valeur en `true` ou `false`, ce que Algolia attend.

3. Nous interprétons les dates **non citées** comme des horodatages UNIX (ms) comme suit :

   - `MMM D, YYYY h:mm a` La date **23 déc. 2023 22:31** se convertit en **1703392260000**. Il s'agit du format de date par défaut produit par les expressions dynamiques de Bubble qui résolvent une date.
   - `MMMM D, YYYY h:mm a` La date **23 décembre 2023 22:31** se convertit en **1703392260000**.

   Cela vous permet d'utiliser les expressions de date dynamiques de Bubble dans les filtres sans devoir vous souvenir d'`Extraire les horodatages UNIX (ms)`, ce que attend Typesense.


<TabItem value="Typesense" label="Typesense">

Plus tôt, nous avons dit que l'entrée `Filters` se comporte comme l'élément `Expression` du [plugin Boîte à outils](https://bubble.io/plugin/toolbox-1488796042609x768734193128308700). En vérité, nous avons apporté quelques modifications en coulisses pour rendre l'écriture des filtres aussi facile que possible :

1. Si le texte `Filters` résultant commence par la phrase `' && '` ou `' || '`, alors nous supprimons cette partie avant d'envoyer vos filtres à Typesense.

   Pour comprendre pourquoi, imaginez un filtre composé de deux opérateurs ternaires :

   ```js
   var mon_filtre = filtre_ternaire_a + filtre_ternaire_b
   ```

   Si `filtre_ternaire_a` est inactif en raison, par exemple, d'un menu déroulant Bubble vide, alors seul `filtre_ternaire_b` contribue à `mon_filtre`. Mais `filtre_ternaire_b` commence probablement par la phrase `AND` (ou `OR`) qui, si elle est envoyée à Typesense, provoquerait une erreur. Donc, pour maintenir l'ordre dans l'univers, nous supprimons ces phrases d'introduction.

2. Nous interprétons les apparitions **non citées** des phrases `yes` et `no` comme les booléens JavaScript `true` et `false`, respectivement. Nous interprétons les apparitions **citée** des phrases `:yes` et `:no` comme la phrase `:true` et `:false`, respectivement. Ensemble, cela vous permet d'utiliser les expressions dynamiques `yes` / `no` de Bubble sans devoir `Formatted as text` la valeur en `true` ou `false`, ce que attend Typesense.

3. Nous interprétons les dates **non citées** comme des horodatages UNIX (ms) comme suit :

   - `MMM D, YYYY h:mm a` La date **23 déc. 2023 22:31** se convertit en **1703392260000**. Il s'agit du format de date par défaut produit par les expressions dynamiques de Bubble qui résolvent une date.
   - `MMMM D, YYYY h:mm a` La date **23 décembre 2023 22:31** se convertit en **1703392260000**.

   Cela vous permet d'utiliser les expressions de date dynamiques de Bubble dans les filtres sans devoir vous souvenir d'`Extract UNIX timestamps (ms)`, ce que attend Typesense.




<!-- <Tabs groupId="search-providers">
<TabItem value="Algolia" label="Algolia">

</TabItem>
<TabItem value="Typesense" label="Typesense">
</TabItem>
</Tabs> -->

:::tip

Voulez-vous voir vos `Filters` sans avoir à les imprimer dans une zone de texte ? Ouvrez les outils de développement de votre navigateur (sur Windows, appuyez sur `CTRL`+`SHFT`+`i`, sur Mac appuyez sur `Option` + `⌘` + `i`) et vous verrez votre filtre de recherche imprimé dans la console. Les journaux de filtre ne sont imprimés que dans la console dans les environnements de développement. Si vous souhaitez également les voir en direct, vous pouvez inclure une déclaration console.log() dans le javascript de votre filtre. Bien sûr, cela doublerait de tels journaux dans vos environnements de développement.

:::

## Options avancées

<Tabs groupId="search-providers">
<TabItem value="Algolia" label="Algolia">

Cette section s'applique aux éléments visuels suivants :

- [Recherche Scious](#scious-search)
- [Obtenir Facettes](#get-facets)

Alors que les paramètres de recherche par défaut d'Algolia sont excellents pour de nombreux cas d'utilisation, certaines applications peuvent bénéficier d'un ajustement des résultats de recherche. L'entrée `Options avancées` est l'endroit où nous pouvons effectuer de tels ajustements. Cette entrée accepte un dictionnaire JSON de deux types de paramètres :

1. Paramètres spécifiques à Algolia.
2. Scious Search specific parameters.

#### Algolia parameters

For the full list, check out their [search parameter documentation](https://www.algolia.com/doc/api-reference/search-api-parameters/). Of those, you can set any parameter except the following ones (which we use and cannot be overridden):

- `hitsPerPage`
- `attributesToRetrieve`
- `filters`
- `restrictSearchableAttributes`
- `attributesToHighlight`
- `highlightPreTag`
- `highlightPostTag`
- `page`

#### Scious Search parameters

Internally, we have two unique parameters for controlling the output of search results:

1. `clearSciousSearch`

   Can be `true` or `false`. Default is `false`. If `true`, then `Search Results` is set to an empty list regardless of any other input. This effectively "turns off" the Scious Search visual element and it should be used instead of toggling the element's visibility.

2. `freezeSciousSearch`

   Can be `true` or `false`. Default is `false`. If `true`, then `Search Results` will hold the current state - whatever that was - regardless of any other input. This effectively "freezes" your search results.


<TabItem value="Typesense" label="Typesense">

This section applies to the following visual elements:

- [Scious Search](#scious-search)
- [Get Facets](#get-facets)

While Typesense's search defaults are great for many use cases, some applications can benefit from search result tuning. The `Advanced options` input is the place where we can make such adjustments. This input accepts a JSON dictionary of two kinds of parameters:

1. Typesense specific parameters.
2. Scious Search specific parameters.

#### Typesense parameters

For the full list, check out their [search parameter documentation](https://typesense.org/docs/latest/api/search.html). Of those, you can set any parameter except the following ones (which we use and cannot be overridden):

- `collection`
- `q`
- `per_page`
- `include_fields`
- `filter_by`
- `sort_by`
- `query_by`
- `highlight_fields`
- `highlight_start_tag`
- `highlight_end_tag`
- `page`

#### Scious Search parameters

Internally, we have two unique parameters for controlling the output of search results:

1. `clear_scious_search`

   Can be `true` or `false`. Default is `false`. If `true`, then `Search Results` is set to an empty list regardless of any other input. This effectively "turns off" the Scious Search visual element and it should be used instead of toggling the element's visibility.

2. `freeze_scious_search`

   Can be `true` or `false`. Default is `false`. If `true`, then `Search Results` will hold the current state - whatever that was - regardless of any other input. This effectively "freezes" your search results.




## Typing Trigger

The Typing Trigger is used to instantly feed new values into the Scious Search Visual Element. The reasons for building this element are threefold:

1. To remove the time delay that standard Bubble Inputs have between when a user types and keystroke values become available in Bubble.
2. new search request on every keystroke is running up the number of monthly search, allows you to tune the rate at which this value to reduce the number of unnecessary real time search requests initiated by queries that were typed quickly.

set the To run a new search on every input keypress, set the Typing Trigger's `Typing timeout` to `0` milliseconds. Alternatively, set

<Figure src="img/scious-search/typing trigger.png" />

**Inputs**

1. `Search element ID` The unique ID of the relevant Bubble input element.
2. `Typing timeout` The milliseconds between keystrokes before fetching new search results. Set to `0` to run a new search on every keystroke or set this value higher to reduce the number of unnecessary real time search requests initiated by queries that were typed quickly.
3. `Character minimum` The minimum number of characters needed in a query to return search results.

**Outputs**

1. `Output text` The current text value of the input with ID `Search element ID`.
2. `Is typing` Boolean indicator that toggles On and then Off every time a key is added to the search input referenced by `Search element ID`.

## Get Data Types

This visual element does not have any inputs.

**Outputs**

1. `Data types` Your Bubble app's data types as a list.
2. `Data type fields` Your Bubble app's data type's fields as a list.
3. `Browser ID` A developer specific output. The current user's browser ID. Used for locking sync admin capabilities to a particular device. Will be removed in future releases.

## Get Facets

<Figure src="img/scious-search/Get Facets.png" />

**Inputs**

1. `Search provider`
2. `Result type` Search result data type.
3. `Facet type` Set to the "Facet (🔍)" type.
4. `Search query` Keywords to search. Set to the Typing Trigger Value for best results.
5. `Fields to search` The Bubble fields to search supplied as a JSON list.
6. `Fields to facet` The Bubble fields to facet supplied as a JSON list. Specifies the order of returned "Facets".
7. `Filters` This section allows you to compose your filters using Javascript. It works exactly like the Scious Search visual element's `Filters` input. Details [here](#filters-deep-dive).
8. `Max values per facet` The maximum number of facet values returned per facet.
9. `Facet query` Keywords to search in `Fields to facet`. Set to the Typing Trigger's `Output text` for best results.
10. `Advanced options` Additional options for tuning search results. It works exactly like the Scious Search visual element's `Advanced options` input. Détails [ici](#advanced-options).

**Résultats**

1. `Erreur retournée` Un Oui/Non indiquant s'il y a eu une erreur.
2. `Description de l'erreur` Texte supplémentaire décrivant l'erreur.
3. `Facettes` Les éléments de facettes et les statistiques pour chaque champ spécifié dans `Champs de facette`.

## Appels API

Nous avons un seul appel API de données nommé `Facettes (🔍)`. Cet appel API ne renvoie pas de données utilisables. Il existe uniquement pour définir le type de données que l'élément visuel [Obtenir les facettes](#get-facets) retourne. Ne pas utiliser cet appel API en dehors de l'élément visuel Obtenir les facettes. Vous n'aimez pas que nous ayons fait cela? Nous non plus. Montrez votre soutien pour résoudre ce problème en commentant et en votant pour [cette demande de fonctionnalité](https://bubble.io/ideaboard?idea=1603764356815x558406947894198300).

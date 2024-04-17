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

# Éléments visuels

## Omnisearch

Cet élément visuel est le cheval de bataille d'Omnisearch - c'est ce qui renvoie les résultats de recherche de votre fournisseur préféré.

<Figure src="img/omnisearch/Omnisearch Visual Element.png" />

**Entrées**

1. `Fournisseur de recherche` Le fournisseur de recherche avec lequel vous avez synchronisé vos données.
2. `Type de résultat` Type de données de résultat de recherche.
3. `Requête de recherche` Réglez la Déclencheur de saisie `Texte de sortie` pour de meilleurs résultats. Une requête de recherche vide renvoie tous les résultats correspondant aux `Filtres`.
4. `Champs à rechercher` Les champs Bubble à rechercher fournis sous forme de liste JSON.
5. `Filtres` Cette section vous permet de composer vos filtres en utilisant JavaScript. Pour plus de détails, consultez notre [Exploration approfondie des filtres](#filters-deep-dive) section.
6. `Trier par` Un dictionnaire des champs à trier spécifié en JSON.
7. `Résultats par page` Nombre de résultats de recherche renvoyés dans chaque page de résultats.
8. `Page` La page actuelle des résultats de recherche à afficher en commençant par "1".
9. `Champ à mettre en surbrillance` Nom du champ pour renvoyer les mises en surbrillance. Doit être l'un des champs déjà répertoriés dans `Champs à rechercher`.
10. `Options avancées` Options supplémentaires pour régler les résultats de recherche. Voir les détails dans notre [Options avancées](#advanced-options) section

**Sorties**

1. `Résultats de recherche` Liste des choses Bubble correspondantes au type de données spécifié par `Type de données`.
2. `Nombre de résultats` Nombre de résultats.
3. `Temps de recherche` Le temps nécessaire pour obtenir un résultat de recherche en millisecondes.
4. `Nombre de pages` Nombre de pages de résultats pour la recherche actuelle.
5. `Erreur retournée` Un Oui/Non indiquant s'il y a eu une erreur.
6. `Description de l'erreur` Texte supplémentaire décrivant l'erreur.
7. `Mises en surbrillance` Liste des extraits de mise en surbrillance correspondent.
8. `Page réelle` La page réelle des résultats de recherche renvoyée.

## Exploration approfondie des filtres

Cette section s'applique aux éléments visuels suivants:

- [Omnisearch](#omnisearch)
- [Obtenir des facettes](#get-facets)

Que vous souhaitiez filtrer par un seul menu déroulant ou appliquer 12 critères différents avec des dépendances conditionnelles, notre capacité de filtrage est suffisamment flexible pour répondre à la plupart des besoins. La chose la plus importante à savoir est que notre entrée `Filtres` existe pour accomplir un objectif:

> **Faire d'une chaîne de texte quelque chose que votre fournisseur de recherche peut interpréter comme des filtres.**

C'est la grande idée. Nos fournisseurs de recherche s'attendent à des chaînes de filtres contenant des opérateurs booléens, des comparaisons numériques, du GeoJSON, et plus encore - donc pour s'adapter à cela, nous avons fait en sorte que notre entrée `Filtres` s'attende à du JavaScript. Si vous connaissez l'élément `Expression` du [plugin Toolbox](https://bubble.io/plugin/1488796042609x768734193128308700), alors vous devriez vous sentir comme chez vous en utilisant ceci.

Les exemples qui suivront vous permettront de filtrer avec Omnisearch, en commençant simplement puis en devenant plus complexes. Nous allons examiner des implémentations spécifiques aux fournisseurs de recherche, alors assurez-vous de cliquer sur le bon ci-dessous pour suivre.

### Faible complexité

<Tabs groupId="search-providers">
<TabItem value="Algolia" label="Algolia">

Ces exemples proviennent de notre démo de [Filtres Algolia](https://plugins.scious.io/omnisearch-filters-algolia). Consultez sa [page d'édition Bubble](https://bubble.io/page?version=live\&type=page\&name=omnisearch-filters-algolia\&id=scious-plugins\&tab=tabs-1) pour voir et interagir avec ceux-ci dans leur contexte.

**Voici.** Le filtre le plus simple que vous puissiez construire.

<BubblePropertyEditor title="Scioussearch Simple" searchProvider="Algolia">

```js
"usage_count<40"
```

</BubblePropertyEditor>

Comme nous l'avons dit, le but de l'expression `Filtres` est de créer un ensemble d'instructions de filtre qu'Algolia peut comprendre. Ici, ce texte demande à Algolia de:

> Retourner tous les enregistrements où le `usage_count` est inférieur à `40`

Nous nous appuyons sur la syntaxe numérique d'Algolia [Filter by numeric syntax](https://www.algolia.com/doc/guides/managing-results/refine-results/filtering/how-to/filter-by-numeric-value/#applying-a-numeric-filter) pour accomplir ceci. Pour en savoir plus sur toutes les grammaires de filtrage d'Algolia, consultez leur [excellente documentation ici](https://www.algolia.com/doc/guides/managing-results/refine-results/filtering/).

Enfin, veuillez noter que les noms de champ eux-mêmes (c'est-à-dire `usage_count` ci-dessus) sont sensibles à la casse - ils doivent correspondre à la casse des noms de champ tels qu'ils sont écrits dans votre base de données Bubble.


<TabItem value="Typesense" label="Typesense">

Ces exemples proviennent de notre démo de filtre [Typesense](https://plugins.scious.io/omnisearch-filters-typesense). Consultez la [page de l'éditeur Bubble](https://bubble.io/page?version=live\&type=page\&name=omnisearch-filters-typesense\&id=scious-plugins\&tab=tabs-1) pour voir et interagir avec ces éléments dans leur contexte.

Voici. Le filtre le plus simple que vous puissiez construire.

<BubblePropertyEditor title="Scioussearch Simple" searchProvider="Typesense">

```js
"usage_count<40"
```

</BubblePropertyEditor>

Comme nous l'avons dit, l'objectif de l'expression `Filtres` est de créer un ensemble d'instructions de filtre que Typesense peut comprendre. Ici, ce texte demande à Typesense de :

> Renvoyer tous les enregistrements où le `usage_count` est inférieur à `40`

Nous nous appuyons sur la syntaxe de filtrage numérique de Typesense pour accomplir cela. Pour en savoir plus sur toutes les grammaires de filtrage de Typesense, consultez leur [excellente documentation ici](https://typesense.org/docs/latest/api/search.html#filter-parameters).

Enfin, veuillez noter que les noms de champ eux-mêmes (c'est-à-dire `usage_count` ci-dessus) sont sensibles à la casse - ils doivent correspondre à la casse des noms de champ tels qu'ils sont écrits dans votre base de données Bubble.




### Complexité moyenne

<Tabs groupId="search-providers">
<TabItem value="Algolia" label="Algolia">

Cet exemple suivant utilise l'opérateur ternaire de Javascript pour conditionnellement construire un texte de filtre.

<BubblePropertyEditor title="Scioussearch mid complexity" searchProvider="Algolia">

```js
var categories_filter = (Multidropdown Categories value:count > 0) ? "categories:'Multidropdown Categories value:each items Display join with ' AND categories:''": ""

categories_filter
```

</BubblePropertyEditor>

Analysons cela. Nous demandons à Algolia de :

> Renvoyer tous les enregistrements où le champ `catégories` contient tous les éléments de `Multidropdown Categories`, mais uniquement si `Multidropdown Categories` a au moins une valeur sélectionnée.

Si nous devions construire ce filtre dans la recherche native de Bubble, nous effectuerions une `Recherche pour` et cocherions `Ignorer les contraintes vides` pour ignorer `Multidropdown Categories` lorsqu'il est vide.

L'opérateur ternaire de Javascript [opérateur ternaire](https://www.javascripttutorial.net/javascript-ternary-operator/) est notre moyen d'accomplir la même chose. C'est une forme condensée d'une déclaration `if`... `sinon`... et ça ressemble à ça :

```js
var notre_variable = (some_condition) ? "valeur_A" : "valeur_B"
```

Ce qui se passe ici, c'est que lorsque `some_condition` est vrai, alors `notre_variable` se verra attribuer le texte `"valeur_A"`. Sinon, il se verra attribuer `"valeur_B"`.

Ainsi, dans notre exemple,

```js
var categories_filter = (Multidropdown Categories value:count > 0) ? "categories:'Multidropdown Categories value:each items Display join with ' AND categories:''": ""
categories_filter
```

nous vérifions si `Multidropdown Categories value:count > 0`.

- **S'il est zéro**, alors nous assignons le texte vide `""` à `categories_filter`. En conséquence, Algolia n'appliquera aucun filtre à nos résultats de recherche.
- **S'il est supérieur à zéro**, ici nous voulons finalement créer un texte qui ressemble à quelque chose comme

  > `"categories:'technique' ET categories:'réseau social'"`

  Donc pour faire ça, nous :

  - commençons par la phrase `categories:'`
  - ajoutons `' ET categories:'` à chaque élément `Multidropdown Categories value`
  - et terminons la chaîne par un seul guillemet `'`

  Mettons tout cela ensemble, et cela ressemble à :

  > `"categories:'Multidropdown Categories value:each items Display join with ' AND categories:''"`

Avec la variable `categories_filter` entièrement définie, la dernière chose à faire dans l'entrée `Filtres` est de spécifier la variable que nous voulons renvoyer. Comme nous n'avons qu'une seule variable de filtre, `categories_filter`, c'est celle que nous spécifions.

Pour conclure, dans cet exemple nous nous sommes appuyés sur [l'opérateur booléen d'Algolia](https://www.algolia.com/doc/guides/managing-results/refine-results/filtering/in-depth/combining-boolean-operators/) pour `ET` plusieurs filtres de catégorie ensemble. Que nos valeurs source proviennent d'un Multidropdown, d'une Intersection de liste, ou de toute autre liste, vous pouvez utiliser la même approche pour créer des filtres qui renvoient des enregistrements correspondant à TOUS les éléments d'un champ de liste. Notez qu'Algolia a également l'opérateur booléen `OU` qui peut être utilisé pour renvoyer des enregistrements correspondant à N'IMPORTE QUEL élément d'un champ de liste. Ils ont aussi un opérateur `NOT` qui, avec `ET` et `OU`, peut être enchaîné et ciblé en utilisant des parenthèses `()` pour créer des filtres encore plus sophistiqués.


<TabItem value="Typesense" label="Typesense">

Cet exemple suivant utilise l'opérateur ternaire de Javascript pour conditionnellement construire un texte de filtre.

<BubblePropertyEditor title="Scioussearch mid complexity" searchProvider="Typesense">

```js
var categories_filter = (Multidropdown Categories value:count > 0) ? "categories:='Multidropdown Categories value:each items Display join with ' && categories:''": ""

categories_filter
```

</BubblePropertyEditor>

Analysons cela. We're asking Typesense to:

> Return all records where the `categories` field contains all of the items from `Multidropdown Categories`, but only if `Multidropdown Categories` has at least one value selected.

If we were to build this filter in Bubble's native search, we'd `Do a search for` and check `ignore empty constraints` to ignore the `Multidropdown Categories` when empty.

Javascript's [ternary operator](https://www.javascripttutorial.net/javascript-ternary-operator/) is our way of accomplishing the same thing. It's a condensed form of an `if`... `else`... statement and it looks like this:

```js
var our_variable = (some_condition) ? "value_A" : "value_B"
```

What happens here is when `some_condition` is true, then `our_variable` will be assigned the text `"value_A"`. Otherwise it will be assigned `"value_B"`.

So in our example,

```js
var categories_filter = (Multidropdown Categories value:count > 0) ? "categories:='Multidropdown Categories value:each items Display join with ' && categories:''": ""
categories_filter
```

we check if `Multidropdown Categories value:count > 0`.

- **If it is zero**, then we assign the empty text `""` to `categories_filter`. As a result, Typesense will not apply any filters to our search results.
- **If it is greater than zero**, here we ultimately want to make text that looks something like

  > `"categories:='technical' && categories:='social network'"`

  So to do that, we:

  - start with the phrase `categories:='`
  - append `' && categories:='` to each `Multidropdown Categories value`
  - and finish off the string with a single quotation mark `'`

  Put it all together, and that looks like:

  > `"categories:='Multidropdown Categories value:each items Display join with ' && categories:''"`

With the `categories_filter` variable completely defined, the last thing to do in the `Filters` input is state the variable we want to return. Since we only have one filter variable, `categories_filter`, that's the one we state.

To close, in this example we leaned on [Typesense's Boolean Operator](https://typesense.org/docs/latest/api/search.html#filter-parameters) syntax to `&&` multiple category filters together. Whether our source values come from a Multidropdown, a List Intersection, or some other list, you can use the same approach to make filters that return records matching ALL items within a list field. Note that Typesense also has the boolean operator `||` which can be used to return records that match ANY items within a list field. Their `&&` and `||` operators can be chained and scoped using parenthesis `()` to craft even more sophisticated filters.




### High-ish Complexity

<Tabs groupId="search-providers">
<TabItem value="Algolia" label="Algolia">

Let's combine multiple filters.

<BubblePropertyEditor title="Scioussearch high-ish complexity" searchProvider="Algolia">

```js
var categories_filter = (Multidropdown Categories value:count > 0) ? " AND categories:'Multidropdown Categories value:each items Display join with ' AND categories:''": ""

var usage_filter = " AND usage_count:SliderInput Usage Counts value:min TO SliderInput Usage Counts value:max"

// Format our condition so that yes is "true" and no is 'false'
var open_source_filter = " AND published_open_source:Checkbox Is open source is checked:formatted as text"

var filters = categories_filter + usage_filter + open_source_filter

filters
```

</BubblePropertyEditor>

Our three filters are as follow:

1. The `Multidropdown Categories` filter from our last example.
2. A `usage_count` filter using [Algolia's numeric range](https://www.algolia.com/doc/guides/managing-results/refine-results/filtering/how-to/filter-by-numeric-value/#filtering-by-price-range) filter syntax.
3. A `published_open_source` filter using [Algolia's boolean filter](https://www.algolia.com/doc/guides/managing-results/refine-results/filtering/how-to/filter-by-boolean/#applying-a-boolean-filter) syntax. If the relevant checkbox is checked, then we format it's value as a text where `'yes'` is `true` and `'no'` is `false` (since that's what Algolia expects).

With all three filter texts defined, we then concatenate them together into the variable `filters` using Javascript's `+` operator. Finally, we write `filters` so that our visual element knows it's the variable containing our full filter text.

Readers may notice we start each filter with the phrase `" AND "`. As mentioned in our mid-complexity example, this is done so that when our filter strings are appended to each other, there's an AND in between them just the way Algolia expects. Of course, if your use case merits something else - you can also use `OR` or `NOT` as [Algolia allows](https://www.algolia.com/doc/guides/managing-results/refine-results/filtering/in-depth/combining-boolean-operators/).


<TabItem value="Typesense" label="Typesense">

Let's combine multiple filters.

<BubblePropertyEditor title="Scioussearch high-ish complexity" searchProvider="Typesense">

```js
var categories_filter = (Multidropdown Categories value:count > 0) ? " && categories:='Multidropdown Categories value:each items Display join with ' && categories:=''": ""

var usage_filter = " && usage_count:[SliderInput Usage Counts value:min..SliderInput Usage Counts value:max]"

// Format our condition so that yes is "true" and no is 'false'
var open_source_filter = " && published_open_source:=Checkbox Is open source is checked:formatted as text"

var filters = categories_filter + usage_filter + open_source_filter

filters
```

</BubblePropertyEditor>

Our three filters are as follow:

1. The `Multidropdown Categories` filter from our last example.
2. A `usage_count` filter using [Typesense's numeric range](https://typesense.org/docs/latest/api/search.html#filter-parameters) filter syntax.
3. A `published_open_source` filter using [Typesense's boolean filter](https://typesense.org/docs/latest/api/search.html#filter-parameters) syntax. If the relevant checkbox is checked, then we format it's value as a text where `'yes'` is `true` and `'no'` is `false` (since that's what Typesense expects).

With all three filter texts defined, we then concatenate them together into the variable `filters` using Javascript's `+` operator. Enfin, nous écrivons `filters` afin que notre élément visuel sache qu'il s'agit de la variable contenant notre texte de filtre complet.

Les lecteurs peuvent remarquer que nous commençons chaque filtre par la phrase `" && "`. Comme mentionné dans notre exemple de complexité moyenne, cela est fait de sorte que lorsque nos chaînes de filtres sont ajoutées les unes aux autres, il y a un && entre elles exactement comme Typesense s'y attend. Bien sûr, si votre cas d'utilisation mérite quelque chose d'autre - vous pouvez également utiliser `OR` car Typesense le permet.




### Entrée de filtre vs élément Expression de la boîte à outils

<Tabs groupId="search-providers">
<TabItem value="Algolia" label="Algolia">

Plus tôt, nous avons dit que l'entrée `Filters` se comporte comme l'élément `Expression` du [plugin Toolbox](https://bubble.io/plugin/toolbox-1488796042609x768734193128308700). En réalité, nous avons apporté quelques modifications en coulisses pour rendre l'écriture des filtres aussi facile que possible:

1. Si le texte de `Filters` résultant commence par la phrase `' AND '` ou `' OR '`, alors nous supprimons cette partie avant d'envoyer vos filtres à Algolia.

   Pour comprendre pourquoi, imaginez un filtre composé de deux opérateurs ternaires:

   ```js
   var mon_filtre = filtre_ternaire_a + filtre_ternaire_b
   ```

   Si `filtre_ternaire_a` est inactif en raison, par exemple, d'un menu déroulant Bubble vide, alors seul `filtre_ternaire_b` contribue à `mon_filtre`. Mais `filtre_ternaire_b` commence probablement par la phrase `AND` (ou `OR`) qui, si elle est envoyée à Algolia, causerait une erreur. Ainsi, pour maintenir l'ordre dans l'univers, nous supprimons ces phrases d'introduction.

2. Nous interprétons les apparitions **non citées** des phrases `yes` et `no` comme le booléen Javascript `true` et `false`, respectivement. Nous interprétons les apparitions **citées** des phrases `:yes` et `:no` comme la phrase `:true` et `:false`, respectivement. Ensemble, cela vous permet d'utiliser les expressions dynamiques `yes` / `no` de Bubble dans les filtres sans avoir à formater la valeur en `true` ou `false`, ce que s'attend à Algolia.

3. Nous interprétons les dates **non-citées** comme des timestamps UNIX (ms) comme suit:

   - `MMM D, YYYY h:mm a` La date **23 déc. 2023 22:31** se convertit en **1703392260000**. Il s'agit du format de date par défaut produit par les expressions dynamiques Bubble qui résolvent une date.
   - `MMMM D, YYYY h:mm a` La date **23 décembre 2023 22:31** se convertit en **1703392260000**.

   Cela vous permet d'utiliser les expressions de date dynamiques de Bubble dans les filtres sans avoir à vous rappeler d'`Extraire les timestamps UNIX (ms)`, ce à quoi Typesense s'attend.


<TabItem value="Typesense" label="Typesense">

Plus tôt, nous avons dit que l'entrée `Filters` se comporte comme l'élément `Expression` du [plugin Toolbox](https://bubble.io/plugin/toolbox-1488796042609x768734193128308700). En réalité, nous avons apporté quelques modifications en coulisses pour rendre l'écriture des filtres aussi facile que possible:

1. Si le texte de `Filters` résultant commence par la phrase `' && '` ou `' || '`, alors nous supprimons cette partie avant d'envoyer vos filtres à Typesense.

   Pour comprendre pourquoi, imaginez un filtre composé de deux opérateurs ternaires:

   ```js
   var mon_filtre = filtre_ternaire_a + filtre_ternaire_b
   ```

   Si `filtre_ternaire_a` est inactif en raison, par exemple, d'un menu déroulant Bubble vide, alors seul `filtre_ternaire_b` contribue à `mon_filtre`. Mais `filtre_ternaire_b` commence probablement par la phrase `AND` (ou `OR`) qui, si elle est envoyée à Typesense, causerait une erreur. Ainsi, pour maintenir l'ordre dans l'univers, nous supprimons ces phrases d'introduction.

2. Nous interprétons les apparitions **non citées** des phrases `yes` et `no` comme le booléen Javascript `true` et `false`, respectivement. Nous interprétons les apparitions **citées** des phrases `:yes` et `:no` comme la phrase `:true` et `:false`, respectivement. Ensemble, cela vous permet d'utiliser les expressions dynamiques `yes` / `no` de Bubble sans avoir à formater la valeur en `true` ou `false`, ce à quoi Typesense s'attend.

3. Nous interprétons les dates **non-citées** comme des timestamps UNIX (ms) comme suit:

   - `MMM D, YYYY h:mm a` La date **23 déc. 2023 22:31** se convertit en **1703392260000**. Il s'agit du format de date par défaut produit par les expressions dynamiques Bubble qui résolvent une date.
   - `MMMM D, YYYY h:mm a` La date **23 décembre 2023 22:31** se convertit en **1703392260000**.

   Cela vous permet d'utiliser les expressions de date dynamiques de Bubble dans les filtres sans avoir à vous rappeler d'`Extraire les timestamps UNIX (ms)`, ce à quoi Typesense s'attend.




<!-- <Tabs groupId="search-providers">
<TabItem value="Algolia" label="Algolia">

</TabItem>
<TabItem value="Typesense" label="Typesense">
</TabItem>
</Tabs> -->

:::tip

Voulez-vous voir vos `Filters` sans avoir à les imprimer dans une zone de texte? Ouvrez les outils de développement de votre navigateur (sur Windows, appuyez sur `CTRL`+`SHFT`+`i`, sur Mac appuyez sur `Option` + `⌘` + `i`) et vous verrez votre filtre de recherche imprimé dans la console. Les journaux de filtres ne sont imprimés qu'à la console dans les environnements de développement. Si vous voulez qu'ils apparaissent également en direct, vous pouvez inclure une instruction console.log() dans le javascript de votre filtre. Bien sûr, cela doublerait de tels journaux dans vos environnements de développement.

:::

## Options avancées

<Tabs groupId="search-providers">
<TabItem value="Algolia" label="Algolia">

Cette section s'applique aux éléments visuels suivants:

- [Omnisearch](#omnisearch)
- [Obtenir des facettes](#get-facets)

Alors que les valeurs par défaut de recherche d'Algolia sont excellentes pour de nombreux cas d'utilisation, certaines applications peuvent bénéficier d'un ajustement des résultats de recherche. L'entrée `Options avancées` est l'endroit où nous pouvons effectuer de tels ajustements. Cette entrée accepte un dictionnaire JSON de deux types de paramètres:

1. Paramètres spécifiques à Algolia.
2. Paramètres spécifiques d'Omnisearch.

#### Paramètres d'Algolia

Pour la liste complète, consultez leur [documentation des paramètres de recherche](https://www.algolia.com/doc/api-reference/search-api-parameters/). Parmi ceux-ci, vous pouvez définir n'importe quel paramètre sauf les suivants (que nous utilisons et qui ne peuvent pas être remplacés) :

- `hitsPerPage`
- `attributesToRetrieve`
- `filters`
- `restrictSearchableAttributes`
- `attributesToHighlight`
- `highlightPreTag`
- `highlightPostTag`
- `page`

#### Paramètres d'Omnisearch

En interne, nous avons deux paramètres uniques pour contrôler la sortie des résultats de recherche :

1. `clearSciousSearch`

   Peut être `true` ou `false`. La valeur par défaut est `false`. Si `true`, alors `Résultats de recherche` est réglé sur une liste vide indépendamment de toute autre entrée. Ceci désactive effectivement l'élément visuel Omnisearch et devrait être utilisé au lieu de basculer la visibilité de l'élément.

2. `freezeSciousSearch`

   Peut être `true` ou `false`. La valeur par défaut est `false`. Si `true`, alors `Résultats de recherche` conservera l'état actuel - quoi que cela soit - quelles que soient les autres entrées. Ceci fige effectivement vos résultats de recherche.


<TabItem value="Typesense" label="Typesense">

Cette section s'applique aux éléments visuels suivants :

- [Omnisearch](#omnisearch)
- [Get Facets](#get-facets)

Alors que les paramètres de recherche par défaut de Typesense sont excellents pour de nombreux cas d'utilisation, certaines applications peuvent bénéficier d'un réglage des résultats de recherche. L'entrée `Options avancées` est l'endroit où nous pouvons effectuer de tels ajustements. Cette entrée accepte un dictionnaire JSON de deux types de paramètres :

1. Paramètres spécifiques de Typesense.
2. Paramètres spécifiques d'Omnisearch.

#### Paramètres de Typesense

Pour la liste complète, consultez leur [documentation des paramètres de recherche](https://typesense.org/docs/latest/api/search.html). Parmi ceux-ci, vous pouvez définir n'importe quel paramètre sauf les suivants (que nous utilisons et qui ne peuvent pas être remplacés) :

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

#### Paramètres d'Omnisearch

En interne, nous avons deux paramètres uniques pour contrôler la sortie des résultats de recherche :

1. `clear_scious_search`

   Peut être `true` ou `false`. Par défaut, `false`. Si `true`, alors `Résultats de recherche` est défini sur une liste vide, quelles que soient les autres entrées. Cela désactive effectivement l'élément visuel Omnisearch et il doit être utilisé à la place de basculer la visibilité de l'élément.

2. `freeze_scious_search`

   Peut être `true` ou `false`. Par défaut, `false`. Si `true`, alors `Résultats de la recherche` conservera l'état actuel - quoi que ce soit - quelles que soient les autres entrées. Cela gèle effectivement vos résultats de recherche.




## Déclencheur de saisie

Le déclencheur de saisie est utilisé pour alimenter instantanément de nouvelles valeurs dans l'élément visuel Omnisearch. Les raisons de construire cet élément sont triples:

1. Pour supprimer le délai que les saisies standard de Bubble ont entre le moment où un utilisateur tape et les valeurs des touches deviennent disponibles dans Bubble.
2. la nouvelle requête de recherche à chaque frappe fait augmenter le nombre de recherches mensuelles, vous permet de régler le taux auquel cette valeur pour réduire le nombre de requêtes de recherche en temps réel inutiles initiées par des requêtes tapées rapidement.

définir Pour exécuter une nouvelle recherche à chaque pression sur une touche d'entrée, définissez le `Délai de saisie` du Déclencheur de saisie sur `0` millisecon･･･ Alternativement, définissez

<Figure src="img/omnisearch/typing trigger.png" />

**Entrées**

1. `ID de l'élément de recherche` L'identifiant unique de l'élément d'entrée Bubble pertinen･･･
2. Le nombre de millisecondes entre les frappes de touche avant de récupérer de nouveaux résultats de recherche. Réglé sur `0` pour exécuter une nouvelle recherche à chaque frappe ou définissez cette valeur plus haute pour réduire le nombre de requêtes de recherche en temps réel inutiles initiées par des recherches tapées rapidement.
3. `Nombre de caractères` Le nombre minimum de caractères nécessaire dans une requête pour retourner des résultats de recherche.

**Sorties**

1. `Texte de sortie` La valeur textuelle actuelle de l'entrée avec ID `ID de l'élément de recherche`.
2. `En train de taper` Indicateur booléen qui bascule sur On puis Off à chaque fois qu'une touche est ajoutée à l'entrée de recherche référencée par `ID de l'élément de recherche`.

## Obtenir les types de données

Cet élément visuel n'a pas d'entrées.

**Sorties**

1. `Types de données` Les types de données de votre application Bubble sous forme de liste.
2. `Champs de type de données` Les champs de types de données de votre application Bubble sous forme de liste.
3. `ID du navigateur` Une sortie spécifique au développeur. L'ID de navigateur de l'utilisateur actuel. Utilisé pour verrouiller les capacités admin de synchronisation sur un appareil particulier. Sera supprimé dans les versions futures.

## Obtenir les Facettes

<Figure src="img/omnisearch/Get Facets.png" />

**Entrées**

1. `Fournisseur de recherche`
2. `Type de résultat` Type de données de résultat de recherche.
3. `Type de facette` Réglé sur le type "Facette (🔍)".
4. `Requête de recherche` Mots-clés à rechercher. Réglé sur la valeur de Déclencheur de saisie pour de meilleurs résultats.
5. `Champs à rechercher` Les champs Bubble à rechercher fournis sous forme de liste JSON.
6. `Champs de facette` Les champs Bubble à facettes fournis sous forme de liste JSON. Spécifie l'ordre des "Facettes" renvoyées.
7. `Filtres` Cette section vous permet de composer vos filtres en utilisant Javascript. Il fonctionne exactement comme l'entrée `Filtres` de l'élément visuel Omnisearch. Détails [here](#filters-deep-dive).
8. `Max valeurs par facette` Le nombre maximum de valeurs de facette renvoyées par facette.
9. `Requête de facette` Mots-clés à rechercher dans `Champs de facette`. Réglé sur le `Texte de sortie` du Déclencheur de saisie pour de meilleurs résultats.
10. `Options avancées` Options supplémentaires pour affiner les résultats de recherche. Il fonctionne exactement comme l'entrée `Options avancées` de l'élément visuel Omnisearch. Détails [ici](#options-avancées).

**Résultats**

1. `Returned error` Un Oui/Non indiquant s'il y a eu une erreur.
2. `Error description` Texte supplémentaire décrivant l'erreur.
3. `Facettes` Les éléments et statistiques des facettes pour chaque champ spécifié dans `Champs à facettes`.

## Appels API

Nous avons un seul appel API de données nommé `Facettes (🔍)`. Cet appel API ne renvoie aucune donnée utilisable. Il existe uniquement pour définir le type de données que l'élément visuel [Obtenir des Facettes](#get-facets) retourne. Ne pas utiliser cet appel API en dehors de l'élément visuel Obtenir des Facettes. Vous n'aimez pas que nous ayons fait cela ? Nous non plus. Montrez votre soutien pour résoudre ce problème en commentant et en votant pour [cette demande de fonctionnalité](https://bubble.io/ideaboard?idea=1603764356815x558406947894198300).

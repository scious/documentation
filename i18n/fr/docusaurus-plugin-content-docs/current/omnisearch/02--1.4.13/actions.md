---
sidebar_position: 4
---

import Figure from '../../components/figures'
import Arcade from '../../components/arcade'
import Highlight from '../../components/highlight'
import BubblePropertyEditor from '../../components/bubblePropertyEditor';
import Embed from '../../components/embed'

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Actions

## Sync Search Index

This is the action used to sync indices. While we've already set it up for you within our [sync admin template](https://plugins.scious.io/scious-search-admin), you can use it to make a custom search index administration page.

<Figure src="img/scious-search/Sync search record.png" />

**Inputs**

1. `Search Provider` The search provider you've synced your data with.
2. `Website Home URL` Decides which environment we're going to synchronize. In general, you'll want to enter Bubble's dynamic expression "Website Home URL" but you can build your various environment URLs seperately (say, to be selected from a dropdown) to feed this input.
3. `Data Type` The data type to sync.
4. `Fields to search` The Bubble fields to sync supplied as a JSON list. For example `['Author','Title','Created Date']`. If empty, then all columns will be synced. Empty is defined as nothing at all, `[]`, `['']`, or `[""]`. Any other value will result in an error.
5. `Fields to sort` The Bubble fields that your search results can be sorted by (supplied as a JSON list).
6. `Fields to facet` The Bubble fields that can be faceted (supplied as a JSON list).
7. `Fields to filter if empty` The Bubble fields that your search results can be filtered by if empty (supplied as a JSON list).

**Outputs**

1. `Returned error` A Yes/No indicating whether there was an error.
2. `Error description` Error details as a plain string or JSON encoded string.
3. `Result` Additional diagnostics data. Mainly used for development.

## Create search record

<Figure src="img/scious-search/Create search record.png" />

**Inputs**

1. `Search Provider` The search provider you've synced your data with.
2. `Website Home URL` Enter the dynamic expression "Website Home URL".
3. `Data Type` The data type to create a search record for.
4. `Record` The Bubble record to be created as a searchable record.

**Outputs**

1. `Returned error` A Yes/No indicating whether there was an error.
2. `Error description` Error details as a plain string or JSON encoded string.
3. `Result` Additional diagnostics data. Mainly used for development.

## Update search record

<Figure src="img/scious-search/update search record clean.png" />

**Inputs**

1. `Search Provider` The search provider you've synced your data with.
2. `Website Home URL` Enter the dynamic expression "Website Home URL".
3. `Data Type` The data type to create a search record for.
4. `Record` The Bubble record to be updated as a searchable record.

**Outputs**

1. `Returned error` A Yes/No indicating whether there was an error.
2. `Error description` Error details as a plain string or JSON encoded string.
3. `Result` Additional diagnostics data. Mainly used for development.

## Delete search record

<Figure src="img/scious-search/Delete search record.png" />

**Inputs**

1. `Search Provider` The search provider you've synced your data with.
2. `Website Home URL` Entrez l'expression dynamique "Website Home URL".
3. `Data Type` Le type de données pour créer un enregistrement de recherche.
4. `Record` L'enregistrement Bubble à supprimer de vos enregistrements de recherche.

**Résultats**

1. `Returned error` Un Oui/Non indiquant s'il y a eu une erreur.
2. `Error description` Détails de l'erreur sous forme de chaîne simple ou de chaîne encodée en JSON.
3. `Result` Données de diagnostics supplémentaires. Principal utilisé pour le développement.

## Actualiser les résultats de la recherche

<Figure src="img/scious-search/Refresh search results.png" />

Actualiser les résultats de recherche à partir d'un élément Omnisearch. Cette action est généralement utilisée directement après toute action de Créer ou Mettre à jour un enregistrement de recherche dans des scénarios où les utilisateurs devraient pouvoir constater l'effet de ces changements reflété dans les résultats de recherche.

**Entrées**

1. `Pause length (ms)` Le temps en millisecondes à attendre avant de rafraîchir les résultats de recherche.

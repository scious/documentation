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

## Synchroniser l'index de recherche

C'est l'action utilisée pour synchroniser les index. Bien que nous l'ayons déjà configuré pour vous dans notre [modèle d'administration de synchronisation](https://plugins.scious.io/omnisearch-admin), vous pouvez l'utiliser pour créer une page d'administration personnalisée de l'index de recherche.

<Figure src="img/omnisearch/Sync search record.png" />

**Inputs**

1. `Search Provider` Le fournisseur de recherche avec lequel vous avez synchronisé vos données.
2. `URL de la page d'accueil du site` Détermine dans quel environnement nous allons synchroniser. En général, vous voudrez saisir l'expression dynamique de Bubble "URL de la page d'accueil du site", mais vous pouvez construire vos différentes URLs d'environnement séparément (par exemple, à sélectionner dans une liste déroulante) pour alimenter cette entrée.
3. `Type de données` Le type de données à synchroniser.
4. `Champs à rechercher` Les champs Bubble à synchroniser fournis sous forme de liste JSON. Par exemple `['Auteur','Titre','Date de création']`. Si vide, alors toutes les colonnes seront synchronisées. Le vide est défini comme rien du tout, `[]`, `['']`, ou `[""]`. Toute autre valeur entraînera une erreur.
5. `Champs à trier` Les champs Bubble par lesquels vos résultats de recherche peuvent être triés (fournis sous forme de liste JSON).
6. `Champs à facettes` Les champs Bubble pouvant être mis en facettes (fournis sous forme de liste JSON).
7. `Champs à filtrer si vide` Les champs Bubble par lesquels vos résultats de recherche peuvent être filtrés si vides (fournis sous forme de liste JSON).

**Outputs**

1. `Erreur retournée` Un Oui/Non indiquant s'il y a eu une erreur.
2. `Description de l'erreur` Détails de l'erreur sous forme de chaîne de caractères simple ou de chaîne encodée en JSON.
3. `Résultat` Données de diagnostic supplémentaires. Principalement utilisé pour le développement.

## Créer un enregistrement de recherche

<Figure src="img/omnisearch/Create search record.png" />

**Inputs**

1. `Search Provider` Le fournisseur de recherche avec lequel vous avez synchronisé vos données.
2. `URL de la page d'accueil du site` Saisissez l'expression dynamique "URL de la page d'accueil du site".
3. `Type de données` Le type de données pour créer un enregistrement de recherche.
4. `Enregistrement` L'enregistrement Bubble à créer en tant qu'enregistrement consultable.

**Outputs**

1. `Erreur retournée` Un Oui/Non indiquant s'il y a eu une erreur.
2. `Description de l'erreur` Détails de l'erreur sous forme de chaîne de caractères simple ou de chaîne encodée en JSON.
3. `Résultat` Données de diagnostic supplémentaires. Principalement utilisé pour le développement.

## Mettre à jour l'enregistrement de recherche

<Figure src="img/omnisearch/update search record clean.png" />

**Inputs**

1. `Search Provider` Le fournisseur de recherche avec lequel vous avez synchronisé vos données.
2. `URL de la page d'accueil du site` Saisissez l'expression dynamique "URL de la page d'accueil du site".
3. `Type de données` Le type de données pour créer un enregistrement de recherche.
4. `Enregistrement` L'enregistrement Bubble à mettre à jour en tant qu'enregistrement consultable.

**Outputs**

1. `Erreur retournée` Un Oui/Non indiquant s'il y a eu une erreur.
2. `Description de l'erreur` Détails de l'erreur sous forme de chaîne de caractères simple ou de chaîne encodée en JSON.
3. `Résultat` Données de diagnostic supplémentaires. Principalement utilisé pour le développement.

## Supprimer l'enregistrement de recherche

<Figure src="img/omnisearch/Delete search record.png" />

**Inputs**

1. `Search Provider` Le fournisseur de recherche avec lequel vous avez synchronisé vos données.
2. `Website Home URL` Entrez l'expression dynamique "Website Home URL".
3. `Data Type` Le type de données pour créer un enregistrement de recherche.
4. `Record` L'enregistrement Bubble à supprimer de vos enregistrements de recherche.

**Résultats**

1. `Returned error` Un Oui/Non indiquant s'il y a eu une erreur.
2. `Error description` Détails de l'erreur en tant que chaîne simple ou chaîne encodée en JSON.
3. `Result` Données de diagnostics supplémentaires. Principal utilisé pour le développement.

## Actualiser les résultats de recherche

<Figure src="img/omnisearch/Refresh search results.png" />

Actualiser les résultats de recherche à partir d'un élément Omnisearch. Cette action est généralement utilisée directement après une action Créer ou Mettre à jour un enregistrement de recherche dans des scénarios où les utilisateurs devraient pouvoir voir l'effet de ces changements reflété dans les résultats de recherche.

**Entrées**

1. `Pause length (ms)` Le temps en millisecondes à attendre avant de rafraîchir les résultats de recherche.

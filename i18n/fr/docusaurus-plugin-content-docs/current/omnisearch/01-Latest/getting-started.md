---
sidebar_position: 2
---

import Figure from '../../components/figures'
import Arcade from '../../components/arcade'
import VideoGIF from '../../components/videogifs'
import Highlight from '../../components/highlight'
import BubblePropertyEditor from '../../components/bubblePropertyEditor';
import Embed from '../../components/embed'

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Commencer

## Configuration du plugin

Vous utiliserez Omnisearch en moins de 20 minutes. Pour commencer, nous avons besoin de quelques choses :

1. [Installer le plugin](#install-plugin).
2. [Obtenir la clé API Omnisearch](#get-omnisearch-api-key).
3. [Activer votre API de données](#enable-data-api)
4. [Obtenez les clés API de votre fournisseur de recherche](#get-search-provider-api-keys).
5. [Synchronisez votre base de données](#sync-your-database).

### Installer le plugin

Rendez-vous sur votre onglet plugin, recherchez _<Highlight color="#25c2a0">"Omnisearch"</Highlight>_ et installez.

<VideoGIF src="https://s3.amazonaws.com/appforest_uf/f1669532176275x365303613975589400/Install%20scious%20search%20compressed.mp4" />

### Obtenir la clé API Omnisearch

Ensuite, allez sur [https://scious.io/plugins](https://scious.io/plugins) > faites défiler jusqu'à `Omnisearch` > tapez sur `Obtenir la clé API` > et entrez votre email pour vous connecter / créer un compte. Cela vous enverra un lien de connexion par email alors vérifiez votre dossier spam si vous ne le voyez pas. Dans cet email, tapez sur `Connectez-vous maintenant →` pour être redirigé vers le tableau de bord de la clé API Omnisearch. Ici, vous devrez remplir les détails de votre compte tels que le prénom et le nom de famille. Ensuite, naviguez jusqu'à `Obtenir la clé API pour l'application Bubble` > et remplissez le `URL de l'application Bubble` pour l'application avec laquelle vous souhaitez utiliser Omnisearch. Ensuite, tapez sur l'une des options d'abonnement et complétez votre paiement (les nouveaux utilisateurs bénéficient d'un essai gratuit de 10 jours, très facile à annuler).

À ce stade, vous verrez ce qui suit :

<Figure src="img/omnisearch/Omnisearch api keys.png" />

Copiez `Search Admin Key` et `Search App ID` puis, dans votre éditeur d'application Bubble, naviguez jusqu'à l'onglet `Plugins` > plugin `Omnisearch` > et collez ces valeurs dans leurs sections, comme ceci :

<Figure src="img/omnisearch/Omnisearch config plugin keys.png" />

:::tip

Les clés API sont transférables. Si vous souhaitez utiliser Omnisearch dans une autre application, mettez à jour `URL de l'application Bubble` en conséquence > tapez sur `Remplacer la clé` pour générer une nouvelle clé API, et enfin ajoutez cette nouvelle `Search Admin Key` et le `Search App ID` à la page de configuration du plugin dans votre application.

:::

### Activer l'API de données

Dans votre éditeur Bubble, tapez sur `Paramètres` > onglet `API` > puis cochez `Activer l'API de données`. Ci-dessous, vous verrez une liste de types de données que vous pouvez rendre disponibles via l'API de données - cochez tous ceux que vous souhaitez rechercher avec notre plugin. Si vous n'êtes pas sûr des types à activer, vous pouvez toujours revenir à cela.

Ensuite, assurez-vous que `Utiliser l'affichage des champs au lieu de l'ID pour les noms de clés` est activé. À présent, votre écran ressemblera à quelque chose comme cela :

<Figure src="img/omnisearch/Data api setup.png" />

Toujours sur l'onglet `API` > ensuite faites défiler jusqu'à la section `Jetons API` > tapez sur `Générer un nouveau jeton api` > et tapez sur la `clé privée` fournie pour la copier. Nous devons ajouter cela au plugin Omnisearch alors ensuite appuyez sur votre onglet `Plugins` > faites défiler jusqu'à `Omnisearch` et collez la clé privée comme `Clé API Admin Bubble`. Votre page de configuration du plugin ressemblera maintenant à ceci :

<Figure src="img/omnisearch/Omnisearch config bubble admin key.png" />

### Obtenir les clés API du fournisseur de recherche

<!-- <Tabs groupId="search-providers">
  <TabItem value="Algolia" label="Algolia">

  </TabItem>
  <TabItem value="Typesense" label="Typesense">

  </TabItem>
</Tabs> -->

<Tabs groupId="search-providers">
<TabItem value="Algolia" label="Algolia">

:::warning

Si vous avez déjà une application Algolia existante avec des données, créez d'abord une nouvelle application avant de poursuivre ce tutoriel. Notre étape de synchronisation **écrasera les indices du même nom** dans l'application sélectionnée. Une fois créée, utilisez les clés API et l'ID de la nouvelle application dans l'étape suivante.

:::

Les intégrations Algolia nécessitent trois choses : un `Application ID`, `Search API Key` et un `Admin API Key`. Pour les obtenir, [connectez-vous à Algolia](https://www.algolia.com/) > naviguez jusqu'à `Paramètres` dans le coin inférieur gauche de votre écran :

<Figure src="img/omnisearch/nav to settings.png" />

puis > tapez sur `Clés API` :

<Figure src="img/omnisearch/click on api keys.png" />

Si vous venez de créer un compte Algolia, les champs dont nous avons besoin seront listés ainsi :

<Figure src="img/omnisearch/algolia keys.png" />

<!-- <Figure caption="In the top left corner click `Application` > then `Create Application`." src="img/omnisearch/create algolia application.png" /> -->

Enfin, dans votre éditeur Bubble, naviguez jusqu'à `Plugins` > `Omnisearch` > puis collez `Application ID`, `Search Only API Key` et `Admin API Key` dans les champs de configuration du plugin Omnisearch pour Algolia.

<Figure src="img/omnisearch/Omnisearch config algolia.png" />


<TabItem value="Typesense" label="Typesense">

:::warning

Si vous avez déjà un cluster Typesense existant avec des données, créez d'abord un nouveau cluster avant de poursuivre ce tutoriel. Notre étape de synchronisation **écrasera les indices du même nom** dans l'application sélectionnée. Une fois créé, utilisez les clés API et l'hôte du nouveau cluster dans l'étape suivante.

:::

Les intégrations Typesense nécessitent trois choses : un `Host`, `Search API Key` et un `Admin API Key`. Pour les obtenir, [connectez-vous à Typesense](https://cloud.typesense.org/bubble) > puis créez un nouveau cluster avec la configuration par défaut en tapant sur `Clusters` dans la barre de navigation > puis `+ New Cluster` et enfin `Launch`. Après que votre cluster soit provisionné, cliquez sur `Generate API Keys` :

<Figure src="img/omnisearch/click get typesense keys.png" />

Lorsqu'on vous le demande, sauvegardez le fichier `.txt` généré dans un endroit sûr > puis ouvrez-le. Les champs dont nous avons besoin seront listés comme suit :

<Figure src="img/omnisearch/typesense api keys file.png" />

Enfin, dans votre éditeur Bubble, naviguez jusqu'à `Plugins` > `Omnisearch` > puis collez la `Search Only API Key`, `Admin API Key` et `Node`/`Host` dans les champs de configuration du plugin Omnisearch pour Typesense.

<Figure src="img/omnisearch/Omnisearch config typesense.png" />




### Synchronisez votre base de données

:::warning

Si vous avez déjà un index Algolia (ou Typesense) avec des données, assurez-vous de créer une nouvelle application Algolia (ou un cluster Typesense) et définissez son ID dans l'onglet de configuration du plugin Omnisearch. Sinon, les **étapes suivantes peuvent écraser les indices existants**.

:::

Nous fournissons une action `Sync Search Index` pour répliquer les données de votre application Bubble vers votre fournisseur de recherche. Bien que vous puissiez utiliser cela pour créer votre propre page d'administration de synchronisation, nous avons déjà construit un modèle `Search Admin Dashboard` que vous pouvez copier dans votre application pour vous aider à démarrer. Le modèle [ressemble à ceci](https://plugins.scious.io/omnisearch-admin). Commençons par en faire le tour, en suivant la démonstration ci-dessous.

<Arcade src="https://demo.arcade.software/9svSsMqR779w8ebVNCv4?embed" />

Maintenant que vous avez une idée de l'apparence et de la convivialité du Search Admin Dashboard, ajoutons-le à votre application. Suivez ces directives. Vers le milieu, il vous sera demandé d'ouvrir notre `Admin Dashboard Template` - le lien vers notre éditeur pour cela [est ici](https://bubble.io/page?version=live\&type=page\&name=omnisearch-admin\&id=scious-plugins\&tab=tabs-1). Vous serez dirigé à copier le groupe `Group Search Admin Dashboard` "avec les workflows" et "Coller avec les workflows" dans votre application.

<Arcade src="https://demo.arcade.software/ibtoHyvfJMfcM3N97F9W?embed" />

Par défaut, ce modèle synchronisera le type de données sélectionné pour l'environnement actuel dans lequel il est utilisé (`test`, `live` ou autre). Cela signifie que la synchronisation d'autres environnements nécessite le chargement du `Search Admin Dashboard` pour cet environnement et ensuite la synchronisation au besoin. Bien sûr, vous pouvez modifier cela pour fonctionner comme vous le souhaitez - par exemple, pour synchroniser n'importe quel environnement à partir de l'environnement `test` via un menu déroulant. Nous laissons l'implémentation de telles modifications aux utilisateurs finaux.

## Implémentez la recherche

Une fois que vous avez synchronisé les types de données qui vous intéressent, nous pouvons commencer à les rechercher ! C'est aussi simple que de placer notre [élément visuel Omnisearch](./visual-elements#omnisearch) sur votre page (une page autre que votre page `sync-admin`), en précisant :

- `Search Provider`
- `Result type`
- `Fields to search`

et enfin en affichant les `Search Results` de l'élément visuel dans un groupe répétitif. Nous sommes activement en train de créer une démonstration comme celles mentionnées ci-dessus pour démontrer cela et nous mettrons à jour cette section pour mieux l'illustrer prochainement. En attendant, consultez l'un des éléments visuels Omnisearch [de notre démo](https://bubble.io/page?version=live\&type=page\&name=omnisearch\&id=scious-plugins\&tab=tabs-1) pour voir exactement comment cela est configuré.

## Gardez votre index de recherche synchronisé

Une fois que votre index de recherche et le type de données qui vous intéresse sont synchronisés, la meilleure façon de _les maintenir_ synchronisés consiste à créer, mettre à jour ou supprimer des enregistrements de recherche individuels à mesure que les enregistrements pour ce type de données sont créés, mis à jour ou supprimés.

Puisque nous commençons, un moyen facile de faire cela est de :

- Créer un déclencheur backend (de quel(s) type(s) de données que vous téléchargez souvent) dont la condition est de s'exécuter lorsque le `unique_id` d'avant est vide et maintenant le `unique_id` n'est pas vide. Cela aura pour effet de déclencher chaque fois qu'un nouvel enregistrement de cette chose est créé dans votre application Bubble.
- En tant qu'action dans le déclencheur ci-dessus, créez maintenant un enregistrement de recherche.

C'est tout. Maintenant, chaque fois que vous créerez un enregistrement, ce workflow se déclenchera et créera un nouvel enregistrement de recherche. Vous pouvez configurer des déclencheurs similaires pour mettre à jour un enregistrement de recherche. Nous avons vu cette approche fonctionner efficacement en production. Cela dit, puisque cette approche repose sur un déclencheur backend, qui ajoute naturellement un petit délai à l'exécution de cet ensemble d'actions, vous pouvez plutôt vouloir créer / mettre à jour vos enregistrements de recherche alors que vous créez / mettez à jour les types de données côté client. Pour ce faire, vous suivrez simplement toute action de création / modification de type de données dans vos workflows réguliers avec l'une de nos actions de création / mise à jour d'enregistrement de recherche. Cela garantit que vos indices de recherche sont à jour en moyenne dans les 3 secondes.

## Quand resynchroniser les indices de recherche

- **Après la mise à jour des versions du plugin**. Cela garantit que votre index de recherche et votre plugin sont toujours correctement configurés car, de temps en temps, nous changeons la manière dont les indices sont construits et référencés.
- **Après avoir modifié le nom de n'importe quel champ pertinent pour une recherche.** Un champ est pertinent s'il est utilisé pour filtrer, rechercher ou trier des enregistrements. Plus précisément, cela s'étend à :
  - **Nom du type de données**
  - **Champ du type de données**
  - **Nom du jeu d'options**
  - **Nom de l'option** mais changer les autres attributs d'une option ne nécessite pas de resynchronisation.
- **Après avoir changé votre nom de domaine**. Vous devrez également mettre à jour votre clé API Omnisearch, [voir ici ⤴ ](#get-omnisearch-api-key).

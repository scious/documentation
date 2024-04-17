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

# Getting started

## Plugin setup

You'll be using Scious Search in less than 20 minutes. To start we need a few things:

1. [Install plugin](#install-plugin).
2. [Get Scious Search API Key](#get-scious-search-api-key).
3. [Enable your data API](#enable-data-api)
4. [Get your Search Provider's API keys](#get-search-provider-api-keys).
5. [Sync your database](#sync-your-database).

### Install plugin

Head on over to your plugin tab, search _<Highlight color="#25c2a0">"scious search"</Highlight>_ and install.

<VideoGIF src="https://s3.amazonaws.com/appforest_uf/f1669532176275x365303613975589400/Install%20scious%20search%20compressed.mp4" />

### Get Scious Search API key

Next, go to [https://scious.io/plugins](https://scious.io/plugins) > scroll to `Scious Search` > tap `Get API Key` > and enter your email to sign in / make an account. This will email you a login link so check your spam folder if you're not seeing one. Within that email, tap `Sign in now →` to be taken to the Scious Search API key dashboard. Here, you'll need to fill out your account details such as first and last name. Then, navigate to `Get API key for bubble app` > and fill in the `Bubble app URL` for the app you want to use Scious Search with. Next, tap one of the subscribe options and complete your payment (new users get a 10 day, very easy to cancel, free trial).

At this point, you'll see the following:

<Figure src="img/scious-search/Scious search api keys.png" />

Copy `Search Admin Key` and the `Search App ID` then, in your Bubble app editor, navigate to the `Plugins` tab > `Scious Search` plugin > and paste those values into their sections, like so:

<Figure src="img/scious-search/Scious search config plugin keys.png" />

:::tip

API keys are transferrable. If you want to use Scious Search in another app, then update `Bubble app URL` accordingly > tap `Replace key` to generate a new API key, and finally add that new `Search Admin Key` and the `Search App ID` to the plugin configuration page in your app.

:::

### Enable data API

In your bubble editor, tap `Settings` > `API` tab > and then check `Enable Data API`. Below this you'll see a list of data types you can make available via the data API - check all the ones you'll want to search with our plugin. If you're not sure about which ones to enable, then you can always come back to this.

Next, ensure that `Use field display instead of ID for key names` is enabled. By now, you're screen will look something like:

<Figure src="img/scious-search/Data api setup.png" />

While still on the `API` tab > next scroll down to the `API tokens` section > tap `Generate a new api token` > and tap on the `private key` provided to copy it. We need to add this to the Scious Search plugin so next press on your `Plugins` tab > scroll to `Scious Search` and paste the private key as the `Bubble Admin API Key`. Your plugin configuration page will now look like:

<Figure src="img/scious-search/Scious search config bubble admin key.png" />

### Get search provider API keys

<!-- <Tabs groupId="search-providers">
  <TabItem value="Algolia" label="Algolia">

  </TabItem>
  <TabItem value="Typesense" label="Typesense">

  </TabItem>
</Tabs> -->

<Tabs groupId="search-providers">
<TabItem value="Algolia" label="Algolia">

:::warning

If you already have an existing Algolia application with data in it, then first create a new application before proceeding with the remainder of this tutorial. Our synchronization step **will overwrite same named indices** in the selected application. Once created, use the new application's API keys and ID in the following step.

:::

Algolia integrations require three things: an `Application ID`, `Search API Key` and an `Admin API Key`. To get these, [log into Algolia](https://www.algolia.com/) > navigate to `Settings` on the bottom left corner of your screen:

<Figure src="img/scious-search/nav to settings.png" />

then > tap `API Keys`:

<Figure src="img/scious-search/click on api keys.png" />

If you've just created an Algolia account then the fields we need will be listed like so:

<Figure src="img/scious-search/algolia keys.png" />

<!-- <Figure caption="In the top left corner click `Application` > then `Create Application`." src="img/scious-search/create algolia application.png" /> -->

Finally, in your bubble editor, navigate to `Plugins` > `Scious Search` > then paste the `Application ID`, `Search Only API Key` and `Admin API Key` into the Scious Search plugin configuration fields for Algolia.

<Figure src="img/scious-search/Scious search config algolia.png" />


<TabItem value="Typesense" label="Typesense">

:::warning

If you already have an existing Typesense cluster with data in it, then first create a new cluster before proceeding with the remainder of this tutorial. Our synchronization step **will overwrite same named indices** in the selected application. Once created, use the new cluster's API keys and host in the following step.

:::

Typesense integrations require three things: a `Host`, `Search API Key` and an `Admin API Key`. To get these, [log into Typesense](https://cloud.typesense.org/bubble) > then create a new cluster with the default configuration by tapping `Clusters` in the nav bar > then `+ New Cluster` and finally `Launch`. After your cluster is provisioned, click `Generate API Keys`:

<Figure src="img/scious-search/click get typesense keys.png" />

When prompted, save the generated `.txt` file to a secure location > then open it. Les champs dont nous avons besoin seront répertoriés comme suit :

<Figure src="img/scious-search/typesense api keys file.png" />

Enfin, dans votre éditeur Bubble, allez à `Plugins` > `Scious Search` > puis collez les clés `Search Only API Key`, `Admin API Key` et `Node`/`Host` dans les champs de configuration du plugin Scious Search pour Typesense.

<Figure src="img/scious-search/Scious search config typesense.png" />




### Synchronisez votre base de données

:::warning

Si vous avez déjà un index Algolia (ou Typesense) avec des données, assurez-vous de créer une nouvelle application Algolia (ou un cluster Typesense) et définissez son ID dans l'onglet de configuration du plugin Scious Search. Sinon, les **étapes suivantes pourraient écraser les index existants**.

:::

Nous fournissons une action `Sync Search Index` pour refléter les données de votre application Bubble vers votre fournisseur de recherche. Bien que vous puissiez utiliser cela pour créer votre propre page d'administration de synchronisation, nous avons déjà construit un modèle `Search Admin Dashboard` que vous pouvez copier dans votre application pour démarrer. Le modèle [ressemble à ceci](https://plugins.scious.io/scious-search-admin). Analysons-le, tout d'abord, en suivant la démo ci-dessous.

<Arcade src="https://demo.arcade.software/9svSsMqR779w8ebVNCv4?embed" />

Maintenant que vous avez une idée de l'apparence et du fonctionnement du Tableau de bord d'administration de recherche, ajoutons-le à votre application. Suivez ces instructions. Vers le milieu, on vous demandera d'ouvrir notre `Modèle de Tableau de bord d'administration` - le lien vers notre éditeur pour ça [est ici](https://bubble.io/page?version=live\&type=page\&name=scious-search-admin\&id=scious-plugins\&tab=tabs-1). Vous serez invité à copier le groupe `Groupe Tableau de bord d'administration de recherche` "avec les workflows" et "Coller avec les workflows" dans votre application.

<Arcade src="https://demo.arcade.software/ibtoHyvfJMfcM3N97F9W?embed" />

Par défaut, ce modèle synchronisera le type de données sélectionné pour l'environnement actuel dans lequel il est utilisé (`test`, `live` ou autre). Cela signifie que la synchronisation avec d'autres environnements nécessite de charger le `Tableau de bord d'administration de recherche` pour cet environnement, puis de synchroniser selon les besoins. Bien sûr, vous pouvez modifier cela pour fonctionner comme vous le souhaitez - disons, pour synchroniser n'importe quel environnement depuis l'environnement `test` via un menu déroulant. Nous laissons la mise en œuvre de ces changements aux utilisateurs finaux.

## Implémentez la recherche

Une fois que vous avez synchronisé vos types de données d'intérêt, nous pouvons commencer à les rechercher ! C'est aussi simple que de placer notre [élément visuel Scious Search](./visual-elements#scious-search) sur votre page (une page autre que votre page `sync-admin`), en spécifiant :

- `Fournisseur de recherche`
- `Type de résultat`
- `Champs à rechercher`

et enfin afficher les `Résultats de recherche` de l'élément visuel dans un groupe répété. Nous créons actuellement une démo comme celles ci-dessus pour démontrer cela et mettrons bientôt à jour cette section pour mieux l'illustrer. En attendant, consultez l'un des éléments visuels Scious Search [de notre démo](https://bubble.io/page?version=live\&type=page\&name=scious-search\&id=scious-plugins\&tab=tabs-1) pour voir exactement comment cela est configuré.

## Maintenez votre index de recherche synchronisé

Une fois que votre index de recherche et votre type de données d'intérêt sont synchronisés, la meilleure façon de les _maintenir_ synchronisés est de créer, mettre à jour ou supprimer des enregistrements de recherche individuels au fur et à mesure que les enregistrements pour ce type de données sont créés, mis à jour ou supprimés.

Comme nous commençons, un moyen facile de faire cela est :

- Créez un déclencheur backend (du type de données que vous téléversez souvent) dont la condition est de s'exécuter lorsque la chose avant `unique_id` est vide et la chose maintenant` unique_id` n'est pas vide. Cela aura pour effet de se déclencher chaque fois qu'un nouvel enregistrement de cette chose est créé dans votre application Bubble.
- En tant qu'action dans le déclencheur ci-dessus, créez maintenant un enregistrement de recherche de recherche.

C'est tout. Maintenant, à chaque fois que vous créez un enregistrement, ce workflow se déclenchera et créera un nouvel enregistrement de recherche. Vous pouvez configurer des déclencheurs similaires pour mettre à jour un enregistrement de recherche. Nous avons vu que cette approche fonctionne bien en production. Cela dit, comme cette approche repose sur un déclencheur backend, qui ajoute naturellement un petit délai à l'exécution de cet ensemble d'actions, vous voudrez peut-être créer / mettre à jour vos enregistrements de recherche pendant que vous créez / mettez à jour des types de données côté client. Pour ce faire, vous suivrez simplement toute action de type de données de création / modification dans vos workflows réguliers avec l'une de nos actions de Créer / Mettre à jour un enregistrement de recherche. Cela garantit que vos index de recherche sont à jour dans un délai moyen de 3 secondes.

## Quand resynchroniser les index de recherche

- **Après avoir mis à niveau les versions du plugin**. Cela garantit que votre index de recherche et votre plugin sont toujours configurés correctement car, de temps en temps, nous changeons la manière dont les index sont construits et référencés.
- **Après avoir modifié tout nom de tout champ pertinent pour une recherche.** Un champ est pertinent s'il est utilisé pour filtrer, rechercher ou trier des enregistrements. Plus précisément, cela concerne :
  - **Nom de type de données**
  - **Champ de type de données**
  - **Nom de l'ensemble d'options**
  - **Nom de l'option** mais changer l'un des autres attributs d'une option ne nécessite pas une resynchronisation.
- **Après avoir changé votre nom de domaine**. Vous devrez également mettre à jour votre clé API de recherche Scious, [voir ici ⤴](#get-scious-search-api-key).

---
sidebar_position: 1
sidebar_label: Dernier
pagination_next: null
pagination_prev: null
---

import Figure from '../components/figures'

# TheirLabel [Dernier]

[Bubble](https://bubble.io?ref=i61dryk2) est une technologie que nous chez Scious avons appris à aimer. L'éthique derrière sa création - que vous ne devriez pas avoir besoin d'un doctorat en informatique pour construire un site web personnalisé - est excitante, démocratique et inspirante. Il y a beaucoup de bon design dans ce produit. Pour en énumérer quelques-uns, nous sommes vraiment impressionnés par l'API automatiquement provisionnée que l'on obtient la seconde après avoir créé une nouvelle application. Son authentification intégrée et la permission basée sur des règles est un jeu d'enfant à utiliser. Vous souhaitez changer le nom d'une clé dans votre base de données? D'accord, ce nom de clé a été automatiquement mis à jour dans les 56 endroits où vous l'avez utilisé dans la logique de votre application! Vous voulez sécuriser votre site? Appuyez sur un bouton et c'est fait. Toutes ces choses, et beaucoup d'autres, surmontent les obstacles principaux qui arrêtent même les programmeurs chevronnés de créer des sites sophistiqués.

Malgré toutes les belles choses, chaque outil a ses défauts. Une chose que Bubble (actuellement) ne possède pas est un moyen programmatique de partitionner des applications multi-locataires sur différents noms de domaine. Pour de nombreux utilisateurs de Bubble, cela peut ne pas être un problème, mais pour ceux qui rêvent de construire des applications SaaS, c'est un peu une épine. Étant l'un de ces rêveurs, nous avons décidé d'essayer de combler cette lacune. En conséquence, nous vous présentons **TheirLabel**.

# Démo

<nav className="pagination-nav">
  <div className="pagination-nav__item">
    <a className="pagination-nav__link" href="http://their-label.bubbleapps.io/version-test/">
      <div className="pagination-nav__sublabel">Démo du Plugin TheirLabel</div>
      <div className="pagination-nav__label">White-Labelling pour Bubble →</div>
    </a>
  </div>

  <div className="pagination-nav__item">
    <a className="pagination-nav__link" href="https://bubble.io/page?name=index&id=their-label&tab=tabs-1">
      <div className="pagination-nav__sublabel">Éditeur d'application Bubble</div>
      <div className="pagination-nav__label">Démonstration de l'éditeur →</div>
    </a>
  </div>


.
:::tip

Consultez l'éditeur de notre démo ci-dessus pour une excellente référence tout en intégrant notre plugin.

:::

## Commencer

Cette page sert de manuel officiel pour utiliser TheirLabel. Vous pouvez visiter [their-label.bubbleapps.io](https://their-label.bubbleapps.io/version-test) pour l'essayer avant de l'acheter. Pour obtenir de l'aide, vous pouvez toujours consulter [l'éditeur de TheirLabel](https://bubble.io/page?type=page\&name=index\&id=their-label\&tab=tabs-1) qui se documente exactement sur la manière de fournir à vos utilisateurs finaux un flux de marque blanche (en supposant que vous êtes déjà configuré comme indiqué ci-dessous). Si tout le reste échoue, veuillez demander de l'aide sur le forum.

Nous avons juste besoin de quelques éléments pour commencer à mettre en marque blanche votre application Bubble :

### Obtenez votre clé API Netlify

1. Rendez-vous sur [netlify.com](https://www.netlify.com/) et créez un nouveau compte. Ils vous enverront un e-mail que vous devrez ouvrir pour terminer la vérification de votre compte.
2. Une fois connecté, recherchez votre bouton de profil et cliquez dessus pour accéder à vos `Paramètres Utilisateur`... disponible dans le coin supérieur droit de votre écran.

<Figure src="https://blog.scious.io/content/images/2020/08/image-1.png" />

3. Cliquez sur l'onglet `Applications`

<Figure src="https://blog.scious.io/content/images/2020/08/image-3.png" />

4. Appuyez ensuite sur `Nouveau jeton d'accès`. Suivez les invites pour créer le jeton d'accès et enregistrez-le pour plus tard lorsque nous en aurons besoin pour l'ajouter au plugin TheirLabel.

<Figure src="https://blog.scious.io/content/images/2020/08/image-4.png" />

### Configurer le plugin TheirLabel

1. Dans votre application Bubble, accédez à l'onglet Plugins et appuyez sur `Ajouter des plugins`.
2. Recherchez `TheirLabel` et installez-le.
3. Accédez à l'onglet de configuration du plugin et collez le jeton d'accès que nous avons généré à l'étape 4 ci-dessus dans le champ `Token d'Accès Netlify`.
   4. Pour configurer le champ `Autorisation (en-têtes partagés)`, nous devons saisir la phrase `Bearer` suivi du même jeton d'accès, comme illustré ci-dessous (votre jeton devrait avoir l'air différent) :

<Figure src="https://blog.scious.io/content/images/2020/08/image-10.png" />

À ce stade, vous êtes maintenant prêt à utiliser les éléments et actions Bubble de TheirLabel pour mettre en marque blanche votre site de manière programmatique.

## Créez l'expérience de mise en marque blanche de vos utilisateurs finaux

Le [Test Drive](https://their-label.bubbleapps.io/version-test/) de TheirLabel montre une façon dont vous pouvez mettre en œuvre une expérience de mise en marque blanche pour les utilisateurs finaux :

<iframe width="100%" height="380" src="https://www.youtube.com/embed/oDErIcb6ZlA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

En fin de compte, l'apparence est entre vos mains, mais une implémentation devrait atteindre les objectifs suivants :

1. Provisionnez une marque blanche sur votre compte Netlify.
2. Associez l'URL Bubble unique de votre client à sa marque blanche provisionnée.
3. Fournissez à votre client les enregistrements A ou CNAME appropriés à ajouter dans leur fournisseur DNS.
4. Sécurisez en HTTPS le label blanc
5. Mettre à jour un label blanc
6. Supprimer un label blanc

Jetons un coup d'œil à la manière dont chacun de ces éléments est mis en œuvre dans le Test Drive de TheirLabel (apprenez-le plus rapidement en suivant dans l'[éditeur](https:\/\/bubble.io\/page?name=index\&id=their-label\&tab=tabs-1)).

### Provisionner un label blanc sur votre compte Netlify.

La toute première chose à faire est de provisionner un label blanc.

<Figure src="https://blog.scious.io/content/images/2020/08/image-8.png" />

Pour cela, vous aurez besoin de trois choses :

1. L'URL Bubble qui doit être blanchi-label.
2. Le domaine racine ou le nom du sous-domaine que votre client souhaite blanchir.
3. L'élément `Valider` de TheirLabel placé et visible sur votre page.

En pratique, vous connaîtrez déjà l'URL Bubble puisque c'est quelque chose que vous contrôlez. Par exemple, la démo de TheirLabel a une page `demande de fonctionnalité` (voir l'éditeur). En général, une URL unique pour cette page pour l'un de vos clients pourrait ressembler à quelque chose comme :

> [https:\/\/their-label.bubbleapps.io\/page_demande_fonctionnalite\/1596231081229x896733754840270100](https:\/\/their-label.bubbleapps.io\/version-test\/page_demande_fonctionnalite\/1596231081229x896733754840270100)

Mais votre client préférerait que cette page soit hébergée sur un sous-domaine qu'il possède, appelé :

> [smallbusinesscustomer.theirlabel.com](https:\/\/smallbusinesscustomer.theirlabel.com)

Ainsi, pour provisionner des labels blancs, vous connectez l'entrée du domaine label blanc de votre client (ci-dessous appelé `Nom de domaine que vous possédez`) à l'élément visuel `Valider` de TheirLabel.

<Figure src="https://blog.scious.io/content/images/2020/08/image-12.png" />

Cet élément génère cinq sorties (ignorez les quatre dernières pour l'instant) :

1. `URL normalisée` une version normalisée de l'URL souhaitée de votre client
2. `Type d'enregistrement` une liste des types d'enregistrements que votre client devra ajouter dans son fournisseur DNS.
3. `Hôte d'enregistrement` une liste des hôtes d'enregistrement que votre client devra ajouter dans son fournisseur DNS.
4. `Valeur d'enregistrement` une liste des valeurs d'enregistrement que votre client devra ajouter dans son fournisseur DNS.
5. `Erreur` Un message lisible par l'humain décrivant toute erreur. Vide s'il n'y a pas d'erreur.

Ainsi, dans un workflow, nous utilisons l'action `Provisionner label blanc` en définissant ses champs `nom` et `domaine_custom` sur `URL normalisée` :

<Figure caption="In practice `name` can be anything you want" src="https://blog.scious.io/content/images/2020/08/image-11.png" />

Enfin, lorsque cette action se déclenche, votre label blanc sera provisionné. De plus, l'action retournera un certain nombre de valeurs, y compris le **très important** `site_id`**. Vous avez besoin du** `site_id` **pour toutes les futures actions de label blanc, alors stockez-le dans votre base de données Bubble.**

:::caution

L'URL que votre client peut saisir doit avoir la forme d'un domaine racine (example.com) ou d'un sous-domaine (blog.example.com). Les URLs avec plusieurs sous-domaines (kinder.blog.example.com) généreront une erreur que vous pouvez attraper.

:::

### Lier l'URL Bubble unique du client à leur label blanc provisionné

Dans le même workflow que nous avons utilisé pour provisionner le label blanc, nous utilisons ensuite l'action `Mettre à jour le label blanc` pour lier l'URL de votre application au label blanc souhaité du client.

Cette action comporte six champs :

<Figure src="https://s3.amazonaws.com/appforest_uf/f1658683338060x954497849751599900/update-whitelabel-thumbnail-compressed.png" />

1. `site_id` C'est la sortie de la provision du label blanc dans une étape antérieure
2. `site_url` C'est l'URL réelle où votre client veut que votre application soit labellisée en blanc.
3. `favicon_url` (facultatif) Il s'agit de l'URL de l'icône que vous souhaitez précharger dans un onglet de navigation blanc.
4. `page_title` C'est le texte qui apparaîtra dans un onglet de navigation blanc.
5. `page_description` Il s'agit de la description SEO de ce site.
6. `page_image_url` Il s'agit de l'URL pour l'image SEO de ce site.

### Fournissez à votre client les enregistrements A ou CNAME appropriés à ajouter dans leur fournisseur DNS.

Rappelez-vous comment nous avons ignoré la plupart des sorties de l'élément `Valider` de TheirLabel plus tôt dans le tutoriel ? Nous les utiliserons maintenant pour informer vos clients sur les enregistrements DNS qu'ils doivent ajouter. Les trois champs dont nous avons besoin sont :

1. `Type d'enregistrement` une liste des types d'enregistrements que votre client devra ajouter dans son fournisseur DNS.
2. `Hôte d'enregistrement` une liste des hôtes d'enregistrement que votre client devra ajouter dans son fournisseur DNS.
3. `Valeur d'enregistrement` une liste des valeurs d'enregistrement que votre client devra ajouter dans son fournisseur DNS.

Il existe plusieurs façons de les afficher, mais nous avons décidé de tout simplement mettre en place trois groupes répétitifs différents côte à côte pour afficher chaque valeur.

<Figure caption="How to setup the editor" src="https://blog.scious.io/content/images/2020/08/image-15.png" />

<Figure caption="The result" src="https://blog.scious.io/content/images/2020/08/image-14.png" />

Il est recommandé d'informer votre client que le site blanchi-label ne sera pas disponible immédiatement car cela prend souvent quelques minutes mais parfois aussi longtemps que 24 heures pour que les nouveaux enregistrements DNS prennent effet. Avoir un type de flux de résolution pour eux si le site n'est pas disponible après 24 heures (peut-être qu'il les guide sur la manière de résoudre les problèmes de leur côté ou peut-être de contacter votre équipe de support) pourrait être utile.

### Sécurisez le white label en HTTPS

Pour terminer la configuration du white label de votre client, nous pouvons le sécuriser en utilisant l'action `Provision TLS certificate`.

<Figure src="https://blog.scious.io/content/images/2020/08/image-16.png" />

Comme pour les autres, cette action nécessite le `site_id`. Dans des circonstances normales, appeler cette action une fois devrait finalement (dans les 30 minutes) aboutir à la sécurisation du site en marque blanche via Let's Encrypt. Cependant, si le site n'a pas été sécurisé et que vous êtes certain que les enregistrements DNS ont eu suffisamment de temps pour prendre effet, alors il n'y a pas de mal à appeler à nouveau cette action.

Il est bon de prévenir votre client que le site en marque blanche ne sera pas sécurisé en HTTPS immédiatement mais qu'il devrait revenir un peu plus tard pour vérifier que tout fonctionne. Par exemple, voici l'approche de TheirLabel :

<Figure src="https://blog.scious.io/content/images/2020/08/image-17.png" />

### Mettre à jour un white label

Vous voudrez peut-être mettre à jour un white label si votre client souhaite changer l'URL vers laquelle il pointe ou modifier le titre de la page et l'icône de favoris. Pour ce faire, exécutez l'action `Update white label` (la même action que nous utilisons pour la provision de white labels).

<Figure src="https://s3.amazonaws.com/appforest_uf/f1658683338060x954497849751599900/update-whitelabel-thumbnail-compressed.png" />

Tout comme lorsque nous avons utilisé cette action pour provisionner un white label, lorsque nous mettons à jour un white label, nous devrons enregistrer son `site_id` dans la base de données Bubble pour une utilisation ultérieure, sinon vous ne pourrez pas utiliser Bubble pour mettre à jour ou supprimer ce white label à l'avenir (bien sûr, vous pouvez toujours accéder à votre compte Netlify et trouver manuellement le `site_id` à partir de là).

### Supprimer un white label

Il suffit d'exécuter l'action `Delete white label` avec le `site_id` pour supprimer un white label de votre application.

<Figure src="https://blog.scious.io/content/images/2020/08/image-18.png" />

## Limitations connues

Parce que nous utilisons un iFrame pour obtenir le white labelling, les changements de page dans l'application en marque blanche ne se refléteront pas dans la barre d'URL du navigateur. Par exemple, si votre client navigue de **saas.com** à **saas.com/contact**, alors votre application naviguera vers la page de contact mais leur barre d'URL continuera de lire **saas.com**.
Les utilisateurs de Safari verront un message comme celui-ci lorsqu'ils naviguent sur un site TheirLabelled qui utilise des cookies (comme lors de la connexion). Sans activer les cookies, les utilisateurs de Safari ne pourront pas utiliser votre application. Nous explorons des moyens de résoudre ce problème (si vous avez résolu cela avec [Webkit's Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/), nous aimerions explorer une solution avec vous - [contactez-nous ici](mailto:aagostini+theirlabel@scious.io)) :

<Figure src="https://s3.amazonaws.com/appforest_uf/f1596228557855x579771458057098500/image%202.png" />

Tout cela dit, nous pensons que TheirLabel est une solution raisonnable à 90% pour l'incapacité actuelle de Bubble à créer des applications SaaS multi-locataires pouvant être servies sur plusieurs domaines. Cela fait des années que cela est demandé, donc idéalement ce sera une fonctionnalité native de Bubble un jour. Jusqu'à ce moment, nous espérons que vous apprécierez TheirLabel.

## Support

Nous fournissons un support de deux manières :

- [Le forum](https://forum.bubble.io/t/introducing-theirlabel-domain-name-white-labeling-for-bubble/104972/last). Cette option est gratuite pour tout le monde et les questions sont répondues par nous ainsi que par la communauté.
- Consultations individuelles. Cette option payante est destinée à toute personne souhaitant des retours directs et en temps réel sur les meilleures pratiques d'intégration directement de la part des personnes qui ont créé TheirLabel.

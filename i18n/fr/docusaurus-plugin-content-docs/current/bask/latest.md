---
sidebar_position: 1
sidebar_label: Dernier
pagination_next: null
pagination_prev: null
---

importer Highlight de '../components/highlight'
importer VideoGIF de '../components/videogifs'

# Bask [Dernier]

**Bask** est une extension [VS Code](https://code.visualstudio.com/) pour faciliter le développement de plugin Bubble. Sans Bask, le développement de plugins ressemble à :

1. Code dans l'éditeur local.
2. Exécuter un script de construction pour minifier, tree-shaker ou effectuer d'autres tâches de regroupement de code.
3. `Git commit` changes.
4. Changer de fenêtre pour le navigateur web.
5. Changer d'onglet du navigateur vers l'éditeur de plugin Bubble.
6. Cliquer sur l'onglet `Paramètres` > puis appuyer sur le bouton `Synchroniser avec GitHub`.
7. Passer à l'onglet du navigateur exécutant notre application de développement de plugin.
8. Actualiser la page pour charger nos derniers changements de plugin.
9. Tester le plugin. Répéter les étapes 1 à 9 jusqu'à ce que le plugin fonctionne.

Bask simplifie le développement de plugins, réduisant notre flux de travail à :

1. Code dans l'éditeur local.
2. Changer de fenêtre pour l'onglet du navigateur exécutant notre application de développement de plugin.
3. Tester le plugin. Répéter les étapes 1 à 3 jusqu'à ce que le plugin fonctionne.

<VideoGIF src="https://heap.omnistore.win/bask_animations/bask_auto_sync.mp4" />

## Fonctionnalités audacieuses

Bask fait plus que synchroniser automatiquement votre code local avec Bubble.

- **Noms de fichiers pour les humains™** - renommez les fichiers du format _chaîne-aléatoire_ natif de Bubble aux noms réels que vous avez donnés à vos actions ou éléments pour savoir toujours dans quel fichier vous travaillez.
- **Noms de fonction pour les robots™** - nous convertissons `function (instance, properties, context)` en `function update (instance, properties, context)` pour que les linters et les outils de build fonctionnent simplement.
- **Regroupement automatisé** - synchronisez votre code tel quel ou regroupez-le pour faire fonctionner les actions plus rapidement. Tree-shaking et déploiement avec des modules ES6 n'a jamais été aussi facile.
- **Git découplé** - vous n'êtes plus enchaîné à développer dans la branche `main`. Le contrôle de version pratique est de retour, bébé !
- **Rester organisé** _Quel commit était lié à une publication officielle de mon plugin ?_ Ne vous demandez plus jamais grâce à [`Bask Publish`](#bask-publish).
- **S'il y a suffisamment d'intérêt** Exécuter automatiquement et rapporter les résultats des tests unitaires du plugin dans une application Bubble.
- **S'il y a suffisamment d'intérêt** Assistant alimenté par OpenAI pour la création de plugins Bubble.
- **S'il y a suffisamment d'intérêt** Tableau de bord d'analyse d'utilisation du plugin pour tous vos plugins.

## Comment ça marche

### Sous le capot

Un outil comme Bask a toujours semblé hors de portée car Bubble n'a pas d'API publique pour mettre à jour le code du plugin. Cependant, il est possible de créer des extensions VS Code qui automatisent n'importe quelle tâche de navigation web. Nous avons donc créé une extension qui automatise les actions fastidieuses basées sur le navigateur que les développeurs de plugins Bubble font de nombreuses fois par heure. Notre extension demande vos identifiants de connexion Bubble car elle se connecte à votre compte Bubble dans un navigateur invisible sur votre ordinateur pour effectuer des actions en votre nom.

En parlant d'identifiants de connexion, nous n'avons **aucun** intérêt à conserver les vôtres. Notre extension les stocke sur votre ordinateur en utilisant le gestionnaire de secrets dédié [secrets manager](https://code.visualstudio.com/api/references/vscode-api#SecretStorage) de VS Code afin que vos identifiants ne quittent jamais votre appareil.

### Rechargement dynamique de l'application Bubble

Bien que Bask soit une extension VS Code, nous fournissons un plugin Bubble compagnon avec une action côté client que vous pouvez utiliser pour recharger automatiquement la page de l'application Bubble avec laquelle vous testez un plugin. De cette façon, vous pouvez éditer votre code localement, passer à la page de test de votre plugin, et commencer à tester votre plugin sans avoir à rafraîchir manuellement la page. Voir [Rechargement automatique](#auto-refresh) pour plus de détails.

### Votre nouveau flux de travail

La plus grande différence entre votre flux de travail actuel et le _flux de travail Bask_ concerne la façon dont nous structurons le dossier local de votre plugin Bubble. Pour illustrer, parcourons un exemple spécifique. Disons que vous travaillez sur un plugin appelé "Boîte à outils" qui n'a qu'une seule action côté serveur appelée "Évaluer l'expression". La structure de dossier par défaut pour cela, telle que stockée dans git, ressemble à :

```
⎇ principal
  📂 Bubble-Plugin-Toolbox
  ┣ 📂 actions
  ┃ ┗ 📂 AAI-850mj
  ┃    ┣ 📜 client.js
  ┃    ┣ 📜 package.json
  ┃    ┣ 📜 params.json
  ┃    ┗ 📜 server.js
  ┗ 📜 ...
```

En pratique, la structure mentionnée ci-dessus encourage les développeurs à maintenir leur code prêt pour la production dans les mêmes fichiers dans lesquels ils développent. Triste.

En revanche, lorsque nous utilisons Bask, nous obtenons une structure de dossier qui nous permet de séparer facilement les fichiers source des fichiers prêts pour la production. Tout aussi important, cette nouvelle structure nous permet de spécifier le script de construction nécessaire pour convertir notre code source en code prêt pour la production. Ainsi, pour poursuivre l'exemple, si nous [`Bask Pull`](#bask-pull) le plugin ci-dessus sur la branche `bask_dev` git, cela ressemblerait à :

```
⎇ bask_dev
  📂 Bubble-Plugin-Toolbox
  ┣ 📂 node_modules
  ┣ 📂 dist
  ┃ ┗ 📜 plugin.json
  ┣ 📂 src
  ┃ ┗ 📂 server_side_actions
  ┃   ┗ 📂 evaluate_expression
  ┃     ┣ 📜 evaluate_expression.js
  ┃     ┗ 📜 evaluate_expression.json
  ┣ 📜 build.mjs
  ┣ 📜 package.json
  ┣ 📜 .gitignore
  ┗ 📜 ...
```

Comme vous pouvez le voir, nous avons maintenant quelques fichiers et dossiers de plus que ceux que Bubble nous a donnés nativement dans la branche `principal`. En général, cela reflète les dossiers de la branche `principal` mais avec des noms de fichiers descriptifs à la place des noms cryptiques de Bubble. Ainsi, le nouveau :

- `src` le dossier contient un dossier `server_side_actions` avec des dossiers supplémentaires nommés d'après nos SSAs, dans notre cas juste `evaluate_expression`. Il ajoutera également un dossier `client_side_actions` et un dossier `visual_elements` si notre plugin contient de tels éléments.
  - Dans notre action côté serveur unique, nous avons `evaluate_expression.js` (renommé à partir du dénomination par défaut de Bubble de `AAI-850mj`) qui contient notre code SSA. Il ajoutera également un dossier client_side_actions et un dossier visual_elements si notre plugin contient de tels éléments.
  - À côté se trouve `evaluate_expression.json` qui combine les fichiers `package.json` et `params.json` précédemment séparés.
- `build.mjs` gère la minification, le treeshaking et autres étapes d'empaquetage de code.
- `package.json` est un fichier package.json généré de manière traditionnelle par npm. Il fonctionne avec le dossier `node_modules` pour suivre les bibliothèques node dont nos SSAs ont besoin.
- `node_modules` est un dossier `node_modules` généré de manière traditionnelle par npm. Pour y ajouter des modules (ainsi que package.json), vous exécuteriez la commande node `npm install <module_name>` comme d'habitude.
- `dist` contient la version distribuable de votre plugin sous forme d'un unique fichier `plugin.json` (la représentation de votre plugin telle que l'éditeur de plugins Bubble l'attend en interne). C'est ce que Bask synchronise avec Bubble.

Avec cela, le flux de travail de développement de Bask ressemble à :

1. Apportez des modifications de code dans `evaluate_expression.js`
2. Sauvegardez le fichier. Dans les coulisses :
   - Si le [mode de construction](#syncing-local-changes-to-bubble) de Bask est **désactivé**, alors Bask combine tous les fichiers de votre dossier `src` en `./dist/plugin.json` tel quel. Sinon, si le mode de construction de Bask est **activé**, alors Bask exécute `build.mjs` sur tous les fichiers javascript de votre dossier `src` tout en les combinant à `./dist/plugin.json`.
   - Bask télécharge `./dist/plugin.json` sur bubble.io/plugin_editor.
   - Détectant que vous avez mis à jour votre application, le [Rafraîchissement automatique](#auto-refresh) de Bask recharge la page de test de votre plugin.
3. Vérifiez vos résultats de test.
4. Revenez à VS Code pour modifier le code si nécessaire.

## Pour commencer

Pour installer Bask, vous pouvez appuyer sur `Installer` sur notre page du [Marketplace de VS Code](https://marketplace.visualstudio.com/items?itemName=Scious.Bask) ou rechercher l'expression `Bask` dans l'onglet Extensions de VS Code.

Une fois installé, vous pouvez exécuter la commande `Bask Switch Plugin` pour commencer. Les nouveaux utilisateurs seront invités à entrer une clé API qui peut être achetée [ici](https://scious.io/plugins/bask).

Une fois enregistré, Bask fera ensuite en sorte que vous saisissiez vos identifiants Bubble qu'il stockera en toute sécurité sur votre appareil pour effectuer toutes les fonctions de base de Bask. Une fois ajouté, vous êtes prêt à commencer à utiliser Bask.

## Commandes

Toutes les commandes dans VS Code sont exécutées en tapant `CTRL` + `SHFT` + `P` (ou `⇧⌘P` sur macOS) puis en tapant l'une des commandes suivantes.

La première fois que vous exécutez une commande, Bask demandera vos identifiants de connexion Bubble. Si vous ne connaissez pas votre mot de passe (peut-être parce que votre compte utilise `Connexion avec Google`), alors visitez la [page de connexion de Bubble](https://bubble.io/home?mode=login) > cliquez sur `Mot de passe oublié ?` > puis suivez les instructions pour réinitialiser votre mot de passe. Enfin, copiez et collez ces valeurs dans Bask. Comme mentionné [ci-dessus](#hows-this-work), aucune information d'identification ne quitte jamais votre appareil.

### `Bask Pull`

Récupère les modifications d'un plug-in de Bubble vers votre espace de travail local dans la branche git actuelle. Remarque : vous pouvez changer à tout moment la branche git actuelle sur laquelle vous travaillez en utilisant les actions git intégrées de VS Code.

<VideoGIF src="https://heap.omnistore.win/bask_animations/bask_pull.mp4" />

### `Bask Switch Plugin`

Spécifiez le plug-in sur lequel vous voulez travailler avec Bask. Effectue la même action que `Bask Pull` après avoir sélectionné votre plugin de choix.

### `Bask Publish`

Soumettez formellement une nouvelle version de votre plugin et enregistrez son code en tant qu'étiquette Git versionnée.

<VideoGIF src="https://heap.omnistore.win/bask_animations/bask_publish.mp4" />

## Syncing local changes to Bubble

Bask synchronise automatiquement les modifications de code sur Bubble chaque fois que vous enregistrez un fichier de plugin. Il existe deux modes que Bask utilisera pour synchroniser vos modifications:

- **Le mode de génération activé** configure Bask pour pousser les modifications locales vers votre plugin Bubble après avoir exécuté votre script `build.js` ou `build.mjs`.
- **Le mode de génération désactivé** configure Bask pour pousser les modifications locales vers votre plugin Bubble sans exécuter votre script `build.js` ou `build.mjs`. C'est le mode de poussée par défaut.

Pour basculer entre les modes de génération, appuyez sur l'élément de la barre d'état de Bask situé dans le coin inférieur gauche de l'éditeur VS Code.

<VideoGIF src="https://heap.omnistore.win/bask_animations/bask_build.mp4" />

### Script de génération par défaut

La plupart, sinon tous, des bundlers JavaScript sont conçus pour traiter des fichiers JavaScript complets ou des répertoires de projets entiers. Parce qu'un plugin Bubble n'est ni l'un ni l'autre, Bask est livré avec un script de génération par défaut qui utilise `esbuild` pour regrouper individuellement les fonctions JavaScript présentes dans votre plugin.

Nous utilisons `esbuild` comme bundler par défaut car il est rapide et propose de nombreuses options, mais les utilisateurs peuvent opter pour n'importe quel bundler JavaScript qu'ils préfèrent. La chose importante à savoir est que Bask exécute votre `build.mjs` (ou `build.js`) en lui fournissant cinq arguments concernant la fonction du plugin en cours de traitement. Ces arguments sont accessibles en utilisant le module `process` de Node comme suit:

1. `file_name = process.argv[2]` Le nom du fichier source contenant la fonction actuelle en cours de traitement.
2. `resolve_directory = process.argv[3]` Répertoire contenant `file_name`.
3. `unbuilt_file_path = process.argv[4]` Chemin vers un fichier temporaire contenant uniquement le contenu de la fonction actuelle en cours de traitement.
4. `built_file_path = process.argv[5]` Un autre fichier temporaire contenant le contenu construit de `unbuilt_file_path`.
5. `function_type = process.argv[6]` Type de fonction Bubble actuelle. L'un des éléments suivants:
   - `SERVER_SIDE_ACTION`
   - `CLIENT_SIDE_ACTION`
   - `ELEMENT_ACTION`
   - `ELEMENT_INITIALIZE`
   - `ELEMENT_PREVIEW`
   - `ELEMENT_UPDATE`
   - `ELEMENT_RESET`
   - `ELEMENT_STATE`

Dans le fichier de génération par défaut que nous fournissons, ces arguments sont utilisés comme suit:

```jsx title="build.mjs"
import * as esbuild from 'esbuild'
import process from 'process';
import * as fs from 'fs';

let file_name = process.argv[2]
let resolve_directory = process.argv[3]
let unbuilt_file_path = process.argv[4]
let built_file_path = process.argv[5]
let function_type = process.argv[6]

const file_contents = fs.readFileSync(unbuilt_file_path, 'utf-8');

// Build files depending on function type
if (function_type == "SERVER_SIDE_ACTION" || function_type == "CLIENT_SIDE_ACTION") {
    esbuild.build({
        stdin: {
            contents: file_contents,
            resolveDir: resolve_directory,
            sourcefile: file_name,
        },
        bundle: true,
        minify: true,
        treeShaking: true,
        outfile: built_file_path,
        platform: 'node',
        sourcesContent: false,
    })
} else {
    esbuild.build({
        stdin: {
            contents: file_contents,
            resolveDir: resolve_directory,
            sourcefile: file_name,
        },
        bundle: true,
        minify: true,
        // treeShaking: true,
        outfile: built_file_path,
        platform: 'node',
        sourcesContent: false,
    })
}
```

Comme vous le constaterez, nous utilisons l'argument `function_type` injecté pour modifier les paramètres de génération en fonction de la fonction en cours de traitement (c'est-à-dire désactiver treeShaking pour les éléments de plugin). Étant donné que ce script par défaut vise simplement à aider les utilisateurs à démarrer, vous voudrez probablement ajuster en fonction du cas d'utilisation ou définir des paramètres de génération encore plus granulaires en utilisant l'argument `file_name` ainsi que `function_type`.

## Action

### Actualiser automatiquement

Actualise la page Bubble actuelle chaque fois qu'un changement a été apporté à votre application ou votre plugin. Pour utiliser :

1. Ajoutez [le plugin Bask](https://bubble.io/plugin/bask-1694722264573x355074825064808450) à votre application Bubble.
2. Sur une page de test de votre choix, créez un workflow déclenché par `Page est chargée`.
3. Dans le workflow, ajoutez l'action Bask `Actualiser automatiquement`.
4. Ajoutez votre application Bubble en tant qu'`application de test` dans votre plugin ([en savoir plus](https://manual.bubble.io/account-and-marketplace/building-plugins/building-elements#testing-a-plugin)).

Avec Bask en cours d'exécution, la page de test de votre plugin se mettra à jour chaque fois que vous enregistrerez un fichier lié dans VS Code.

## Support

Nous offrons du support de deux manières :

- Le [forum](https://forum.bubble.io/t/who-wants-a-vs-code-extension-for-developing-bubble-plugins/269165/last). Cette option est gratuite pour tous, où les questions sont répondues par nous-mêmes ainsi que par la communauté.
- Nous proposons un [Accord de Niveau de Service](https://buy.stripe.com/8wMg2x1if3zz3ba6op) pour les clients nécessitant des garanties de service et de maintenance.

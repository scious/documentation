---
sidebar_position: 1
sidebar_label: Latest
pagination_next: null
pagination_prev: null
---

import Highlight from '../components/highlight'
import VideoGIF from '../components/videogifs'

# Bask [Latest]

**Bask** is a [VS Code](https://code.visualstudio.com/) extension for streamlining Bubble plugin development. Without Bask, developing plugins look like:

1. Code in local editor.
2. Run build script to minify, treeshake, or perform other code bundling tasks.
3. `Git commit` changes.
4. Switch windows to web browser.
5. Switch browser tab to Bubble plugin editor.
6. Click `Settings` tab > then tap `Synchronize with GitHub` button.
7. Switch to the browser tab running our plugin development app.
8. Refresh the page to load our latest plugin changes.
9. Test plugin. Repeat steps 1 through 9 until the plugin works.

Bask simplifies plugin development, reducing our workflow to:

1. Code in local editor.
2. Switch windows to the browser tab running our plugin development app.
3. Test plugin. Repeat steps 1 through 3 until the plugin works.

<VideoGIF src="https://heap.omnistore.win/bask_animations/bask_auto_sync.mp4" />

## Bodacious features

Bask does more than auto-sync your local code to Bubble.

- **File names for humans™** - rename files from Bubble's native _random-string_ format to the actual names you gave your actions or elements so you always know which file you're working in.
- **Function names for robots™** - we convert `function (instance, properties, context)` to `function update (instance, properties, context)` so linters and build tools just work.
- **Automated bundling** - sync your code as is or bundle it to make actions run faster. Treeshaking and deploying with ES6 modules has never been easier.
- **Git decoupled** - you're no longer chained to developing in `main` branch. Practical version control is back, baby!
- **Stay organized** _Which commit was related to an official release of my plugin?_ Never wonder again thanks to [`Bask Publish`](#bask-publish).
- **If there's enough interest** Auto run & report results from plugin unit tests in a Bubble app.
- **If there's enough interest** OpenAI powered assistant for creating Bubble plugins.
- **If there's enough interest** Plugin usage analytics dashboard for all your plugins.

## How it works

### Under the hood

A tool like Bask has always seemed out of reach because Bubble doesn't have a public API for updating plugin code. However, it is possible to make VS Code extensions that automate any web browsing task. So we made an extension that automates the tedious browser based actions that Bubble plugin developers do many times per hour. Our extension asks for your Bubble login credentials because it signs into your Bubble account in an invisible browser on your computer to perform actions on your behalf.

Speaking of login credentials, we have **zero** interest in holding yours. Our extension stores them on your computer using VS Code's dedicated [secrets manager](https://code.visualstudio.com/api/references/vscode-api#SecretStorage) so your credentials never leave your device.

### Dynamic Bubble app reloading

While Bask is a VS Code extension, we provide a companion Bubble plugin with a client side action you can use to automatically reload the page of the Bubble app you're testing a plugin with. This way, you can edit your code locally, switch to your plugin test page, and start testing your plugin without having to manually refresh the page. See [Auto Refresh](#auto-refresh) for details.

### Your new workflow

Perhaps the biggest difference between your current workflow and the _Bask workflow_ centers around how we structure your local Bubble plugin folder. To illustrate, let's run through a specific example. Say you're working on a plugin called "Toolbox" that only has one Server Side action called "Evaluate Expression". The default folder structure for this, as stored in git, looks like:

```
⎇ main
  📂 Bubble-Plugin-Toolbox
  ┣ 📂 actions
  ┃ ┗ 📂 AAI-850mj
  ┃    ┣ 📜 client.js
  ┃    ┣ 📜 package.json
  ┃    ┣ 📜 params.json
  ┃    ┗ 📜 server.js
  ┗ 📜 ...
```

In practice, the above structure encourages developers to maintain their production-ready code in the same files that they develop in. So sad.

In contrast, when we use Bask, we're given a folder structure that allows us to easily separate source files from production ready ones. Just as important, this new structure allows us to specify the build script required to convert our source code into production ready code. So, to continue the example, if we [`Bask Pull`](#bask-pull) the above plugin to the `bask_dev` git branch, it would look like:

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

As you can see, we now have a few more files and folders than Bubble gave us natively in the `main` branch. In general, this mirrors the folders in the `main` branch but with descriptive filenames in place of Bubble's cryptic filenames. So, the new:

- `src` folder contains a `server_side_actions` folder with additional folders named after our SSAs, in our case just `evaluate_expression`. It will also add a `client_side_actions` folder and a `visual_elements` folder if our plugin has such items.
  - Within our singular server side action we have `evaluate_expression.js` (renamed from Bubble's default of `AAI-850mj`) which contains our SSA code. It will also add a client_side_actions folder and a visual_elements folder if our plugin has such items.
  - Along side it is the `evaluate_expression.json` that combines the previously separate `package.json` and `params.json`.
- `build.mjs` handles minification, treeshaking and other code bundling steps.
- `package.json` is a traditional npm-generated package.json file. It works with the `node_modules` folder to keep track of which node libraries our SSAs need.
- `node_modules` is a traditional npm-generated node_modules folder. To add modules to it (as well as package.json), you would run the node command `npm install <module_name>` as normal.
- `dist` contains the distributable version of your plugin as a single `plugin.json` file (the representation of your plugin as the Bubble Plugin Editor internally expects). This is what Bask syncs to Bubble.

With that, the Bask development workflow looks like:

1. Make code changes in `evaluate_expression.js`
2. Save the file. Behind the scenes:
   - If Bask's [build mode](#syncing-local-changes-to-bubble) is **disabled**, then Bask combines all files from your `src` folder into `./dist/plugin.json` as is. Else, if Bask's build mode is **enabled**, then Bask runs `build.mjs` on all javascript files from your `src` folder while combining to `./dist/plugin.json`.
   - Bask uploads `./dist/plugin.json` to bubble.io/plugin_editor.
   - Detecting that you've updated your app, Bask's [Auto Refresh](#auto-refresh) reloads your plugin test page.
3. Review your test results.
4. Switch back to VS Code to edit code as needed.

## Getting started

To install Bask, you can tap `Install` on our [VS Code Marketplace page](https://marketplace.visualstudio.com/items?itemName=Scious.Bask) or search the phrase `Bask` within VS Code's Extensions tab.

Once installed, you can run the `Bask Switch Plugin` command to get started. First time users will be prompted to enter an API key which can be purchased [here](https://scious.io/plugins/bask).

Once registered, Bask will follow up by asking you to enter your Bubble Credentials which it will securely store on your device to carry out all of Basks core functions. Once added, you're all set to start using Bask.

## Commands

All commands in VS Code are run by typing `CTRL` + `SHFT` + `P` (or `⇧⌘P` on macOS) and then typing one of the following commands.

The first time you run any command, bask will ask for your Bubble login credentials. If you don't know your password (perhaps because your account uses `Log in with Google`), then visit [Bubble's login page](https://bubble.io/home?mode=login) > click `Forgot your password?` > then follow the directions to reset your password. Finally, copy and paste those values into Bask. As mentioned [above](#hows-this-work), no credentials ever leave your device.

### `Bask Pull`

Pulls a plugin's changes from Bubble to your local workspace in the current git branch. Note: you can switch the current git branch you're working on at any point using VS Codes built in git actions.

<VideoGIF src="https://heap.omnistore.win/bask_animations/bask_pull.mp4" />

### `Bask Switch Plugin`

Specify the plugin you want to work on with Bask. Performs the same action as `Bask Pull` after having selected your plugin of choice.

### `Bask Publish`

Formally submit a new version of your plugin and save its code as a versioned Git tag.

<VideoGIF src="https://heap.omnistore.win/bask_animations/bask_publish.mp4" />

## Syncing local changes to Bubble

Bask automatically synchronizes code changes to Bubble whenever you save a plugin file. There are two modes Bask will use to sync your changes:

- **Build mode enabled** sets Bask to push local changes to your Bubble plugin after running your `build.js` or `build.mjs` script.
- **Build mode disabled** sets Bask to push local changes to your Bubble plugin without running your `build.js` or `build.mjs` script. This is the default push mode.

To toggle between build modes, tap on Bask's status bar item located on the bottom left corner of the VS Code editor.

<VideoGIF src="https://heap.omnistore.win/bask_animations/bask_build.mp4" />

### Default build script

Most, if not all, Javascript bundlers are built to process entire Javascript files or project directories. Because a Bubble plugin is neither, Bask is packaged with a default build script that uses `esbuild` to individually bundle the Javascript functions present in your plugin.

We use `esbuild` as the default bundler because it's fast and has a lot of options but users can opt for any JS bundler they like. The key thing to know is that Bask runs your `build.mjs` (or `build.js`) by supplying it five arguments about the plugin function being processed. These arguments are accessed using Node's `process` module like so:

1. `file_name = process.argv[2]` The name of the source file that contains the current function being processed.
2. `resolve_directory = process.argv[3]` Directory containing `file_name`.
3. `unbuilt_file_path = process.argv[4]` Path to a temporary file containing only the contents of the current function being processed.
4. `built_file_path = process.argv[5]` Another temporary file containing the built contents of `unbuilt_file_path`.
5. `function_type = process.argv[6]` Current Bubble function's type. One of the following:
   - `SERVER_SIDE_ACTION`
   - `CLIENT_SIDE_ACTION`
   - `ELEMENT_ACTION`
   - `ELEMENT_INITIALIZE`
   - `ELEMENT_PREVIEW`
   - `ELEMENT_UPDATE`
   - `ELEMENT_RESET`
   - `ELEMENT_STATE`

In the default build file we provide, those arguments are used as follows:

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

As you'll note, we use the injected `function_type` argument to change build parameters depending on the function being processed (i.e. turning off treeShaking for plugin elements). Since this default script is simply to help users get started, you'll likely want to adjust by use case or set even more granular build settings by using the `file_name` argument along with `function_type`.

## Action

### Auto Refresh

Refreshes the current Bubble page whenever a change has been made to your app or plugin. To use:

1. Add the [Bask plugin](https://bubble.io/plugin/bask-1694722264573x355074825064808450) to your Bubble app.
2. On a test page of your choice, create a workflow that triggers on `Page is loaded`.
3. Within the workflow, add the Bask `Auto Refresh` action.
4. Add your Bubble app as a `test app` within your plugin ([learn more](https://manual.bubble.io/account-and-marketplace/building-plugins/building-elements#testing-a-plugin)).

With Bask running, your plugin test page will update any time you save a related file in VS Code.

## Support

We provide support in two ways:

- The [forum](https://forum.bubble.io/t/who-wants-a-vs-code-extension-for-developing-bubble-plugins/269165/last). This option is free for everyone to use where questions are answered by us as well as the community.
- We offer a [Service Level Agreement](https://buy.stripe.com/8wMg2x1if3zz3ba6op) for customers requiring service and maintenance guarentees.

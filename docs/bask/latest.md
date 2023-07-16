---
sidebar_position: 1
sidebar_label: Latest
pagination_next: null
pagination_prev: null
---

import Highlight from '../components/highlight'

# Bask [Latest]

**Bask** is a [VS Code](https://code.visualstudio.com/) extension for streamlining Bubble plugin development. Without Bask, most workflows for developing Server Side Actions or Visual Elements look like:

1. Code in local editor.
2. Run build script to minify, treeshake, or perform other code bundling tasks.
3. `Git commit` changes.
4. Switch windows to web browser.
5. Switch browser tab to Bubble plugin editor.
6. Click `Settings` tab > then tap `Synchronize with GitHub` button.
7. Switch to the browser tab running our plugin development app.
8. Refresh the page to load our latest plugin changes.
9. Test plugin.
10. If testing an SSA, then wait 3 to 10 seconds for it to run.
11. If the SSA fails (which happens 99% of the time), then read the error output.
12. Repeat steps 1 through 11 until the plugin works.

Bask simplifies plugin development, reducing our workflow to:

1. Code in local editor.
2. Switch windows to the browser tab running our plugin development app.
3. Test plugin.
4. If testing an SSA, then wait 3 to 10 seconds for it to run.
5. If the SSA fails (which happens 99% of the time), then read the error output.
6. Repeat steps 1 through 5 until the plugin works.

## Bodacious features

Bask does more than just shorten the code-test-code loop.

- **File names for humans™** - rename files from Bubble's native _random-string_ format to the actual names you gave your actions or elements so you always know which file you're working in.
- Automate and log test results to detect and track bugs with ease.
- Standardize your development process to improve code quality, consistency, and release cadence.
- **Coming soon** Allow Bubble accounts secured by 2FA to login with Bask.
- **Coming soon** Auto run & report results from plugin unit tests in a Bubble app.
- **If there's enough interest** OpenAI powered assistant for creating Bubble plugins.
- **If there's enough interest** Plugin usage analytics dashboard for all your plugins.

## How it works

### Under the hood

A tool like Bask has always seemed out of reach because Bubble doesn't have a public API for updating plugin code. However, it is possible to make VS Code extensions that automate any web browsing task. So we made an extension that automates the tedious browser based actions that Bubble plugin developers do many times per hour. Our extension asks for your Bubble login credentials because it actually signs into your Bubble account in an invisible browser on your computer to perform actions on your behalf.

Speaking of login credentials, we have **zero** interest in holding yours. Our extension stores them on your computer using VS Code's dedicated [secrets manager](https://code.visualstudio.com/api/references/vscode-api#SecretStorage) so your credentials never leave your device.

### Dynamic Bubble app reloading

While Bask is a VS Code extension, we provide a companion Bubble plugin with a client side action you can use to automatically reload the page of the Bubble app you're testing a plugin with. This way, you can edit your code locally, switch to your plugin test page, and start testing your plugin without having to manually refresh the page. See [Auto Refresh](#auto-refresh) for details on how to set this up.

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

In contrast, when we use Bask to initialize a new git branch, we're given a folder structure that allows us to easily separate source files from production ready ones. Just as important, this new structure allows us to specify the build script required to convert our source code into production ready code. So, to continue the example, if we [`Bask Pull`](#bask-pull) the above plugin to the `bask_dev` git branch, it would look like:

```
⎇ bask_dev
  📂 Bubble-Plugin-Toolbox
  ┣ 📂 actions
  ┃ ┗ 📂 AAI-850mj
  ┃    ┣ 📜 client.js
  ┃    ┣ 📜 package.json
  ┃    ┣ 📜 params.json
  ┃    ┗ 📜 server.js
  ┣ 📂 node_modules
  ┣ 📂 src
  ┃ ┗ 📂 server_side_actions
  ┃    ┗ 📜 evaluate_expression.js
  ┣ 📜 build.js
  ┣ 📜 package.json
  ┣ 📜 .gitignore
  ┗ 📜 ...
```

As you can see, we now have a few more files and folders than Bubble gave us natively in the `main` branch. In general, this mirrors the folders in the `main` branch but with descriptive filenames in place of Bubble's cryptic filenames. So, the new:

- `src` folder contains a `server_side_actions` folder with our singular server side action `evaluate_expression.js` (renamed from Bubble's default of `AAI-850mj`). It will also add a `client_side_actions` folder and a `visual_elements` folder if our plugin has such items.
- `build.js` handles minification, treeshaking and other code bundling steps.
- `package.json` is a traditional npm-generated package.json file. It works with the `node_modules` folder to keep track of which node libraries our SSAs need.
- `node_modules` is a traditional npm-generated node_modules folder. To add modules to it (as well as package.json), you would run the node command `npm install <module_name>` as normal.

With that, the Bask development workflow looks like:

1. Make code changes in `evaluate_expression.js`
2. Switch windows to your browser plugin test page. Behind the scenes:

   - If `Bask Auto Push` is set, then Bask copies all files from your `src` folder to their respective paths in the default Bubble plugin folders. Else, if `Bask Auto Build and Push` is set, then Bask runs `build.js` on all files from your `src` folder before storing them in the default Bubble plugin folders.
   - Bask will `git commit`, `git merge` and `git push` the changes from your current git branch into the `main` branch on Github.
   - Bask instructs Bubble.io to synchronize our latest commit on Github.
   - Detecting that you've updated your app, Bask's [Auto Refresh](#auto-refresh) reloads your plugin test page.

3. Review your test results.
4. Switch back to VS Code to edit code as needed.

## Commands

All commands in VS Code are run by typing `CTRL` + `SHFT` + `P` (or `⇧⌘P` on macOS) and then typing one of the following commands.

The first time you run a command (LIST THE SPECIFIC COMMAND USERS SHOULD START WITH) do this, bask will ask for your Bubble login credentials. If you don't know your password (perhaps because your account uses `Log in with Google`), then visit [Bubble's login page](https://bubble.io/home?mode=login) > click `Forgot your password?` > then follow the directions to reset your password. Finally, copy and paste those values into Bask. As mentioned [above](#hows-this-work), no credentials ever leave your device.

Trying Bask for the first time? Start your 14 day free trial by grabbing API keys here.

- <Highlight color="#25c2a0">TODO</Highlight> Add hyperlink for users to get API keys.
- <Highlight color="#25c2a0">TODO</Highlight> Add getting started section with video walkthrough

### `Bask Pull`

Pulls a plugin's changes from Bubble to your local workspace in the current git branch. If the current git branch is `main` then you will be prompted to create a new git branch. Note: you can switch the current git branch you're working on at any point using VS Codes built in git actions.

### `Bask Auto Push`

Set Bask to automatically push local changes to your Bubble plugin without running your `build.js` script. To trigger an automatic push, simply unfocus your VS Code editor (switch tabs to your bubble development app). This is the default push mode.

### `Bask Auto Build and Push`

Set Bask to automatically push local changes to your Bubble plugin after running your `build.js` script. To trigger an automatic push, simply unfocus your VS Code editor.

### `Bask Switch Plugin`

Specify the plugin you want to work on with Bask.

### `Bask Which Plugin`

Returns the name of the plugin Bask is currently working on.

<Highlight color="#25c2a0">TODO</Highlight> Explore if this would be better as a persistent indicator somewhere in the VS Code UI.

## Action

### Auto Refresh

Refreshes the current Bubble page whenever a change has been made to your app or plugin.

<Highlight color="#25c2a0">TODO</Highlight> Explain how to setup this action.

## Testing

While there are potential benefits to running plugin unit tests locally, we anticipate that differences between a developer's local environment and Bubble's environment will void many of those benefits. So, instead, we aim to make code synchronization between your local editor and Bubble so fast that tab switching between VS Code and a Bubble app is not just suitable for testing but ideal.

To speed up Bubble side plugin testing, we've created a visual element and test page template used to define and track plugin unit test results. For those reading this first draft of Bask, [see here](https://plugins.scious.io/version-test/scious-search-tests) for an illustration of what our hypothetical test page template would look like. As shown, our template includes discrete tests preset with various inputs and expected outputs that our plugin (in that case, [Scious Search](https://plugins.scious.io/version-test/scious-search)), should match. If the plugin does produce the right output, then the test is considered "Passed". Otherwise, it has "Failed".

Via a special Visual Element (not yet created), we can track which tests have passed or failed. This Visual Element will be created in a such a way that our VS Code Bask Extension can automatically visit our test page, wait for tests to finish, and then prepare a report indicating which proportion of tests have passed/failed. In the near term, such functionality is - we think - a _"nice to have"_ piece of functionality. In terms of creating value for plugin developers, we think that this particular functionality best serves the long term maintenance and development of plugins. You can imagine - and indeed many of you have experience - a plugin randomly failing sometime in the future, either due to Bubble or browser updates, or inadvertent changes to your code. With a properly configured "unit tests page" we can create a system that not only tests code before new releases, but one that can periodically test the code (live, on Bubble's infrastructure) and alert developers to breaking changes as they happen instead of by our plugin users. This keeps our customers happy as well as peace of mind that plugins are working as desired even in mission critical applications.

- <Highlight color="#25c2a0">TODO</Highlight> Shorten this section.
- <Highlight color="#25c2a0">TODO</Highlight> Create Testing Visual Element
- <Highlight color="#25c2a0">TODO</Highlight> Create Bask VS Code binding to actually run / collate test results in VS Code.

---
sidebar_position: 1
sidebar_label: Latest
pagination_next: null
pagination_prev: null
---

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

- **File names for humans™** - rename files from Bubble's native "random-string" format to the actual names you gave your actions or elements so you always know which file you're working in.
- Automate and version-control local tests to detect bugs before syncing changes to the plugin editor.
- Standardize your development process to improve code quality, consistency, and release cadence.
- **Coming soon** Allow Bubble accounts secured by 2FA to login with Bask.
- **Maybe someday** For SSA development, run a local, isolated copy of the same node environment used in Bubble's lambda instances to minimize errors resulting from local-vs-lambda environment mismatches.

## How's it work?

### Under the hood

A tool like Bask has always seemed out of reach because Bubble doesn't have a public API for updating plugin code. However, it is possible to make VS Code extensions that automate any web browsing task. So we made an extension that automates the tedious browser based actions that Bubble plugin developers do many times per hour. Our extension asks for your Bubble login credentials because it actually signs into your Bubble account in an invisible browser on your computer to perform actions on your behalf.

Speaking of login credentials, we have **zero** interest in holding yours. Our extension stores them on your computer using VS Code's dedicated [secrets manager](https://code.visualstudio.com/api/references/vscode-api#SecretStorage) so your credentials never leave your device.

### Dynamic Bubble app reloading

While Bask is a VS Code extension, we provide a companion Bubble plugin with a client side action you can use to automatically reload the page of the Bubble app you're testing a plugin with. This way, you can edit your code locally, switch to your plugin test page, and start testing your plugin without having to manually refresh the page. See [Auto Refresh](#auto-refresh) for details on how to setup this action.

### Your new workflow

Perhaps the biggest difference between your current workflow and the _Bask workflow_ centers around how we structure your local Bubble plugin folder. To facilitate unit testing, code minification and treeshaking, we setup three git branches.

- `main`: This branch is the same repo that Bubble syncs to GitHub. We use it to store production ready code - any SSA or Visual Element code that passes unit tests is stored here (after optional minification / treeshaking).
- `bask_dev`: This branch contains a human readable version of the `main` branch. It mirrors the folders in the `main` branch but with descriptive filenames in place of Bubble's cryptic filenames. It also stores your `build` and `test` scripts.
- `bask_checkpoint`: This branch is where mature code in `bask_dev` is version controlled for future reference.

Let's run through a specific example. Say we're working on a plugin called "Toolbox" that only has one Server Side action called "Evaluate Expression". Bask will create GIT branches that look like:

#### ⎇ main

```
📂 Bubble-Plugin-Toolbox
┣ 📂 actions
┃ ┗ 📂 AAI-850mj
┃    ┣ 📜 client.js
┃    ┣ 📜 package.json
┃    ┣ 📜 params.json
┃    ┗ 📜 server.js
┣ 📜 README.md
┗ 📜 ...
```

#### ⎇ bask_dev

```
📂 Bubble-Plugin-Toolbox
┣ 📂 toolbox
┃ ┗ 📂 server_side_actions
┃    ┣ 📂 node_modules
┃    ┣ 📜 tests.js
┃    ┣ 📜 build.js
┃    ┣ 📜 evaluate_expression.js
┃    ┗ 📜 package.json
┣ 📂 actions
┃ ┗ 📂 AAI-850mj
┃    ┣ 📜 client.js
┃    ┣ 📜 package.json
┃    ┣ 📜 params.json
┃    ┗ 📜 server.js
┣ 📜 README.md
┗ 📜 .gitignore
```

As you can see, the `toolbox` folder in `bask_dev` has a `server_side_actions` folder with five items in it.

1. `evaluate_expression.js`: this file contains the code for our single toolbox action renamed from Bubble's default of `AAI-850mj` to `evaluate_expression`.
2. `tests.js`: contains all of the unit tests for all of our server side actions.
3. `build.js`: runs our tests and instructions for minifying, treeshaking and any other code bundling steps we need to run on server side actions.
4. `package.json`: is a traditional npm-generated package.json file. It works in conjunction with the `node_modules` folder to keep track of which node libraries our SSAs and CSAs need.
5. `node_modules`: is a traditional npm-generated node_modules folder. To add modules to it (as well as package.json), you would run the node command `npm install <module_name>` as normal.

With that, the Bask development workflow looks like this:

- make code changes in `evaluate_expression.js`
- switch windows to your browser.

The last thing you should note is that even though we didn't illustrate it, the `bask_checkpoint` branch will always have the same structure as `bask_dev` because it exists to save snapshots of a working `bask_dev` branch. Running the command `Bask checkpoint` will pull your changes from `bask_dev` into `bask_checkpoint`.

## Commands

All commands in VS Code are run by typing `CTRL` + `SHFT` + `P` (or `⇧⌘P` on macOS) and then typing one of the following commands.

The first time you run a command (LIST THE SPECIFIC COMMAND USERS SHOULD START WITH) do this, bask will ask for your Bubble login credentials. If you don't know your password (perhaps because your account uses `Log in with Google`), then visit [Bubble's login page](https://bubble.io/home?mode=login) > click `Forgot your password?` > then follow the directions to reset your password. Finally, copy and paste those values into Bask. As mentioned [above](#hows-this-work), no credentials ever leave your device.

Trying Bask for the first time? Start your 14 day free trial by grabbing API keys here.

API Key in hand, switch over to VS

:::TIP

Any time you change your Bubble password, you'll need to update that password in Bask. Use `Bask login

or log out of all devices

:::

#### Plugin activation commands (Runs once every time plugin activates).

The following functions need to be run before `Bask Push`, `Bask Pull`, `Bask Switch Plugin`, `Bask Which`

- `get_pre_launch_checklist()`: Returns
  - `registration_is_valid`
  - `bubble_credentials_are_present`
  - `current_working_plugin_is_set`
- `complete_prelaunch_checklist(register_bask=true, get_bubble_credentials=true, get_current_working_plugin=true)`. Runs through a wizard for completeing any missing pre_launch_checklist items.
  - `register_bask()`: Ask for registration. If user does not have API key, we point them to website to purchase key.
  - `get_bubble_credentials()`: Ask for Bubble login credentials.
  - `get_current_working_plugin()` Returns current plugin. This is the last plugin that was set using `Bask Switch Plugin.` If none has been set, then ask user to select plugin from list of plugins already added to VS Code Workspace.
- `launch_browser()`: If Bask isn't already running, then turn it on. <s>Bask should auto turn off (close the browser instance) once every 2 days.</s>

The following functions need to be run before `Bask Init`, `Bask Clone`, `Bask Set Bubble Credentials`

- `get_pre_launch_checklist()` as defined above
-

### `Bask Pull`

- If plugin is not already locally defined, then prompt user for plugin URL to clone it locally (will need to detect what the associated github repo is and possibly create it if it doesn't already exist)
- If plugin is already locally defined, then pull the latest changes into the local project.

### `Bask Auto Push`

Set Bask to automatically push local changes to your Bubble plugin without running your `build` script. To trigger an automatic push, simply unfocus your VS Code editor. This is the default push mode.

- Project folder should already be defined (cloned) in a way that VS Code can detect is a bask repository
- If project is already up to date, then don't push any changes. Notify that remote is already up to date.
- If project is not up to date, then push changes and notify user that updates have been pushed to remote.

### `Bask Auto Build and Push`

Set Bask to automatically push local changes to your Bubble plugin after running your `build` script. To trigger an automatic push, simply unfocus your VS Code editor.

### `Bask Switch Plugin`

Specify the plugin you want to work on with Bask.

- Options are populated from a dropdown list showing the Bask compatible workspace folders
- If no option is available, return explanation for how to get options listed in the dropdown.

### `Bask Which Plugin`

Returns the name of the plugin Bask is currently working on.

- Perhaps this would be better as some sort of persistent indicator.

### `Bask Set Bubble Credentials`

Securely saves your Bubble username and password within VS Code so Bask can automate plugin related actions within your Bubble account.

- If credentials were recently set because `Bask Set Bubble Credentials` was the very first command ever run, then do nothing. Otherwise, run as expected.
- We see that

### `Bask Checkpoint`

Running the command `Bask checkpoint` will pull your changes from `bask_dev` into `bask_checkpoint`. If you later want to restore `bask_dev` from a previously working checkpoint, say because your code inexplicably doesn't work, then you can run `Bask Restore Checkpoint`.

### `Bask Restore Checkpoint`

Running the command `Bask checkpoint` will pull your changes from `bask_dev` into `bask_checkpoint`. If you later want to restore `bask_dev` from a previously working checkpoint, say because your code inexplicably doesn't work, then you can run `Bask Restore Checkpoint`.

## Action

### Auto Refresh

Refreshes the current Bubble page whenever a change has been made to your app or plugin.

Explain how to setup this action.

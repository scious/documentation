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
2. `Bask push` our code to Bubble.
3. Switch windows to the browser tab running our plugin development app.
4. Test plugin.
5. If testing an SSA, then wait 3 to 10 seconds for it to run.
6. If the SSA fails (which happens 99% of the time), then read the error output.
7. Repeat steps 1 through 6 until the plugin works.

## Lovely features

Bask does more than just shorten the code-test-code loop.

- **File names for humans™** - rename files from Bubble's native "random-string" format to the actual names you gave your actions or elements so you always know which file you're working in.
- Automate and version-control local tests to detect bugs before syncing changes to the plugin editor.
- **Coming soon** Initialize new elements and server side actions without leaving VS Code.
- **Coming soon** Initialize new plugins without leaving VS Code.
- **Coming soon** Have multiple developers working on one plugin at the same time? Easily standardize your team's activites to improve code quality, consistency, and cadence.
- **Coming soon** Allow Bubble accounts secured by 2FA to login with Bask.

## How's it work?

### Under the hood

A tool like Bask has always seemed out of reach because Bubble doesn't have a public API for updating plugin code. However, it is possible to make VS Code extensions that automate any web browsing task. So we made an extension that automates the tedious browser based actions that Bubble plugin developers do many times per hour. Our extension asks for your Bubble login credentials because it actually signs into your Bubble account in an invisible browser on your computer to perform actions on your behalf.

Speaking of login credentials, we have zero interest in holding yours. So our extension stores those on your computer using VS Code's dedicated [secrets manager](https://code.visualstudio.com/api/references/vscode-api#SecretStorage). Your credentials never leave your device.

### Your new workflow

Perhaps the biggest difference between your current workflow and the _Bask workflow_ centers around how we structure your local Bubble plugin folder. To facilitate code minification, treeshaking and unit testing, we setup two distinct git-controlled folders.

Parent Folder:
Default Bubble Plugin Repo:
📂 Parent Folder
┣ 📜 .gitignore
┣ 📜 ...
┣ 📂 Default Bubble Plugin Repo
┃ ┗ 📜 .gitignore
┗ 📜 ...

📂 toolbox
┣ 📂 client
┣ 📂 node_modules
┃ ┗ 📜 index.js
┣ 📜 .gitignore
┣ 📜 package-lock.json
┗ 📜 package.json

Folder A which will hold . It's kind of an odd setup, but it seems like the best we can do given how Bubble's git synchronization works.

structure it a bit... odd. In short,

Since we're

## Commands

All commands in VS Code are run by typing `CTRL` + `SHFT` + `P` (or `⇧⌘P` on macOS) and then typing one of the following commands.

The first time you run a command (LIST THE SPECIFIC COMMAND USERS SHOULD START WITH) do this, bask will ask for your Bubble login credentials. If you don't know your password (perhaps because your account uses `Log in with Google`), then visit [Bubble's login page](https://bubble.io/home?mode=login) > click `Forgot your password?` > then follow the directions to reset your password. Finally, copy and paste those values into Bask. As mentioned [above](#hows-this-work), no credentials ever leave your device.

Trying Bask for the first time? Start your 14 day free trial by grabbing API keys here.

API Key in hand, switch over to VS

:::TIP

Any time you change your Bubble password, you'll need to update that password in Bask. Use `Bask login

or log out of all devices

:::

### Plugin activation commands (Runs once every time plugin activates).

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

`Bask init`,

### `Bask Init`

Creates a new Bubble plugin in your Bubble account, creates a new SSA or visual element, and then copies it into a local folder of your choice.

- Init is `Bask Clone` with more steps.
- `get_pre_launch_checklist()`
- `complete_prelaunch_checklist(register_bask=true, get_bubble_credentials=true, get_current_working_plugin=true)`
- ``
- `bask_init()` Create a new plugin. Return the URL of the plugin.
- `bask_clone(plugin_url)` Clone it to local just like `Bask Clone` below.

### `Bask Clone`

Copies an existing Bubble plugin into a local folder of your choice.

- Clone is `Bask Pull` with more steps

### `Bask Push`

- Project folder should already be defined (cloned) in a way that VS Code can detect is a bask repository

### `Bask Pull`

- Project folder should already be defined (cloned) in a way that VS Code can detect is a bask repository
- Pull the latest changes on

### `Bask Switch Plugin`

Specify the plugin you want to work on with Bask.
Options are populated from a dropdown list showing the Bask compatible workspace folders
If no option is available, return explanation for how to get options listed in the dropdown.

### `Bask Which`

Returns the name of the plugin Bask is currently working on.

- Perhaps this would be better as some sort of persistent indicator.

### `Bask Create SSA`

### `Bask Create Visual Element`

### `Bask Set Bubble Credentials`

Securely saves your Bubble username and password within VS Code so Bask can automate plugin related actions within your Bubble account.

- If credentials were recently set because `Bask Set Bubble Credentials` was the very first command ever run, then do nothing. Otherwise, run as expected.
- We see that

---
sidebar_position: 1
sidebar_label: Latest
pagination_next: null
pagination_prev: null
---

# Bask [Latest]

**Bask** is a [VS Code](https://code.visualstudio.com/) extension for streamlining Bubble plugin development. Without Bask, most workflows for developing a Bubble plugin look like:

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

## How's this work?

A tool like Bask has always seemed out of reach because Bubble doesn't have a public API for updating plugin code. However, it's possible to make VS Code extensions that automate **any** web browsing task. So we made an extension that automates the tedious browser based actions that Bubble plugin developers do many times per hour. Our extension asks for your Bubble login credentials because it actually signs into your Bubble account in an invisible browser on your computer to perform actions on your behalf.

Speaking of login credentials, we have **zero** interest in holding onto yours. So it gets stored using VS Code's dedicated [secrets manager](https://code.visualstudio.com/api/references/vscode-api#SecretStorage). Your login info never leaves your computer.

## Commands

All commands in VS Code are run by typing `CTRL` + `SHFT` + `P` (or `⇧⌘P` on macOS) and then typing one of the following commands.

### `Bask On`

Turns on bask for the duration of your coding session.

The first time you do this, bask will ask for your Bubble login credentials. If you don't know your password (perhaps because your account uses `Log in with Google`), then visit [Bubble's login page](https://bubble.io/home?mode=login) > click `Forgot your password?` > then follow the directions to reset your password. Finally, copy and paste those values into Bask. As mentioned [above](#hows-this-work), no credentials ever leave your device.

Trying Bask for the first time? Start your 14 day free trial by grabbing API keys here.

API Key in hand, switch over to VS

:::TIP

Any time you change your Bubble password, you'll need to update that password in Bask. Use `Bask login

or log out of all devices

:::

### `Bask Off`

can run regardless of prior Bask on because it just does nothgin.
returns message that bask is off (maybe can say whether or not bask was ever on).

### `Bask Init`

### `Bask Clone`

### `Bask Push`

### `Bask Pull`

### `Bask Switch Plugin`

Specify the plugin you want to work on with Bask.
Options are populated from a dropdown list showing the Bask compatible workspace folders
If no option is available, return explanation for how to get options listed in the dropdown.

### `Bask Which`

Returns the name of the plugin Bask is currently working on.

### `Bask Set Bubble Credentials`

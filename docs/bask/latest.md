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
- **Coming soon** Auto run & report results from plugin unit tests in a Bubble app.
- **Maybe someday** For SSA development, run a local, isolated copy of the same node environment used in Bubble's lambda instances to minimize errors resulting from local-vs-lambda environment mismatches.

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

API Key in hand, switch over to VS

:::TIP

Any time you change your Bubble password, you'll need to update that password in Bask. Use `Bask login

or log out of all devices

:::

#### Plugin activation commands (Runs once every time plugin activates).

The following functions need to be run on launch.

- `get_pre_launch_checklist()`: Returns
  - `registration_is_valid`
  - `bubble_credentials_are_present`
  - `current_bubble_plugin_is_set`
- `complete_prelaunch_checklist(register_bask=true, get_bubble_credentials=true, get_current_working_plugin=true)`. Runs through a wizard for completeing any missing pre_launch_checklist items.
  - `register_bask()`: Ask for registration. If user does not have API key, we point them to website to purchase key.
  - `get_bubble_credentials()`: Ask for Bubble login credentials.
  - `get_current_bubble_plugin()` Returns current plugin. This is the last plugin that was set using `Bask Switch Plugin.` If none has been set, then run `bask_switch_plugin()`
- `launch_browser()`: If Bask isn't already running, then turn it on.

Modifications to the launch routine depending on which function is called:

`Bask Push`

`Bask Pull`

`Bask Switch Plugin`

`Bask Which`

`Bask Set Bubble Credentials`

### `Bask Pull`

Pulls a plugin's changes from Bubble to your local workspace in the current git branch. If the current git branch is `main` then you will be prompted to create a new git branch. Note: you can switch the current git branch you're working on at any point using VS Codes built in git actions.

- `clone_plugin()`
  - If `local_plugin_directory` doesn't have a resolvable `local_plugin_path` for `current_plugin`:
    - Then clone plugin to computer in a directory of user's choosing.
    - Insert plugin's local file path as a `local_plugin_path` entry in the local plugin_directory.
    - Return `local_plugin_path`.
  - Else
    - Return `local_plugin_path`.
- `add_plugin_workspace()` Add plugin's directory to VS Code workspace if not already added.
- `setup_git_branch()`
  - If `current_git_branch` is not `main`:
    - Return `git_branch`.
  - Else
    - `git checkout` the main branch into a git branch of user's choosing (has to be a new branch).
    - Return `git_branch`.
- Run `merge_core_into_bask()`

  - Have two function_maps.

    `stored_function_map`. This map is already built (or simply doesn't exist).

    ```
    {
        "ssa": {
            "AAI-850mj": {
                "name": "Evaluate Expression",
                "script_name": "evaluate_expression.js"
            }
        }
    }
    ```

    `temp_function_map`. This map is built everytime we run `Bask Pull` after pulling the latest changes into `core_plugin`

    ```
    {
        "ssa": {
            "AAI-850mj": {
                "name": "Evaluate Expression",
                "script_name": "evaluate_expression.js"
            }
        }
    }
    ```

    - For each entry in `temp_function_map`:
      - If entry exists in `temp_function_map` but not in `stored_function_map`:
        - `initialize_bask_folder(temp_function_map_entry,mode="CREATE")` Create bask file and set its contents to that of it's `core_plugin` counterpart.
      - Else:
        - `initialize_bask_folder(temp_function_map_entry,mode="RENAME")` Update the name of the `bask_file` to that of it's `core_plugin` counterpart. Do not update the contents of this file.
      - Do following when catching exceptions:
        - Make `bask` folder if it doesn't exist.
        - Depending on type of file:
          - If `server_side_actions` folder doesn't exist, then make it.
          - If `client_side_actions` folder doesn't exist, then make it.
          - if `visual_elements` folder doesn't exist, then make it.
        - Run `initialize_bask_folder(temp_function_map_entry,mode="CREATE")`.
    - `update_functions_map()` Set `stored_function_map` to `temp_function_map`.
    - `finalize_bask_server_side_actions_folder()`
      - `build_package_json()` Initialize or update package.json with libraries needed by all SSAs.
      - `update_node_modules()` runs `npm install` if package.json was updated above.
      - `update_tests()` .
    - `finalize_bask_client_side_actions_folder()` ??
    - `update_bask_visual_elements()` ??

- `git commit` all latest changes with message `Pull updates from main branch`.

Any local changes that haven't been `Bask Push`ed to Bubble prior to a pull will be overwritten... Maybe catch this condition and alert user to save / commit this somehow.

... With that, the last thing to keep in mind is that whenever you run `Bask Pull`, any folders and files in git `main` that are not Bubble defaults will be deleted. This is a Bubble specific behavior we cannot change and it results in the deletion of our `src` folder in `main`. Nevertheless, Bask is built to handle this and will correctly sync your changes from `main` to whatever git branch you're currently working in whenever you run `Bask Pull`. For this reason, you should not treat the `main` branch as the full copy of your

As a result, We recommend that you create a third git branch for holding checkpoints of fully production ready checkpoints of your plugin.

### `Bask Auto Push`

Set Bask to automatically push local changes to your Bubble plugin without running your `build` script. To trigger an automatic push, simply unfocus your VS Code editor (switch tabs to your bubble development app). This is the default push mode.

- Project folder is already be defined in a way that VS Code can detect is a bask repository
- If project is already up to date, then don't push any changes. Notify that remote is already up to date.
- If project is not up to date, then

? Maybe these functions load build preferences from `build.js`?

- Handle
- Push changes and notify user that updates have been pushed to remote.
  ...

- Run `merge_bask_into_core()`
  - `update_core_server_side_actions()`
  - `update_core_client_side_actions()`
  - `update_core_visual_elements()`
    All of these functions rely on `map_bask_to_core(file_path)`
    - Accepts any bask file path, and tells you what core file path it corresponds to

### `Bask Auto Build and Push`

Set Bask to automatically push local changes to your Bubble plugin after running your `build` script. To trigger an automatic push, simply unfocus your VS Code editor.

### `Bask Switch Plugin`

Specify the plugin you want to work on with Bask.

- Selection of a plugin always starts by syncing it's metadata (not the plugin code itself) from Bubble. We will never start from a local repo.
- Fetch/store a full list of plugins from the user's bubble account. When we sync it locally for the first time, we'll insert its local file path into the correct entry in the local plugin directory. Everytime we want to switch plugins, we refresh our local plugin directory with the remote one (taking care to keep information about file paths). The addressing system for the local plugin directory should be keyed by the plugin's ID so that we can maintain updated information across plugin name changes.
- `bask_switch_plugin()` is callable from other functions (like our initialization routine)

- Once plugin is specified, persist this value across sessions as `current_plugin`
- Last step: calls `bask_pull()`

### `Bask Which Plugin`

Returns the name of the plugin Bask is currently working on.

- Perhaps this would be better as some sort of persistent indicator.

### `Bask Set Bubble Credentials`

Securely saves your Bubble username and password within VS Code so Bask can automate plugin related actions within your Bubble account.

- If credentials were recently set because `Bask Set Bubble Credentials` was the very first command ever run, then do nothing. Otherwise, run as expected.
- We see that

## Action

### Auto Refresh

Refreshes the current Bubble page whenever a change has been made to your app or plugin.

Explain how to setup this action.

## Testing

### What are some options we have for setting up unit tests?

1. Run SSA tests in node

   - Will probably have to create jigs / shims that emulate bubble locally. May be difficult to create this well.
   - Ideally most tests can run locally, but then graduate to bubble side testing.
   - Requires more technical expertise / time setting up tests.
   - Benefits from version control

2. Create a Bubble template for easily creating, running and learning from tests in Bubble.

   - Most if not all tests run in Bubble
   - Require less technical expertise as folks don't have to venture down the rabbit hole of learning a testing framework or writing tests with them.
   - When complete, plugin developers will have a ready made "code coverage" page which has three benefits:
     - Sureity their plugin works in Bubble
     - Can show off their code coverage to signal that their plugin is high quality
     - [Requires server] Plugins of any material complexity will occasionaly (and randomly) just stop working - either due to updates to the browser, an associated 3rd party service or Bubble itself. This template page can be built in such a way that it can be monitored and set to alert a developer if the plugin ever fails all or certain tests.
   - Provides a minimum level of self documentation that - if nothing else - a developer's customer's can use to learn how to use their plugin. **If we could make the tests page function as a compelling enough form of documentation, this would accelarate plugin development AS WELL AS plugin adoption**.

   - If setup correctly, there would be a way for the bask extension to summarize, document (and therefore version control) test coverage in the github branch itself.

3. Use puppeteer to automate tests.
   - requires more technical knowhow.

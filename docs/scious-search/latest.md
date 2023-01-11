---
sidebar_position: 1
sidebar_label: Latest
---

import Figure from '../components/figures'
import VideoGIF from '../components/videogifs'
import Highlight from '../components/highlight'

# Scious Search [Latest]

The following is documentation for the latest version of the Scious Search plugin - `version 1.1.0`.

# Features

**Scious Search** makes it possible to build real time, search-as-you-type experiences in Bubble. As a deep integration, it:

- Preserves Bubble privacy settings across all data types.
- Works with live, test, and other versions of your app so you can thoroughly test your integration before going live.
- Does not degrade or slow down as your database grows since it uses [Algolia](https://www.algolia.com/) or [Typesense](https://cloud.typesense.org/bubble) as a search provider.
- Can sort search results by options (which is not natively available in Bubble).
- Makes it easier to swap and experiment with other search providers (which can save you money).

# Demo

<nav className="pagination-nav">
  <div className="pagination-nav__item">
    <a className="pagination-nav__link" href="https://scious-plugins.bubbleapps.io/scious-search">
      <div className="pagination-nav__sublabel">Scious Search Plugin Demo</div>
      <div className="pagination-nav__label">Instantly search over 250,000 records →</div>
    </a>
  </div>

  <div className="pagination-nav__item">
    <a className="pagination-nav__link" href="https://bubble.io/page?type=page&name=scious-search&id=scious-plugins&tab=tabs-1">
      <div className="pagination-nav__sublabel">✪</div>
      <div className="pagination-nav__label">Demo Editor →</div>
    </a>
  </div>
</nav>

.
:::tip

Check out our demo's editor above for an excellent reference while integrating our plugin.

:::

## Get started in less than 10 minutes

We just need a few things to start searching records in your Bubble app:

1. [Install plugin](#install-plugin).
2. [Get Scious Search API Key](#get-scious-search-api-key).
3. [Get your Search Provider's API keys](#get-your-search-providers-api-keys).
4. [Setup the Scious Search plugin](#setup-scious-search-plugin).
5. [Ensure your API is displaying key names as fields](#display-api-key-names-as-fields).
6. [Sync your database](#sync-your-database).

### Install plugin

Head on over to your plugin tab, search _<Highlight color="#25c2a0">"scious search"</Highlight>_ and install.

<VideoGIF src="https://s3.amazonaws.com/appforest_uf/f1669532176275x365303613975589400/Install%20scious%20search%20compressed.mp4" />

### Get Scious Search API Key.

Next, go to [https://scious.io/plugins](https://scious.io/plugins),

### Get your Search Provider's API keys

#### Algolia

Algolia integrations require three things: an `Application ID`, `Search Only API Key` and an `Admin API Key`. To get these, [log into Algolia](https://www.algolia.com/) > navigate to `Settings` on the bottom left corner of your screen:

<Figure src="img/scious-search/nav to settings.png" />

then > tap `API Keys`:

<Figure src="img/scious-search/click on api keys.png" />

If you've just created an Algolia account then the fields we need will be listed like so:

<Figure src="img/scious-search/algolia keys.png" />

:::warning

If you already have an existing Algolia application with data in it, then first create a new application (as shown below) before proceeding with the remainder of this tutorial. Our synchronization step will overwrite indices in the selected application and we don't want you to loose any important data. Once created, use that new application's API keys in the following step.

:::

<Figure src="img/scious-search/create algolia application.png" />

#### Typesense

### Setup Scious Search plugin

### Display API key names as fields

In your bubble editor, tap `Settings` > `API` tab > and then enable `Use field display instead of ID for key names` as shown below.

<Figure src="img/scious-search/use field display instead of id.png" />

### Sync your database

While we provide a `Sync Search Index` action (details [below](latest#sync-search-index)) for mirroring data from your Bubble app to your Search Provider, we've also built a synchronization admin page you can copy and paste into your app to start your first sync.

- `Fields to search`: The Bubble fields to sync supplied as a JSON list... for example `['Author','Title','Created Date']`. If empty, then all of the columns will be synchronized. Empty is defined as nothing at all, `[]`, `['']`, or `[""]`. Any other value will result in an error.

## Implement search

We can now start searching our records!
Walk through making

## Keep your search index synchronized

Once both your search index and data type of interest are synchronized, the best way to _keep_ them synchronized is to add, update or delete individual search records as the records for that data type are added, updated or deleted.

??? Clean up the following tip for auto adding records... recommend this as a convenient catch all, especially for apps that may create new records in a variety of ways, or for those who's admin's frequenly add data to their database using the bulk data uploader.

For reference, the following has been shown to work even when adding hundreds of new records on the Professional plan:

- Create a trigger (of whichever data type(s) you often upload) who's condition is to run when thing before unique_id is empty and thing now unique_id is not empty. This will have the effect of triggering whenever a new record of that thing is created in your bubble app.
- As an action in the above trigger, now create a search search record.
  That's it. Now, every time you create a record, this workflow will trigger and create a new search record. It will also work across every development environment you have.

# Algolia

dfdf

## Actions

### Sync Search Index

### Add search record

### Update search record

### Delete search record

## Visual Elements

### Scious Search

Now that we've synced search records into Algolia

The Scious Search visual element is where all

:::tip

Want to see your `Filters` without having to print them to a text box? Open your browser developer tools (on Mac press..., on Windows , pressPress `CTRL` ) and you'll see your search filter printed to console. Explain that this printing only happens in dev environments. If you also want it to appear in live, you can include a console.log() statement in the filters js. But of course, this would double your print statments in dev environmnets.

:::

## When to resync search indices

- **After upgrading plugin versions**. This ensures your search index and plugin are always configured correctly since, from time to time, we make changes to the way indices are built and interacted with.
- **After editing any name of any field relevant to a search.** A field is relevant if it is used to filter, search or sort records. Specifically, this extends to:
  - **Data type name**
  - **Data type field**
  - **Option set name**
  - **Option name** but changing any of an option's other attributes does not require a resync.
- **After changing your domain name**. You will also need to update your Scious Search API key, [see here ⤴ ](#get-scious-search-api-key).

## Known limitations

## Support

Offical support is

## Additional resources

- [Scious Search Demo](https://scious-plugins.bubbleapps.io/scious-search).
- [Scious Search Demo Editor](https://bubble.io/page?type=page&name=scious-search&id=scious-plugins&tab=tabs-1).
- Refer to our demo's editor for a self documented guide on how to setup and use Scious Search.
- Need help integrating Scious Search? Drop a message in our official Bubble thread and we'll help you get going!
- Prefer for someone to integrate Scious Search for you? Set

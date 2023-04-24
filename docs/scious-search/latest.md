---
sidebar_position: 1
sidebar_label: Latest
pagination_next: null
pagination_prev: null
---

import Figure from '../components/figures'
import Arcade from '../components/arcade'
import VideoGIF from '../components/videogifs'
import Highlight from '../components/highlight'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Scious Search [Latest]

The following is documentation for the latest version of the Scious Search plugin - `version 1.3.3`

## Features

**Scious Search** makes it possible to build real time, search-as-you-type experiences in Bubble. As a deep integration, it:

- Preserves Bubble privacy settings across all data types.
- Does not degrade or slow down as your database grows to millions of records since it uses [Algolia](https://www.algolia.com/) or [Typesense](https://cloud.typesense.org/bubble) as a search provider.
- Returns an actual bubble thing, which can be used like any native bubble data type within the editor.
- Works with all versions of your app so you can thoroughly test integrations before going live.
- Can filter searches by whether a value is missing (which is not available in any current Algolia or Typesense integration)
- Can sort search results by options (which isn't even available in native Bubble searches).
- Can sort search results alphabetically.
- Can facet search results.
- Can save you money.

## Demos

<nav className="pagination-nav">
  <div className="pagination-nav__item">
    <a className="pagination-nav__link" href="https://plugins.scious.io/scious-search">
      <div className="pagination-nav__sublabel">Scious Search Overview</div>
      <div className="pagination-nav__label">Instantly search over 250,000 records →</div>
    </a>
  </div>

  <div className="pagination-nav__item">
    <a className="pagination-nav__link" href="https://plugins.scious.io/scious-search-ecommerce-typesense">
      <div className="pagination-nav__sublabel">Faceted Search</div>
      <div className="pagination-nav__label">Ecommerce template →</div>
    </a>
  </div>

  <div className="pagination-nav__item">
    <a className="pagination-nav__link" href="https://bubble.io/page?version=live&type=page&name=scious-search&id=scious-plugins&tab=tabs-1">
      <div className="pagination-nav__sublabel">Bubble app editor</div>
      <div className="pagination-nav__label">Demo Editor →</div>
    </a>
  </div>
</nav>

## Get started

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

</TabItem>
<TabItem value="Typesense" label="Typesense">

:::warning

If you already have an existing Typesense cluster with data in it, then first create a new cluster before proceeding with the remainder of this tutorial. Our synchronization step **will overwrite same named indices** in the selected application. Once created, use the new cluster's API keys and host in the following step.

:::

Typesense integrations require three things: a `Host`, `Search API Key` and an `Admin API Key`. To get these, [log into Typesense](https://cloud.typesense.org/bubble) > then create a new cluster with the default configuration by tapping `Clusters` in the nav bar > then `+ New Cluster` and finally `Launch`. After your cluster is provisioned, click `Generate API Keys`:

<Figure src="img/scious-search/click get typesense keys.png" />

When prompted, save the generated `.txt` file to a secure location > then open it. The fields we need will be listed like so:

<Figure src="img/scious-search/typesense api keys file.png" />

Finally, in your bubble editor, navigate to `Plugins` > `Scious Search` > then paste the `Search Only API Key`, `Admin API Key` and `Node`/`Host` into the Scious Search plugin configuration fields for Typesense.

<Figure src="img/scious-search/Scious search config typesense.png" />

</TabItem>
</Tabs>

### Sync your database

:::warning

If you already have an Algolia (or Typesense) index with data in it, ensure you create a new Algolia application (or Typesense cluster) and set it's ID in the Scious Search plugin configuration tab. Otherwise, the **following steps may overwrite existing indices**.

:::

We provide a `Sync Search Index` action for mirroring data from your Bubble app to your search provider. While you can use this to create your own synchronization administration page, we've already built a `Search Admin Dashboard` template you can copy into your app to get you going. The template [looks like this](https://plugins.scious.io/scious-search-admin). Let's overview it, first, by following the demo below.

<Arcade src="https://demo.arcade.software/9svSsMqR779w8ebVNCv4?embed" />

Now that you have a feel for how the Search Admin Dashboard looks and feels, let's add it to your app. Follow these directions. Towards the middle, you'll be asked to open the our `Admin Dashboard Template` - link to our editor for that [is here](https://bubble.io/page?version=live&type=page&name=scious-search-admin&id=scious-plugins&tab=tabs-1). You'll be directed to copy the `Group Search Admin Dashboard` group "with workflows" and "Paste with workflows" into your app.

<Arcade src="https://demo.arcade.software/ibtoHyvfJMfcM3N97F9W?embed" />

## Implement search

Once you've synced your data type(s) of interest, we can start searching them! This is as easy as placing our [Scious Search visual element](#scious-search) onto your page (a page other than your `sync-admin` page), specifying:

- `Search Provider`
- `Result type`
- `Fields to search`

and finally displaying the visual element's `Search Results` in a repeating group. We're actively creating a demo like the ones above to demonstrate this **as you read this** and will update this section to better illustrate this soon. In the mean time, check out any of the Scious Search visual elements [from our demo](https://bubble.io/page?version=live&type=page&name=scious-search&id=scious-plugins&tab=tabs-1) to see exactly how this is setup.

## Keep your search index synchronized

Once both your search index and data type of interest are synchronized, the best way to _keep_ them synchronized is to create, update or delete individual search records as the records for that data type are created, updated or deleted.

Since we're getting started, an easy way to do this is to:

- Create a backend trigger (of whichever data type(s) you often upload) who's condition is to run when thing before `unique_id` is empty and thing now `unique_id` is not empty. This will have the effect of triggering whenever a new record of that thing is created in your bubble app.
- As an action in the above trigger, now create a search search record.

That's it. Now, every time you create a record, this workflow will trigger and create a new search record. You can setup similar triggers to update a search record. We've seen this approach work well in production. That said, since this approach relies on a backend trigger, which naturally adds a small delay to running that set of actions, you may instead want to create / update your search records as you create / update data types client side. To do this, you'll simply follow-up any create / modify data type action in your regular workflows with either of our Create / Update Search record actions. This ensures that your search indices are up to date within, on average, 3 seconds.

## When to resync search indices

- **After upgrading plugin versions**. This ensures your search index and plugin are always configured correctly since, from time to time, we change the way indices are built and referenced.
- **After editing any name of any field relevant to a search.** A field is relevant if it is used to filter, search or sort records. Specifically, this extends to:
  - **Data type name**
  - **Data type field**
  - **Option set name**
  - **Option name** but changing any of an option's other attributes does not require a resync.
- **After changing your domain name**. You will also need to update your Scious Search API key, [see here ⤴ ](#get-scious-search-api-key).

## Actions

### Sync Search Index

<Figure src="img/scious-search/Sync search record.png" />

**Inputs**

1. `Search Provider` The search provider you've synced your data with.
2. `Website Home URL` Enter the dynamic expression "Website Home URL"
3. `Data Type` The data type to sync.
4. `Fields to search` The Bubble fields to sync supplied as a JSON list. For example `['Author','Title','Created Date']`. If empty, then all columns will be synced. Empty is defined as nothing at all, `[]`, `['']`, or `[""]`. Any other value will result in an error.
5. `Fields to sort` The Bubble fields that your search results can be sorted by (supplied as a JSON list).
6. `Fields to facet` The Bubble fields that can be faceted (supplied as a JSON list).
7. `Fields to filter if empty` The Bubble fields that your search results can be filtered by if empty (supplied as a JSON list).

**Outputs**

1. `Returned error` A Yes/No indicating whether there was an error.
2. `Error description` Error details as a plain string or JSON encoded string.
3. `Result` Additional diagnostics data. Mainly used for development.

### Create search record

<Figure src="img/scious-search/Create search record.png" />

**Inputs**

1. `Search Provider` The search provider you've synced your data with.
2. `Website Home URL` Enter the dynamic expression "Website Home URL".
3. `Data Type` The data type to create a search record for.
4. `Record` The Bubble record to be created as a searchable record.

**Outputs**

1. `Returned error` A Yes/No indicating whether there was an error.
2. `Error description` Error details as a plain string or JSON encoded string.
3. `Result` Additional diagnostics data. Mainly used for development.

### Update search record

<Figure src="img/scious-search/update search record clean.png" />

**Inputs**

1. `Search Provider` The search provider you've synced your data with.
2. `Website Home URL` Enter the dynamic expression "Website Home URL".
3. `Data Type` The data type to create a search record for.
4. `Record` The Bubble record to be updated as a searchable record.

**Outputs**

1. `Returned error` A Yes/No indicating whether there was an error.
2. `Error description` Error details as a plain string or JSON encoded string.
3. `Result` Additional diagnostics data. Mainly used for development.

### Delete search record

<Figure src="img/scious-search/Delete search record.png" />

**Inputs**

1. `Search Provider` The search provider you've synced your data with.
2. `Website Home URL` Enter the dynamic expression "Website Home URL".
3. `Data Type` The data type to create a search record for.
4. `Record` The Bubble record to delete from your search records.

**Outputs**

1. `Returned error` A Yes/No indicating whether there was an error.
2. `Error description` Error details as a plain string or JSON encoded string.
3. `Result` Additional diagnostics data. Mainly used for development.

### Refresh search results

<Figure src="img/scious-search/Refresh search results.png" />

Refresh the search results from a Scious Search element.

**Inputs**

1. `Pause length (ms)` The time in milliseconds to wait before refreshing search results.

## Visual Elements

### Scious Search

<Figure src="img/scious-search/Scious Search Visual Element.png" />

**Inputs**

1. `Search Provider` The search provider you've synced your data with.
2. `Result type` Search result data type.
3. `Search query` Set to the Typing Trigger `Output text` for best results.
4. `Fields to search` The Bubble fields to search supplied as a JSON list.
5. `Filters` This section allows you to compose your filters using Javascript. Follow your search provider's syntax for building filtering strings.
6. `Sort by` A dictionary of the fields to sort by specified in JSON.
7. `Results per page` Number of search results returned in each page of results.
8. `Page` The current page of search results to display starting at "1".
9. `Field to highlight` Field name to return highlights for. Must be one of the fields already listed in `Fields to search`.
10. `Advanced Options` Additional options for tuning search results.

**Outputs**

1. `Search Results` List of matched bubble things of the data type specified by `Data Type`.
2. `Results Count` Number of results.
3. `Search Time` The time it took to return a search result in milliseconds.
4. `Page Count` Number of pages of results for the current search.
5. `Returned error` A Yes/No indicating whether there was an error.
6. `Error description` Additional text describing the error.
7. `Highlights` List of matched highlight snippets.
8. `Actual page` The actual page of search results returned.

:::tip

Want to see your `Filters` without having to print them to a text box? Open your browser developer tools (on Mac press..., on Windows , pressPress `CTRL` ) and you'll see your search filter printed to console. Explain that this printing only happens in dev environments. If you also want it to appear in live, you can include a console.log() statement in the filters js. But of course, this would double your print statments in dev environmnets.

:::

### Typing Trigger

<Figure src="img/scious-search/typing trigger.png" />

**Inputs**

1. `Search element ID` The unique ID of the relevant Bubble input element.
2. `Typing timeout` The milliseconds between keystrokes before fetching new search results. Tune this value to reduce the number of unnecessary real time search requests initiated by queries that were typed quickly.
3. `Character minimum` The minimum number of characters needed in a query to return search results.

**Outputs**

1. `Output text` The current text value of the input with ID `Search element ID`.
2. `Is typing` Boolean indicator that toggles On and then Off every time a key is added to the search input referenced by `Search element ID`.

### Get Data Types

This visual element does not have any inputs.

**Outputs**

1. `Data types` Your Bubble app's data types as a list.
2. `Data type fields` Your Bubble app's data type's fields as a list.
3. `Browser ID` A developer specific output. The current user's browser ID. Used for locking sync admin capabilities to a particular device. Will be removed in future releases.

### Get Facets

<Figure src="img/scious-search/Get Facets.png" />

**Inputs**

1. `Search provider`
2. `Result type` Search result data type.
3. `Facet type` Set to the "Facet (🔍)" type.
4. `Search query` Keywords to search. Set to the Typing Trigger Value for best results.
5. `Fields to search` The Bubble fields to search supplied as a JSON list.
6. `Fields to facet` The Bubble fields to facet supplied as a JSON list. Specifies the order of returned "Facets".
7. `Filters` This section allows you to compose your filters using Javascript. Follow your search provider's syntax for building filtering strings.
8. `Max values per facet` The maximum number of facet values returned per facet.
9. `Facet query` Keywords to search in `Fields to facet`. Set to the Typing Trigger's `Output text` for best results.
10. `Advanced options` Additional options for tuning search results.

**Outputs**

1. `Returned error` A Yes/No indicating whether there was an error.
2. `Error description` Additional text describing the error.
3. `Facets` The facet items and statistics for each field specified in `Fields to facet`.

## Api calls

We have a single data API call named `Facets (🔍)`. This API call does not return any usable data. It exists solely to set the type of data that the [Get Facets](#get-facets) visual element returns. Do not use this API call outside of the Get Facets visual element. Don't like that we did this? Show your support for fixing this problem by upvoting and commenting on [this feature request](https://bubble.io/ideaboard?idea=1603764356815x558406947894198300).

## Known limitations

- We have not implemented Algolia "Recommend" (we plan to along with a Typesense equivalent).
- Search filters are not able to span multiple data types / indices. That said, we have work arounds for this (will be documenting this soon)
- You cannot sync more than one geographic address field per record per index using Algolia - that's a limitation of Algolia. Typesense can sync any number of geographic addresses per record.

## Support

- Refer to [our demo's editor](https://bubble.io/page?version=live&type=page&name=scious-search&id=scious-plugins&tab=tabs-1) for a self documented guide on how to setup and use Scious Search.
- Need help integrating Scious Search? Drop a message in [our free Bubble support channel](https://forum.bubble.io/t/introducing-scious-search-solve-instant-search-once-and-for-all/259315/last) where we'll answer questions as able.
- Prefer to have someone integrate Scious Search for you? We'll be offering integration services 'for hire' soon.
- We offer a [Service Level Agreement](https://buy.stripe.com/8wMg2x1if3zz3ba6op) for customers requiring plugin service and maintenance guarentees.

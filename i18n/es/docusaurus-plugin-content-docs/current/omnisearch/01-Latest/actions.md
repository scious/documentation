---
sidebar_position: 4
---

import Figure from '../../components/figures'
import Arcade from '../../components/arcade'
import Highlight from '../../components/highlight'
import BubblePropertyEditor from '../../components/bubblePropertyEditor';
import Embed from '../../components/embed'

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Actions

## Sync Search Index

This is the action used to sync indices. While we've already set it up for you within our [sync admin template](https://plugins.scious.io/omnisearch-admin), you can use it to make a custom search index administration page.

<Figure src="img/omnisearch/Sync search record.png" />

**Inputs**

1. `Search Provider` The search provider you've synced your data with.
2. `Website Home URL` Decides which environment we're going to synchronize. In general, you'll want to enter Bubble's dynamic expression "Website Home URL" but you can build your various environment URLs seperately (say, to be selected from a dropdown) to feed this input.
3. `Data Type` The data type to sync.
4. `Fields to search` The Bubble fields to sync supplied as a JSON list. For example `['Author','Title','Created Date']`. If empty, then all columns will be synced. Empty is defined as nothing at all, `[]`, `['']`, or `[""]`. Any other value will result in an error.
5. `Fields to sort` The Bubble fields that your search results can be sorted by (supplied as a JSON list).
6. `Fields to facet` The Bubble fields that can be faceted (supplied as a JSON list).
7. `Fields to filter if empty` The Bubble fields that your search results can be filtered by if empty (supplied as a JSON list).

**Outputs**

1. `Returned error` A Yes/No indicating whether there was an error.
2. `Error description` Error details as a plain string or JSON encoded string.
3. `Result` Additional diagnostics data. Mainly used for development.

## Create search record

<Figure src="img/omnisearch/Create search record.png" />

**Inputs**

1. `Search Provider` The search provider you've synced your data with.
2. `Website Home URL` Enter the dynamic expression "Website Home URL".
3. `Data Type` The data type to create a search record for.
4. `Record` The Bubble record to be created as a searchable record.

**Outputs**

1. `Returned error` A Yes/No indicating whether there was an error.
2. `Error description` Error details as a plain string or JSON encoded string.
3. `Result` Additional diagnostics data. Mainly used for development.

## Update search record

<Figure src="img/omnisearch/update search record clean.png" />

**Inputs**

1. `Search Provider` The search provider you've synced your data with.
2. `Website Home URL` Enter the dynamic expression "Website Home URL".
3. `Data Type` The data type to create a search record for.
4. `Record` The Bubble record to be updated as a searchable record.

**Outputs**

1. `Returned error` A Yes/No indicating whether there was an error.
2. `Error description` Error details as a plain string or JSON encoded string.
3. `Result` Additional diagnostics data. Mainly used for development.

## Delete search record

<Figure src="img/omnisearch/Delete search record.png" />

**Inputs**

1. `Search Provider` The search provider you've synced your data with.
2. `Website Home URL` Enter the dynamic expression "Website Home URL".
3. `Data Type` The data type to create a search record for.
4. `Record` The Bubble record to delete from your search records.

**Outputs**

1. `Returned error` A Yes/No indicating whether there was an error.
2. `Error description` Error details as a plain string or JSON encoded string.
3. `Result` Additional diagnostics data. Mainly used for development.

## Refresh search results

<Figure src="img/omnisearch/Refresh search results.png" />

Refresh the search results from a Omnisearch element. This action is typically used directly following any Create or Update a search record action in scenarios where users should be able to see the effect of those changes reflected in search results.

**Inputs**

1. `Pause length (ms)` The time in milliseconds to wait before refreshing search results.

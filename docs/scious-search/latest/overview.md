---
sidebar_position: 1
sidebar_label: Overview
pagination_prev: null
---

import Figure from '../../components/figures'
import Arcade from '../../components/arcade'
import VideoGIF from '../../components/videogifs'
import Highlight from '../../components/highlight'
import BubblePropertyEditor from '../../components/bubblePropertyEditor';
import Embed from '../../components/embed'

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

## Known limitations

- We have not implemented Algolia "Recommend" (we plan to along with a Typesense equivalent).
- Search filters are not able to span multiple data types / indices. That said, we have work arounds for this (will be documenting this soon)
- You cannot sync more than one geographic address field per record per index using Algolia - that's a limitation of Algolia. Typesense can sync any number of geographic addresses per record.

## Support

- Refer to [our demo's editor](https://bubble.io/page?version=live&type=page&name=scious-search&id=scious-plugins&tab=tabs-1) for a self documented guide on how to setup and use Scious Search.
- Need help integrating Scious Search? Drop a message in [our free Bubble support channel](https://forum.bubble.io/t/introducing-scious-search-solve-instant-search-once-and-for-all/259315/last) where we'll answer questions as able.
- Prefer to have someone integrate Scious Search for you? We'll be offering integration services 'for hire' soon.
- We offer a [Service Level Agreement](https://buy.stripe.com/8wMg2x1if3zz3ba6op) for customers requiring plugin service and maintenance guarentees.

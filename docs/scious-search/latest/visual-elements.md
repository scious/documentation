---
sidebar_position: 5
pagination_next: null
---

import Figure from '../../components/figures'
import Arcade from '../../components/arcade'
import VideoGIF from '../../components/videogifs'
import Highlight from '../../components/highlight'
import BubblePropertyEditor from '../../components/bubblePropertyEditor';
import Embed from '../../components/embed'

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Visual elements

## Scious Search

This visual element is the work horse of Scious Search - it's what returns search results from your provider of choice.

<Figure src="img/scious-search/Scious Search Visual Element.png" />

**Inputs**

1. `Search Provider` The search provider you've synced your data with.
2. `Result type` Search result data type.
3. `Search query` Set to the Typing Trigger `Output text` for best results. An empty search query returns all results matching `Filters`.
4. `Fields to search` The Bubble fields to search supplied as a JSON list.
5. `Filters` This section allows you to compose your filters using Javascript. For details, checkout our [Filters Deep Dive](#filters-deep-dive) section.
6. `Sort by` A dictionary of the fields to sort by specified in JSON.
7. `Results per page` Number of search results returned in each page of results.
8. `Page` The current page of search results to display starting at "1".
9. `Field to highlight` Field name to return highlights for. Must be one of the fields already listed in `Fields to search`.
10. `Advanced options` Additional options for tuning search results. See details in our [Advanced options](#advanced-options) section

**Outputs**

1. `Search Results` List of matched bubble things of the data type specified by `Data Type`.
2. `Results Count` Number of results.
3. `Search Time` The time it took to return a search result in milliseconds.
4. `Page Count` Number of pages of results for the current search.
5. `Returned error` A Yes/No indicating whether there was an error.
6. `Error description` Additional text describing the error.
7. `Highlights` List of matched highlight snippets.
8. `Actual page` The actual page of search results returned.

## Filters deep dive

This section applies to the following visual elements:

- [Scious Search](#scious-search)
- [Get Facets](#get-facets)

Whether you want to filter by a single dropdown or apply 12 different criteria with conditional dependencies, our filtering capability is flexible enough to accomodate most needs. The most important thing to know is our `Filters` input exists to accomplish one goal:

> **Make a string of text your search provider can interpret as filters.**

That's the big idea. Our search providers expect filter strings that contain boolean operators, numeric comparisons, GeoJSON, and more - so to accomodate this, we've made our `Filters` input expect Javascript. If you're familiar with the `Expression` element from the [Toolbox plugin](https://bubble.io/plugin/1488796042609x768734193128308700), then you should feel right at home using this.

The examples that follow will get you filtering with Scious Search, starting simple and then getting more complex. We'll be looking at search provider specific implementations, so be sure to click the right one below to follow along.

### Low Complexity

<Tabs groupId="search-providers">
<TabItem value="Algolia" label="Algolia">

These examples are from our [Algolia Filter demo](https://plugins.scious.io/scious-search-algolia-filter-examples). Check out it's [Bubble editor page](https://bubble.io/page?version=live&type=page&name=scious-search-algolia-filter-examples&id=scious-plugins&tab=tabs-1) to see and interact with these in context.

**Behold.** The simplist filter you can build.

<BubblePropertyEditor title="Scioussearch Simple" searchProvider="Algolia">

```js
"usage_count<40"
```

</BubblePropertyEditor>

Like we said, the goal of the `Filters` expression is to create a set of filter intructions Algolia can understand. Here, this text asks Algolia to:

> Return all records where the `usage_count` is less than `40`

We're leaning on Algolia's [Filter by numeric syntax](https://www.algolia.com/doc/guides/managing-results/refine-results/filtering/how-to/filter-by-numeric-value/#applying-a-numeric-filter) to accomplish this. To learn about all of Algolia's filter grammars, check out their [excellent documentation here](https://www.algolia.com/doc/guides/managing-results/refine-results/filtering/).

Finally, please note that field names themselves (i.e. `usage_count` above) are case sensitive - they should match the case of the field names as written in your Bubble database.

</TabItem>
<TabItem value="Typesense" label="Typesense">

These examples are from our [Typesense Filter demo](https://plugins.scious.io/scious-search-typesense-filter-examples). Check out it's [Bubble editor page](https://bubble.io/page?version=live&type=page&name=scious-search-typesense-filter-examples&id=scious-plugins&tab=tabs-1) to see and interact with these in context.

Behold. The simplist filter you can build.

<BubblePropertyEditor title="Scioussearch Simple" searchProvider="Typesense">

```js
"usage_count<40"
```

</BubblePropertyEditor>

Like we said, the goal of the `Filters` expression is to create a set of filter intructions Typesense can understand. Here, this text asks Typesense to:

> Return all records where the `usage_count` is less than `40`

We're leaning on Typesense's numeric filtering syntax to accomplish this. To learn about all of Typesense's filter grammars, check out their [excellent documentation here](https://typesense.org/docs/latest/api/search.html#filter-parameters).

Finally, please note that field names themselves (i.e. `usage_count` above) are case sensitive - they should match the case of the field names as written in your Bubble database.

</TabItem>
</Tabs>

### Mid Complexity

<Tabs groupId="search-providers">
<TabItem value="Algolia" label="Algolia">

This next example uses Javascript's ternary operator to conditionally build a filter text.

<BubblePropertyEditor title="Scioussearch mid complexity" searchProvider="Algolia">

```js
var categories_filter = (Multidropdown Categories value:count > 0) ? "categories:'Multidropdown Categories value:each items Display join with ' AND categories:''": ""

categories_filter
```

</BubblePropertyEditor>

Let's break it down. We're asking Algolia to:

> Return all records where the `categories` field contains all of the items from `Multidropdown Categories`, but only if `Multidropdown Categories` has at least one value selected.

If we were to build this filter in Bubble's native search, we'd `Do a search for` and check `ignore empty constraints` to ignore the `Multidropdown Categories` when empty.

Javascript's [ternary operator](https://www.javascripttutorial.net/javascript-ternary-operator/) is our way of accomplishing the same thing. It's a condensed form of an `if`... `else`... statement and it looks like this:

```js
var our_variable = (some_condition) ? "value_A" : "value_B"
```

What happens here is when `some_condition` is true, then `our_variable` will be assigned the text `"value_A"`. Otherwise it will be assigned `"value_B"`.

So in our example,

```js
var categories_filter = (Multidropdown Categories value:count > 0) ? "categories:'Multidropdown Categories value:each items Display join with ' AND categories:''": ""
categories_filter
```

we check if `Multidropdown Categories value:count > 0`.

- **If it is zero**, then we assign the empty text `""` to `categories_filter`. As a result, Algolia will not apply any filters to our search results.
- **If it is greater than zero**, here we ultimately want to make text that looks something like

  > `"categories:'technical' AND categories:'social network'"`

  So to do that, we:

  - start with the phrase `categories:'`
  - append `' AND categories:'` to each `Multidropdown Categories value`
  - and finish off the string with a single quotation mark `'`

  Put it all together, and that looks like:

  > `"categories:'Multidropdown Categories value:each items Display join with ' AND categories:''"`

With the `categories_filter` variable completely defined, the last thing to do in the `Filters` input is state the variable we want to return. Since we only have one filter variable, `categories_filter`, that's the one we state.

To close, in this example we leaned on [Algolia's Boolean Operator](https://www.algolia.com/doc/guides/managing-results/refine-results/filtering/in-depth/combining-boolean-operators/) syntax to `AND` multiple category filters together. Whether our source values come from a Multidropdown, a List Intersection, or some other list, you can use the same approach to make filters that return records matching ALL items within a list field. Note that Algolia also has the boolean operator `OR` which can be used to return records that match ANY items within a list field. They've also got a `NOT` operator that, along with `AND` and `OR`, can be chained and scoped using parenthesis `()` to craft even more sophisticated filters.

</TabItem>
<TabItem value="Typesense" label="Typesense">

This next example uses Javascript's ternary operator to conditionally build a filter text.

<BubblePropertyEditor title="Scioussearch mid complexity" searchProvider="Typesense">

```js
var categories_filter = (Multidropdown Categories value:count > 0) ? "categories:='Multidropdown Categories value:each items Display join with ' && categories:''": ""

categories_filter
```

</BubblePropertyEditor>

Let's break it down. We're asking Typesense to:

> Return all records where the `categories` field contains all of the items from `Multidropdown Categories`, but only if `Multidropdown Categories` has at least one value selected.

If we were to build this filter in Bubble's native search, we'd `Do a search for` and check `ignore empty constraints` to ignore the `Multidropdown Categories` when empty.

Javascript's [ternary operator](https://www.javascripttutorial.net/javascript-ternary-operator/) is our way of accomplishing the same thing. It's a condensed form of an `if`... `else`... statement and it looks like this:

```js
var our_variable = (some_condition) ? "value_A" : "value_B"
```

What happens here is when `some_condition` is true, then `our_variable` will be assigned the text `"value_A"`. Otherwise it will be assigned `"value_B"`.

So in our example,

```js
var categories_filter = (Multidropdown Categories value:count > 0) ? "categories:='Multidropdown Categories value:each items Display join with ' && categories:''": ""
categories_filter
```

we check if `Multidropdown Categories value:count > 0`.

- **If it is zero**, then we assign the empty text `""` to `categories_filter`. As a result, Typesense will not apply any filters to our search results.
- **If it is greater than zero**, here we ultimately want to make text that looks something like

  > `"categories:='technical' && categories:='social network'"`

  So to do that, we:

  - start with the phrase `categories:='`
  - append `' && categories:='` to each `Multidropdown Categories value`
  - and finish off the string with a single quotation mark `'`

  Put it all together, and that looks like:

  > `"categories:='Multidropdown Categories value:each items Display join with ' && categories:''"`

With the `categories_filter` variable completely defined, the last thing to do in the `Filters` input is state the variable we want to return. Since we only have one filter variable, `categories_filter`, that's the one we state.

To close, in this example we leaned on [Typesense's Boolean Operator](https://typesense.org/docs/latest/api/search.html#filter-parameters) syntax to `&&` multiple category filters together. Whether our source values come from a Multidropdown, a List Intersection, or some other list, you can use the same approach to make filters that return records matching ALL items within a list field. Note that Typesense also has the boolean operator `||` which can be used to return records that match ANY items within a list field. Their `&&` and `||` operators can be chained and scoped using parenthesis `()` to craft even more sophisticated filters.

</TabItem>
</Tabs>

### High-ish Complexity

<Tabs groupId="search-providers">
<TabItem value="Algolia" label="Algolia">

Let's combine multiple filters.

<BubblePropertyEditor title="Scioussearch high-ish complexity" searchProvider="Algolia">

```js
var categories_filter = (Multidropdown Categories value:count > 0) ? " AND categories:'Multidropdown Categories value:each items Display join with ' AND categories:''": ""

var usage_filter = " AND usage_count:SliderInput Usage Counts value:min TO SliderInput Usage Counts value:max"

// Format our condition so that yes is "true" and no is 'false'
var open_source_filter = " AND published_open_source:Checkbox Is open source is checked:formatted as text"

var filters = categories_filter + usage_filter + open_source_filter

filters
```

</BubblePropertyEditor>

Our three filters are as follow:

1. The `Multidropdown Categories` filter from our last example.
2. A `usage_count` filter using [Algolia's numeric range](https://www.algolia.com/doc/guides/managing-results/refine-results/filtering/how-to/filter-by-numeric-value/#filtering-by-price-range) filter syntax.
3. A `published_open_source` filter using [Algolia's boolean filter](https://www.algolia.com/doc/guides/managing-results/refine-results/filtering/how-to/filter-by-boolean/#applying-a-boolean-filter) syntax. If the relevant checkbox is checked, then we format it's value as a text where `'yes'` is `true` and `'no'` is `false` (since that's what Algolia expects).

With all three filter texts defined, we then concatenate them together into the variable `filters` using Javascript's `+` operator. Finally, we write `filters` so that our visual element knows it's the variable containing our full filter text.

Readers may notice we start each filter with the phrase `" AND "`. As mentioned in our mid-complexity example, this is done so that when our filter strings are appended to each other, there's an AND in between them just the way Algolia expects. Of course, if your use case merits something else - you can also use `OR` or `NOT` as [Algolia allows](https://www.algolia.com/doc/guides/managing-results/refine-results/filtering/in-depth/combining-boolean-operators/).

</TabItem>
<TabItem value="Typesense" label="Typesense">

Let's combine multiple filters.

<BubblePropertyEditor title="Scioussearch high-ish complexity" searchProvider="Typesense">

```js
var categories_filter = (Multidropdown Categories value:count > 0) ? " && categories:='Multidropdown Categories value:each items Display join with ' && categories:=''": ""

var usage_filter = " && usage_count:[SliderInput Usage Counts value:min..SliderInput Usage Counts value:max]"

// Format our condition so that yes is "true" and no is 'false'
var open_source_filter = " && published_open_source:=Checkbox Is open source is checked:formatted as text"

var filters = categories_filter + usage_filter + open_source_filter

filters
```

</BubblePropertyEditor>

Our three filters are as follow:

1. The `Multidropdown Categories` filter from our last example.
2. A `usage_count` filter using [Typesense's numeric range](https://typesense.org/docs/latest/api/search.html#filter-parameters) filter syntax.
3. A `published_open_source` filter using [Typesense's boolean filter](https://typesense.org/docs/latest/api/search.html#filter-parameters) syntax. If the relevant checkbox is checked, then we format it's value as a text where `'yes'` is `true` and `'no'` is `false` (since that's what Typesense expects).

With all three filter texts defined, we then concatenate them together into the variable `filters` using Javascript's `+` operator. Finally, we write `filters` so that our visual element knows it's the variable containing our full filter text.

Readers may notice we start each filter with the phrase `" && "`. As mentioned in our mid-complexity example, this is done so that when our filter strings are appended to each other, there's an && in between them just the way Typesense expects. Of course, if your use case merits something else - you can also use `OR` as Typesense allows.

</TabItem>
</Tabs>

### Filter input vs Toolbox's Expression element

<Tabs groupId="search-providers">
<TabItem value="Algolia" label="Algolia">

Earlier we said the `Filters` input behaves like the `Expression` element from the [Toolbox plugin](https://bubble.io/plugin/toolbox-1488796042609x768734193128308700). In truth, we've made a few changes behind the scenes to make writing filters as easy possible:

1.  If the resulting `Filters` text starts with the phrase `' AND '` or `' OR '`, then we remove that part before sending your filters to Algolia.

    To understand why, imagine a filter composed of two ternary operators:

    ```js
    var my_filter = ternary_filter_a + ternary_filter_b
    ```

    If `ternary_filter_a` is inactive due to, say, an empty Bubble dropdown, then only `ternary_filter_b` contributes to `my_filter`. But `ternary_filter_b` likely starts with the phrase `AND` (or `OR`) which, if sent to Algolia, would cause an error. So, to maintain order in the universe, we remove those leading phrases.

2.  We interpret **non-quoted** appearances of the phrase `yes` and `no` as Javascript's boolean `true` and `false`, respectively. We interpret **quoted** appearances of the phrase `:yes` and `:no` as the phrase `:true` and `:false`, respectively. Together, this allows you to use Bubble's Dynamic `yes` / `no` expressions in filters without having to `Formatted as text` the value to `true` or `false`, which is what Algolia expects.

3.  We interpret **non-quoted** dates as UNIX timestamps (ms) as follows:

    - `MMM D, YYYY h:mm a` The date **Dec 23, 2023 10:31 pm** converts to **1703392260000**. This is the default date format produced by Bubble dynamic expressions that resolve a date.
    - `MMMM D, YYYY h:mm a` The date **December 23, 2023 10:31 pm** converts to **1703392260000**.

    This allows you to use Bubble's Dynamic date expressions in filters without having to remember to `Extract UNIX timestamps (ms)`, which is the format Algolia expects.

</TabItem>
<TabItem value="Typesense" label="Typesense">

Earlier we said the `Filters` input behaves like the `Expression` element from the [Toolbox plugin](https://bubble.io/plugin/toolbox-1488796042609x768734193128308700). In truth, we've made a few changes behind the scenes to make writing filters as easy possible:

1. If the resulting `Filters` text starts with the phrase `' && '` or `' || '`, then we remove that part before sending your filters to Typesense.

   To understand why, imagine a filter composed of two ternary operators:

   ```js
   var my_filter = ternary_filter_a + ternary_filter_b
   ```

   If `ternary_filter_a` is inactive due to, say, an empty Bubble dropdown, then only `ternary_filter_b` contributes to `my_filter`. But `ternary_filter_b` likely starts with the phrase `AND` (or `OR`) which, if sent to Typesense, would cause an error. So, to maintain order in the universe, we remove those leading phrases.

2. We interpret **non-quoted** appearances of the phrase `yes` and `no` as Javascript's boolean `true` and `false`, respectively. We interpret **quoted** appearances of the phrase `:yes` and `:no` as the phrase `:true` and `:false`, respectively. Together, this allows you to use Bubble's Dynamic `yes` / `no` expressions without having to `Formatted as text` the value to `true` or `false`, which is what Typesense expects.

3.  We interpret **non-quoted** dates as UNIX timestamps (ms) as follows:

    - `MMM D, YYYY h:mm a` The date **Dec 23, 2023 10:31 pm** converts to **1703392260000**. This is the default date format produced by Bubble dynamic expressions that resolve a date.
    - `MMMM D, YYYY h:mm a` The date **December 23, 2023 10:31 pm** converts to **1703392260000**.

    This allows you to use Bubble's Dynamic date expressions in filters without having to remember to `Extract UNIX timestamps (ms)`, which is the format Typesense expects.


</TabItem>
</Tabs>

<!-- <Tabs groupId="search-providers">
<TabItem value="Algolia" label="Algolia">

</TabItem>
<TabItem value="Typesense" label="Typesense">
</TabItem>
</Tabs> -->

:::tip

Want to see your `Filters` without having to print them to a text box? Open your browser developer tools (on Windows, press `CTRL`+`SHFT`+`i`, on Mac press `Option` + `⌘` + `i`) and you'll see your search filter printed to console. Filter logs are only printed to console in dev environments. If you also want them to appear in live, you can include a console.log() statement in your filter's javascript. Of course, this would double such logs in your dev environmnets.

:::

## Advanced options

<Tabs groupId="search-providers">
<TabItem value="Algolia" label="Algolia">

This section applies to the following visual elements:

- [Scious Search](#scious-search)
- [Get Facets](#get-facets)

While Algolia's search defaults are great for many use cases, some applications can benefit from search result tuning. The `Advanced options` input is the place where we can make such adjustments. This input accepts a JSON dictionary of two kinds of parameters:

1.  Algolia specific parameters.
2.  Scious Search specific parameters.

#### Algolia parameters

For the full list, check out their [search parameter documentation](https://www.algolia.com/doc/api-reference/search-api-parameters/). Of those, you can set any parameter except the following ones (which we use and cannot be overridden):

- `hitsPerPage`
- `attributesToRetrieve`
- `filters`
- `restrictSearchableAttributes`
- `attributesToHighlight`
- `highlightPreTag`
- `highlightPostTag`
- `page`

#### Scious Search parameters

Internally, we have two unique parameters for controlling the output of search results:

1. `clearSciousSearch`

   Can be `true` or `false`. Default is `false`. If `true`, then `Search Results` is set to an empty list regardless of any other input. This effectively "turns off" the Scious Search visual element and it should be used instead of toggling the element's visibility.

2. `freezeSciousSearch`

   Can be `true` or `false`. Default is `false`. If `true`, then `Search Results` will hold the current state - whatever that was - regardless of any other input. This effectively "freezes" your search results.

</TabItem>
<TabItem value="Typesense" label="Typesense">

This section applies to the following visual elements:

- [Scious Search](#scious-search)
- [Get Facets](#get-facets)

While Typesense's search defaults are great for many use cases, some applications can benefit from search result tuning. The `Advanced options` input is the place where we can make such adjustments. This input accepts a JSON dictionary of two kinds of parameters:

1.  Typesense specific parameters.
2.  Scious Search specific parameters.

#### Typesense parameters

For the full list, check out their [search parameter documentation](https://typesense.org/docs/latest/api/search.html). Of those, you can set any parameter except the following ones (which we use and cannot be overridden):

- `collection`
- `q`
- `per_page`
- `include_fields`
- `filter_by`
- `sort_by`
- `query_by`
- `highlight_fields`
- `highlight_start_tag`
- `highlight_end_tag`
- `page`

#### Scious Search parameters

Internally, we have two unique parameters for controlling the output of search results:

1. `clear_scious_search`

   Can be `true` or `false`. Default is `false`. If `true`, then `Search Results` is set to an empty list regardless of any other input. This effectively "turns off" the Scious Search visual element and it should be used instead of toggling the element's visibility.

2. `freeze_scious_search`

   Can be `true` or `false`. Default is `false`. If `true`, then `Search Results` will hold the current state - whatever that was - regardless of any other input. This effectively "freezes" your search results.

</TabItem>
</Tabs>

## Typing Trigger

<Figure src="img/scious-search/typing trigger.png" />

**Inputs**

1. `Search element ID` The unique ID of the relevant Bubble input element.
2. `Typing timeout` The milliseconds between keystrokes before fetching new search results. Tune this value to reduce the number of unnecessary real time search requests initiated by queries that were typed quickly.
3. `Character minimum` The minimum number of characters needed in a query to return search results.

**Outputs**

1. `Output text` The current text value of the input with ID `Search element ID`.
2. `Is typing` Boolean indicator that toggles On and then Off every time a key is added to the search input referenced by `Search element ID`.

## Get Data Types

This visual element does not have any inputs.

**Outputs**

1. `Data types` Your Bubble app's data types as a list.
2. `Data type fields` Your Bubble app's data type's fields as a list.
3. `Browser ID` A developer specific output. The current user's browser ID. Used for locking sync admin capabilities to a particular device. Will be removed in future releases.

## Get Facets

<Figure src="img/scious-search/Get Facets.png" />

**Inputs**

1. `Search provider`
2. `Result type` Search result data type.
3. `Facet type` Set to the "Facet (🔍)" type.
4. `Search query` Keywords to search. Set to the Typing Trigger Value for best results.
5. `Fields to search` The Bubble fields to search supplied as a JSON list.
6. `Fields to facet` The Bubble fields to facet supplied as a JSON list. Specifies the order of returned "Facets".
7. `Filters` This section allows you to compose your filters using Javascript. It works exactly like the Scious Search visual element's `Filters` input. Details [here](#filters-deep-dive).
8. `Max values per facet` The maximum number of facet values returned per facet.
9. `Facet query` Keywords to search in `Fields to facet`. Set to the Typing Trigger's `Output text` for best results.
10. `Advanced options` Additional options for tuning search results. It works exactly like the Scious Search visual element's `Advanced options` input. Details [here](#advanced-options).

**Outputs**

1. `Returned error` A Yes/No indicating whether there was an error.
2. `Error description` Additional text describing the error.
3. `Facets` The facet items and statistics for each field specified in `Fields to facet`.

## Api calls

We have a single data API call named `Facets (🔍)`. This API call does not return any usable data. It exists solely to set the type of data that the [Get Facets](#get-facets) visual element returns. Do not use this API call outside of the Get Facets visual element. Don't like that we did this? Neither do we. Show your support for fixing this problem by commenting on and upvoting [this feature request](https://bubble.io/ideaboard?idea=1603764356815x558406947894198300).

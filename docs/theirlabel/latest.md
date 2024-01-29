---
sidebar_position: 1
sidebar_label: Latest
pagination_next: null
pagination_prev: null
---

import Figure from '../components/figures'

# TheirLabel [Latest]

[Bubble](https://bubble.io?ref=i61dryk2) is a technology we at Scious have come to love. The ethos behind its creation - that you shouldn't have to have a PhD in computer science to build a custom website - is exciting, democratic, and empowering. There's a lot of great design in this product. To list a few, we're really impressed by the automatically provisioned API one gets the second after you create a new app. Its built in authentication and rule based permissioning is a breeze to work with. Want to change the name of a key in your database? Okay, that key name has been automatically updated across the 56 places you've used it in your application logic! Want to secure your site? Press a button and it's done. All of these things, and many others, crush the core hurdles that stop even seasoned programmers from making sophisticated websites.

For all the niceties, though, every tool has its flaws. One thing Bubble (currently) lacks is a programmatic way to partition multi-tenant apps across different domain names. For many Bubble users this may not be an issue, but for those with dreams of building SaaS applications, it's a bit of a thorn. Being one such dreamer, we decided try to fill this gap. As a result, we bring you **TheirLabel**.

# Demo

<nav className="pagination-nav">
  <div className="pagination-nav__item">
    <a className="pagination-nav__link" href="http://their-label.bubbleapps.io/version-test/">
      <div className="pagination-nav__sublabel">TheirLabel Plugin Demo</div>
      <div className="pagination-nav__label">White-Labelling for Bubble →</div>
    </a>
  </div>

  <div className="pagination-nav__item">
    <a className="pagination-nav__link" href="https://bubble.io/page?name=index&id=their-label&tab=tabs-1">
      <div className="pagination-nav__sublabel">Bubble App Editor</div>
      <div className="pagination-nav__label">Demo Editor →</div>
    </a>
  </div>
</nav>

.
:::tip

Check out our demo's editor above for an excellent reference while integrating our plugin.

:::

## Getting started

This page serves as the official manual for using TheirLabel. You can visit [their-label.bubbleapps.io](https://their-label.bubbleapps.io/version-test) to try it before you buy it. For guidance you can always refer to [TheirLabel's editor](https://bubble.io/page?type=page&name=index&id=their-label&tab=tabs-1) which self documents exactly how to provide your end users with a white-labelling flow (assuming you're already setup as shown below). If all else fails, please try for help on the forum.

We just need a few things to start white-labelling your Bubble app:

### Get your Netlify API key

1. Head on over to [netlify.com](https://www.netlify.com/) and create a new account. They will send you an email which you will need to open to finish verifying your account.
2. Once you're logged in, look for your profile button and click on it to get to your `User Settings`... available on the top right corner of your screen.

<Figure src="https://blog.scious.io/content/images/2020/08/image-1.png" />

3. Click on the `Applications` tab

<Figure src="https://blog.scious.io/content/images/2020/08/image-3.png" />

4. Next press `New access token`. Follow the prompts to create the access token and then save it for later when we'll need to add it to the TheirLabel plugin.

<Figure src="https://blog.scious.io/content/images/2020/08/image-4.png" />

### Setup the TheirLabel plugin

1. Over in your Bubble app, head to the plugins tab and press `Add plugins`.
2. Search for `TheirLabel` and install it.
3. Navigate to the plugin's setting tab and paste the access token we generated from step 4 above into the `Netlify Access Token` field.
   4.To setup the `Authorization (shared headers)` field we need to enter the phrase `Bearer` followed by the same access token, as shown below (your token should look different):

<Figure src="https://blog.scious.io/content/images/2020/08/image-10.png" />

At this point you are now ready use TheirLabel's bubble elements and actions to programmatically white label your site.

## Create your end user's white-labelling experience

TheirLabel's [Test Drive](https://their-label.bubbleapps.io/version-test/) shows one way you can implement an end user white-labelling experience:

<iframe width="100%" height="380" src="https://www.youtube.com/embed/oDErIcb6ZlA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Ultimately the look and feel is up to you but an implementation should achieve the following:

1. Provision a white-label on your Netlify account.
2. Link your customer's unique Bubble URL to their provisioned white-label.
3. Provide your customer with appropriate A or CNAME records for them to add in their DNS provider.
4. HTTPS secure the white-label
5. Update a white-label
6. Delete a white-label

Let's take a look at how each of these are implemented in TheirLabel's Test Drive (learn it quicker by following along in the [editor](https://bubble.io/page?name=index&id=their-label&tab=tabs-1)).

### Provision a white-label on your Netlify account.

The very first thing we do is provision a white-label.

<Figure src="https://blog.scious.io/content/images/2020/08/image-8.png" />

To do this you'll need three things:

1. The Bubble URL that needs to be white-labelled.
2. The apex domain or subdomain name your customer wants to white label.
3. TheirLabel's `Validate` element placed and visible on your page.

In practice you will already know the Bubble URL since that is something you control. For example, TheirLabel's demo has a `feature request` page (see editor). Ordinarily, a unique URL for this page for one of your customers could look something like:

> [https://their-label.bubbleapps.io/feature_request_page/1596231081229x896733754840270100](https://their-label.bubbleapps.io/version-test/feature_request_page/1596231081229x896733754840270100)

But your customer would rather have that page hosted on a subdomain that they own, called:

> [smallbusinesscustomer.theirlabel.com](https://smallbusinesscustomer.theirlabel.com)

So to provision white labels you connect the input for your customer's white label (below called `Domain name you own`) to TheirLabel's `Validate` visual element.

<Figure src="https://blog.scious.io/content/images/2020/08/image-12.png" />

This element generates five outputs (ignore the last 4 for now):

1. `Normalized URL` a normalized version of your customer's desired URL
2. `Record Type` a list of record types that your customer will need to add in their DNS provider.
3. `Record Host` a list of record hosts that your customer will need to add in their DNS provider.
4. `Record Value` a list of record values that your customer will need to add in their DNS provider.
5. `Error` A human readable message describing any error. Empty if no error.

So, in a workflow, we use the `Provision white label` action by setting its `name` and `custom_domain` fields to `Normalized URL`:

<Figure caption="In practice `name` can be anything you want" src="https://blog.scious.io/content/images/2020/08/image-11.png" />

Finally, when this action fires, your white label will be provisioned. Additionally, the action will return a number of values including the **very important** `site_id`**. You need the** `site_id` **for all future white label actions so store this in your Bubble database.**

:::caution

The url that your customer can enter must have the form of an apex domain (example.com) or a subdomain (blog.example.com). URLs with multiple subdomains (kinder.blog.example.com) will throw an error that you can catch.

:::

### Link customer's unique Bubble URL to their provisioned white-label

In the same workflow we used to provision the white label, we next use the `Update white label` action to link your app's URL to the customer's desired white label.

This action takes six fields:

<Figure src="https://s3.amazonaws.com/appforest_uf/f1658683338060x954497849751599900/update-whitelabel-thumbnail-compressed.png" />

1. `site_id` This is the output from having provisioned the white label in a prior step
2. `site_url` This is the actual URL where your customer wants your app to be white-labelled at.
3. `favicon_url` (optional) This is the URL to the favicon that will be populated in a white labelled browse tab.
4. `page_title` This is the text that will be populated in a white labelled browse tab.
5. `page_description` This is the SEO description of this site.
6. `page_image_url` This is the URL for the SEO Image of this site.

### Provide your customer with appropriate A or CNAME records for them to add in their DNS provider.

Remember how we ignored most of the outputs of the TheirLabel `Validate` element earlier in the tutorial? We'll use those now to inform your customers about the DNS records they need to add. The three fields we need are:

1. `Record Type` a list of record types that your customer will need to add in their DNS provider.
2. `Record Host` a list of record hosts that your customer will need to add in their DNS provider.
3. `Record Value` a list of record values that your customer will need to add in their DNS provider.

There are a number of ways you can show these but we decided to simply setup three different repeating groups side by side to show each value.

<Figure caption="How to setup the editor" src="https://blog.scious.io/content/images/2020/08/image-15.png" />

<Figure caption="The result" src="https://blog.scious.io/content/images/2020/08/image-14.png" />

It's good practice to inform your customer that the white-labelled site won't be available immediatly since it often takes a few minutes but sometimes as long as 24 hours for new DNS records to take effect. Having some sort of resultion flow for them if the site isn't up after 24 hours (perhaps that walks them through how to debug things on their end or perhaps to get in touch with your support team) could be useful.

### HTTPS secure the white-label

To finish setting up your customer's white label we can secure it using the `Provision TLS certificate` action.

<Figure src="https://blog.scious.io/content/images/2020/08/image-16.png" />

As with the others, this action requires the `site_id`. Under normal circumstances calling this action once should eventually (within 30 minutes) result in the white-labelled site getting secured via Let's Encrypt. However, if the site hasn't been secured, and you're certain that DNS records have had ample time to take effect, then their is no harm in calling this action again.

It's good practice to inform your customer that the white-labelled site won't be HTTPS secured immediatly but that they should return a little later to check it is working. For example, here is TheirLabel's approach:

<Figure src="https://blog.scious.io/content/images/2020/08/image-17.png" />

### Update a white-label

You may want to update a white-label if your customer wants to switch the URL it points to or to change the page's title and favicon. To do this, run the `Update white label` action (the same action we use to provision white labels).

<Figure src="https://s3.amazonaws.com/appforest_uf/f1658683338060x954497849751599900/update-whitelabel-thumbnail-compressed.png" />

Just like when we used this action to provision a white label, when we update a white label we'll need to save its `site_id` to the Bubble database for later use, otherwise you will not be able to use Bubble to update or delete this white label in the future (of course you can always go into your Netlify account and manually find the `site_id` from there).

### Delete a white-label

Simply run the `Delete white label` action along with the `site_id` to remove a white label from your application.

<Figure src="https://blog.scious.io/content/images/2020/08/image-18.png" />

## Known limitations

Because we use an iFrame to achieve white-labelling, any page changes in the white-labelled app will not be reflected in the browser's URL bar. For example, if your customer navigates from **saas.com** to **saas.com/contact**, then your application will navigate to the contact page but their URL bar will still read **saas.com**.
Safari users will see a message like this when browsing a TheirLabelled site that makes use of cookies (such as when logging in). Without enabling cookies, Safari users will not be able to use your application. We're exploring ways to solve this issue (if you've solved this with [Webkit's Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/), we'd love to explore a solution with you - [get in touch here](mailto:aagostini+theirlabel@scious.io)):

<Figure src="https://s3.amazonaws.com/appforest_uf/f1596228557855x579771458057098500/image%202.png" />

All this said, we feel that TheirLabel is a reasonable 90% solution to Bubble's current inability to make multi-tenant SaaS apps that can be served across multiple domain names. It has been requested for years so ideally this will be a native Bubble feature someday. Until then, we hope you enjoy TheirLabel.

## Support

We provide support in two ways:

- [The forum](https://forum.bubble.io/t/introducing-theirlabel-domain-name-white-labeling-for-bubble/104972/last). This option is free for everyone to use where questions are answered by us as well as the community.
- One on one consulations. This paid option is for anyone who wants direct, real time feedback on integration best practices straight from the people who made TheirLabel.

---
sidebar_position: 1
sidebar_label: Latest
---

import Figure from '../components/figures'

# TheirLabel [Latest]

[Bubble](https://bubble.io?ref=i61dryk2) is a technology we at Scious have come to love. The ethos behind its creation - that you shouldn't have to have a PhD in computer science to build a custom website - is exciting, democratic, and empowering. There's a lot of great design in this product. To list a few, we're really impressed by the automatically provisioned API one gets the second after you create a new app. Its built in authentication and rule based permissioning is a breeze to work with. Want to change the name of a key in your database? Okay, that key name has been automatically updated across the 56 places you've used it in your application logic! Want to secure your site? Press a button and it's done. All of these things, and many others, crush the core hurdles that stop even seasoned programmers from making sophisticated websites.

For all the niceties, though, every tool has its flaws. One thing Bubble (currently) lacks is a programmatic way to partition multi-tenant apps across different domain names. For many Bubble users this may not be an issue, but for those with dreams of building SaaS applications, it's a bit of a thorn. Being one such dreamer, we decided try to fill this gap. As a result, we bring you **TheirLabel**.

## Getting started

This page serves as the official manual for using TheirLabel. You can visit [their-label.bubbleapps.io](https://their-label.bubbleapps.io) to try it before you buy it. For guidance you can always refer to [TheirLabel's editor](https://bubble.io/page?type=page&name=index&id=their-label&tab=tabs-1) which self documents exactly how to provide your end users with a white-labelling flow (assuming you're already setup as shown below). If all else fails, please try for help on the forum.

We just need a few things to start white-labelling your Bubble app:

### Get your Netlify API key

1. Head on over to [netlify.com](https://www.netlify.com/) and create a new account. They will send you an email which you will need to open to finish verifying your account.
2. Once you're logged in, look for your profile button and click on it to get to your `User Settings`... available on the top right corner of your screen.

<div style={{textAlign: 'center'}}>
  <img src="https://blog.scious.io/content/images/2020/08/image-1.png" />
</div>

3. Click on the `Applications` tab

<div style={{textAlign: 'center'}}>
  <img src="https://blog.scious.io/content/images/2020/08/image-3.png" />
</div>

4. Next press `New access token`. Follow the prompts to create the access token and then save it for later when we'll need to add it to the TheirLabel plugin.

<div style={{textAlign: 'center'}}>
  <img src="https://blog.scious.io/content/images/2020/08/image-4.png" />
</div>

### Setup the TheirLabel plugin

1. Over in your Bubble app, head to the plugins tab and press `Add plugins`.
2. Search for `TheirLabel` and install it.
3. Navigate to the plugin's setting tab and paste the access token we generated from step 4 above into the `Netlify Access Token` field.
   4.To setup the `Authorization (shared headers)` field we need to enter the phrase `Bearer` followed by the same access token, as shown below (your token should look different):

<div style={{textAlign: 'center'}}>
  <img src="https://blog.scious.io/content/images/2020/08/image-10.png" />
</div>

At this point you are now ready use TheirLabel's bubble elements and actions to programmatically white label your site.

## Create your end user's white-labelling experience

TheirLabel's [Test Drive](https://their-label.bubbleapps.io/) shows one way you can implement an end user white-labelling experience:

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

<div style={{textAlign: 'center'}}>
  <img src="https://blog.scious.io/content/images/2020/08/image-8.png" />
</div>

To do this you'll need three things:

1. The Bubble URL that needs to be white-labelled.
2. The apex domain or subdomain name your customer wants to white label.
3. TheirLabel's `Validate` element placed and visible on your page.

In practice you will already know the Bubble URL since that is something you control. For example, TheirLabel's demo has a `feature request` page (see editor). Ordinarily, a unique URL for this page for one of your customers could look something like:

> [https://their-label.bubbleapps.io/feature_request_page/1596231081229x896733754840270100](https://their-label.bubbleapps.io/feature_request_page/1596231081229x896733754840270100)

But your customer would rather have that page hosted on a subdomain that they own, called:

> [smallbusinesscustomer.theirlabel.com](https://smallbusinesscustomer.theirlabel.com)

So to provision white labels you connect the input for your customer's white label (below called `Domain name you own`) to TheirLabel's `Validate` visual element.

<div style={{textAlign: 'center'}}>
  <img src="https://blog.scious.io/content/images/2020/08/image-12.png" />
</div>

This element generates five outputs (ignore the last 4 for now):

1. `Normalized URL` a normalized version of your customer's desired URL
2. `Record Type` a list of record types that your customer will need to add in their DNS provider.
3. `Record Host` a list of record hosts that your customer will need to add in their DNS provider.
4. `Record Value` a list of record values that your customer will need to add in their DNS provider.
5. `Error` A human readable message describing any error. Empty if no error.

So, in a workflow, we use the `Provision white label` action by setting its `name` and `custom_domain` fields to `Normalized URL`:

<Figure caption="In practice `name` can be anything you want" src="https://blog.scious.io/content/images/2020/08/image-11.png" />

## Support

Offical support is

## Known limitations

## Additional resources

- [Scious Search Demo](https://scious-plugins.bubbleapps.io/scious-search).
- [Scious Search Demo Editor](https://bubble.io/page?type=page&name=scious-search&id=scious-plugins&tab=tabs-1).
- Refer to our demo's editor for a self documented guide on how to setup and use Scious Search.
- Need help integrating Scious Search? Drop a message in our official Bubble thread and we'll help you get going!
- Prefer for someone to integrate Scious Search for you? Set

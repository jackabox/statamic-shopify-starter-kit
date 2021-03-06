<div align="center">
    <h1>Statamic Shopify Starter Kit</h1>

[demo](https://shopify.demo.jackwhiting.co.uk)
[docs](https://statamic-shopify.jackwhiting.co.uk)
[purchase]()
</div>

The starter kit is a recommended way to install Statamic Shopify.

The boilerplate not only installs the plugin and gives you the necessary options but it also comes with a full demo that is customised to work with Shopify on the front-end. It's built with:

- Tailwind CSS
- ES6 JavaScript

Everything is completely customisable and should give you an awesome start to your project.

If you are looking to install the add-on to an existing project check out the [getting started](frontend/getting-started) section.


## Install Starter Kit

```bash
git clone git@github.com:jackabox/statamic-shopify-starter-kit.git shopify
cd shopify
rm -rf .git
composer update
cp .env.example .env
php artisan key:generate
```

In short, this will:

- clone the repository
- delete the old `.git` info
- install composer
- copy the .env
- generate a key for the application.

## Create a User

Make a super user to access the control panel.

```bash
php please make:user
```

## Publish the assets

```
yarn && yarn dev
```

## Enjoy

That's it for getting the starter kit setup. For your next steps, you'll need to set up your [Shopify app](setup#creating-a-shopify-app).

Enjoy :)

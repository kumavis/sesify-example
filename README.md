# browserify-example

This is a bare-bones, no-bullshit example of using browserify and npm together.

Click [here](https://mattdesl.github.io/browserify-example) to see the live demo.

[<img src="http://i.imgur.com/f6ZxAN0.png" width="75%" />](https://mattdesl.github.io/browserify-example)

It brings in [ToneJS](https://www.npmjs.com/package/tone) from npm, but this workflow supports various modules on npm such as:

- [pixi.js](https://www.npmjs.com/package/pixi.js)
- [lodash](https://www.npmjs.com/package/lodash)
- [xhr](https://www.npmjs.com/package/xhr)
- [object-assign](https://www.npmjs.com/package/object-assign)
- [three](https://www.npmjs.com/package/three) (ThreeJS)
- [dom-css](https://www.npmjs.com/package/dom-css)

It uses [budo](https://github.com/mattdesl/budo) for development and bundles to a static JavaScript file with [browserify](https://github.com/substack/node-browserify) and [uglify-js](http://npmjs.com/package/uglify-js). It uses plain ES5 JavaScript (no transpilers) and CSS for styles.

## Quick Start

You can clone this template for a quick start, or follow the [Custom Setup](#custom-setup) to get this working from scratch.

First, make sure `git`, `npm` (v2 or higher), and `node` (v0.12 or higher) is installed.

Now clone this repo and `cd` into it, then install the project's dependencies:

```sh
git clone https://github.com/mattdesl/browserify-example.git
cd browserify-example

# now install dependencies
npm install
```

> :bulb: Also make sure you've fixed your [npm permissions](https://docs.npmjs.com/getting-started/fixing-npm-permissions) so you don't need to prefix everything with `sudo`

Now you can run the development server:

```sh
npm run start
```

It will start a development server on [http://localhost:9966/](http://localhost:9966/). Now, when you save the [./index.js](./index.js) file, the browser page will reload. When you change [./style.css](./style.css), the changes will be injected into the page.

You can publish a `bundle.js` file with the following command:

```sh
npm run build
```

Then, your static site is ready for a host like `gh-pages`, [surge.sh](https://surge.sh/) or DropBox.

## Custom Setup

The above will get you started immediately, but you might be left wondering how this project was set up. Here's how you can do it from scratch.

### boilerplate

Create a new folder and move into it:

```sh
mkdir my-app
cd my-app
```

Stub a new `package.json` file, you can just use default answers if you like:

```sh
npm init
```

Now create an `index.js` file, something like this:

```js
var url = require('url');
console.log(url.parse(window.location.href));
```

### dependencies

Once you've got a `package.json`, run the following:

```sh
# install our ToneJS dependency
npm install tone --save

# install some build/dev tools
npm install budo browserify uglify-js --save-dev
```

It might take a couple minutes to install. Once finished, it should update your `package.json` with the new dependencies.

### scripts

Next, add a `"scripts"` field to your `package.json` file: 

```json
  "scripts": {
    "start": "budo index.js:bundle.js --live",
    "build": "browserify index.js | uglifyjs -cm > bundle.js"
  }
```

Now you can start the dev server:

```sh
npm run start
```

Open [http://localhost:9966/](http://localhost:9966/) and you should see our `console.log` in the DevTools.

> :bulb: You can also run [budo from the command-line](https://github.com/mattdesl/budo/blob/master/docs/command-line-usage.md) for quick development.

### release

To release, you need an [index.html](./index.html) and optional [style.css](./style.css). You can run the following to build a static JavaScript bundle, ready for `gh-pages` or your host of choice!

```sh
npm run build
```

If you plan to put your project on GitHub, you might want to include a `.gitignore` to avoid including any npm dependencies.

```
bower_components
node_modules
*.log
.DS_Store
```

### further reading

For more details on this workflow and its tools, including how to publish to `gh-pages`:

- [Rapid Prototyping](http://mattdesl.svbtle.com/rapid-prototyping) with budo + browserify
- [budo command-line usage](https://github.com/mattdesl/budo/blob/master/docs/command-line-usage.md)
- [browserify-handbook](https://github.com/substack/browserify-handbook)

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/browserify-example/blob/master/LICENSE.md) for details.
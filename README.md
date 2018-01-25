# ES7 Boilerplate App

Just a boilerplate project to speed up the development process of modern js applications

## Features

It integrates:

- webpack 3 (with dev server and hot reloading)
- babel
- eslint (with minimal configuration)
- tern configuration file to deal with vim autocompletion

Just as css integration example, the [bulma framework](https://bulma.io/) css is included.

## Webpack

A basic configuration is provided, splitted in 3 files: common, development and production.

- [HtmlWebpackPlugin](https://github.com/jantimon/html-webpack-plugin) is used to inject the compiled bundle in the `index.html`
- [CleanWebpackPlugin](https://github.com/johnagan/clean-webpack-plugin) is used to clean the dist folder before every build.
- [ExtractTextPlugin](https://github.com/webpack-contrib/extract-text-webpack-plugin) is used to create separate css files that can be downloaded in parallel to the js boundle in production
- [UglifyJSPlugin](https://github.com/webpack-contrib/uglifyjs-webpack-plugin) is used in production to minify and remove dead code

## Babel

Babel id harmed to benefit of ES6 and ES7 features.

Babel can’t support all of ES6 with compilation alone — it also requires some runtime support. In particular, the new ES6 built-ins like Set, Map and Promise must be polyfilled, and Babel’s generator implementation also uses a number of runtime helpers. So *babel-polyfill* is used to handle this.

Babel also bakes a number of smaller helpers directly into your compiled code. This is OK for single files, but when bundling with Webpack, repeated code will result in a heavier file size. It is possible to replace these helpers with calls to the babel-runtime package. This work is done by the *transform-runtime plugin*.

# ESLint

ESlint is used to linting the code. In pair with vim it's a very powerful tool. A super basic configuration is provided, add rules and plugins to the `.eslintrc` file.

## Commands

Development:

    $ npm run start

starts the webpack development server supporting hot reloading.

Production:

    $ npm run build

builds a production release in the `dist` folder.

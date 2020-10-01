# Vue.js

Experiments on vue.js

## Vue Cli

Vue Cli is a tool to kickstart your vue project with `npm` or `yarn` (the FB version of NPM). 

To run the project, you can follow each `readme`, don't forget to `npm install` before.

> All the `npm` commands can be configured through the `package.json` file.

## Make it nice

You can use Bulma styled components with [Buefy](https://buefy.github.io/) they will integrate nicely with your vue.js app

You can find more about [Bulma](https://bulma.io/documentation/overview/) to build the css.

## Test it

Vue.js can be unit tested and end to end tested with some tools.

### Unit testing

I have been using `jest` with `vue-test-utils` for the unit testing because most of vue.js tests example are written using [jest](https://jestjs.io/en/) annotation.
The [vue test utils](https://vue-test-utils.vuejs.org/) is installed with vue and have a nice documentation attached.

### End to end testing

So far I have seen but not really used two:

- [Cypress](https://www.cypress.io/)
- [Nightwatch](http://nightwatchjs.org/) but as of now this one seems to have critical security flaw (when I `npm audit` the one I have used and can't update / fix)


## Tips

Some line to add in `scripts` in your `package.json`

When Jest is jammed and you want to clear the cache:

```js
// npm run clear_jest
"clear_jest": "jest --clearCache"
```

When linting why not easy fix trailing spaces and other noise errors using:

```js
// npm run lint
"lint": "eslint --fix . --ext .js,.vue src test/unit test/e2e/specs"
```

## Sources

Here are some links:

- [Vue.js](https://vuejs.org/)
- [Vue.js style guide](https://vuejs.org/v2/style-guide/)
- [Gitlab Vue.js style guide](https://docs.gitlab.com/ee/development/fe_guide/vue.html)
- [Vue cheatsheet](https://marozed.com/vue-cheatsheet)




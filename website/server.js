const startingTime = Date.now();

const koa = require('koa');
const path = require('path');
const serve = require('koa-static');
const chalk = require('chalk');

// Create instance.
const app = new koa();

/*
  NOTE: Don't forget to redirect /storybook to /storybook/
*/

console.log();
console.log(
  `${chalk.green('success')} Koa application instantiated`,
  `${Date.now() - startingTime}ms`,
);

// Router.
app.use(async (ctx, next) => {
  const parse = path.parse(ctx.url);
  let pathToServe;

  // Extract path from original url.
  ctx.url = path.join(parse.dir, parse.base);

  if (ctx.request.href.indexOf('storybook') !== -1) {
    // Redirect to /storybook/ instead of /storybook to correctly serve the assets.
    if (
      ctx.url === '/storybook'
      && ctx.request.href[ctx.request.href.length - 1] !== '/'
    ) {
      return ctx.redirect('/storybook/');
    }

    // Remove /storybook to serve assets.
    ctx.url = ctx.url.replace('/storybook', '');

    // Serve index.html as default page (Storybook).
    if (ctx.url === '') {
      ctx.url = '/index.html';
    }

    // Set path where retrieving the assets.
    pathToServe = path.join(`${__dirname}/..`, 'buffet', 'storybook-static/');
  } else {
    // Server index.html as default page (Gatsby).
    if (ctx.url === '/') {
      ctx.url = '/index.html';
    }

    // Set path where retrieving the assets.
    pathToServe = path.join(__dirname, 'public');
  }

  // Serve the assets.
  return await serve(pathToServe, {
    defer: true,
  })(ctx, next);
});

console.log(
  `${chalk.green('success')} Router setup`,
  `${Date.now() - startingTime}ms`,
);

app.listen(4000);

console.log(
  `${chalk.green('success')} Listening port 4000`,
  `${Date.now() - startingTime}ms`,
);

console.log();
console.log(
  `${chalk.green('ready')} Open the website at http://localhost:4000`,
);
console.log();

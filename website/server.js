const startingTime = Date.now();

const koa = require("koa")
const path = require("path")
const serve = require("koa-static")
const chalk = require('chalk')

// Create instance.
const app = new koa()

/*
  NOTE: Don't forget to redirect /storybook to /storybook/
*/

console.log();
console.log(`${chalk.green('success')} Koa application instantiated`, `${Date.now() - startingTime}ms`);

// Router.
app.use(async (ctx, next) => {
  const parse = path.parse(ctx.url)

  ctx.url = path.join(parse.dir, parse.base)

  if (ctx.request.href.indexOf("storybook") !== -1) {
    if (ctx.url === "/storybook") {
      ctx.url = "/index.html"
    } else {
      const parsing = path.parse(ctx.url)
      const dir = parsing.dir.replace("/storybook", "")

      ctx.url = path.join(dir, parsing.base)
    }

    const pathToStoryBook = path.join(
      __dirname + "/..",
      "buffet",
      "storybook-static/"
    )

    return await serve(pathToStoryBook, {
      defer: true,
    })(ctx, next)
  }

  if (ctx.url === "/") {
    ctx.url = "/index.html"
  }

  return await serve(__dirname + "/public/", {
    defer: true,
  })(ctx, next)
});

console.log(`${chalk.green('success')} Router setup`, `${Date.now() - startingTime}ms`);

app.listen(4000);

console.log(`${chalk.green('success')} Listening port 4000`, `${Date.now() - startingTime}ms`);

console.log();
console.log(chalk.green('ready') + ' Open the website at http://localhost:4000');
console.log();


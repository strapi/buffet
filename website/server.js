const koa = require("koa")
const path = require("path")
const serve = require("koa-static")

// Create instance.
const app = new koa()

/*
  NOTE: Don't forget to redirect /storybook to /storybook/
*/

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
})

app.listen(4000)

console.log("Listening on port 4000")

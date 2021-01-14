const express = require("express");

const dev = process.env.NODE_ENV !== "production";
const next = require("next");

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.all("*", (req, res) => {
    return handle(req, res);
  });
  server.listen(process.env.PORT || 3000, (err) => {
    if (err) throw err;
    console.log("Server ready on http://localhost:3000");
  });
});

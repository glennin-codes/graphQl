const express = require("express");
const app = express();
const port = 8080;

app.get("/test", (req, res) => {
  res.send("hello there? My new graphql api");
});
app.listen(port, () => {
  console.log(`server is listening at http://localhost:{port}`);
});

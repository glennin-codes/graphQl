const express = require("express");
const app = express();
const port = 8080;
const Data=require ("./Mock_DATA.json");
const graphq=require('graphql')
const {graphqlHTTP}=require("express-graphql")
app.get("/test", (req, res) => {
  res.send("hello there? My new graphql api");
});
app.listen(port, () => {
  console.log(`server is listening at http://localhost:{port}`);
});

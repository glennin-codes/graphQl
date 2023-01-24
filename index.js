const express = require("express");
const app = express();
const port = 8080;
const {graphqlHTTP}=require("express-graphql");

const schema=require("./schemas/index");



app.get("/test", (req, res) => {
  res.send("hello there? My new graphql api");
});



app.use('/graphql',graphqlHTTP({
  schema,
  graphiql:true
}));



app.listen(port, () => {
  console.log(`server is listening at http://localhost:${port}`);
});

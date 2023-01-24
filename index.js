const express = require("express");
const app = express();
const port = 8080;
const Data=require ("./Mock_DATA.json");
const graphql,{GraphQLSchema,GraphQLInt,GraphQLString,GraphQLObjectType, GraphQLList}=require('graphql')
const {graphqlHTTP}=require("express-graphql");
const { query } = require("express");
app.get("/test", (req, res) => {
  res.send("hello there? My new graphql api");
});

const userType = new GraphQLSchema({
  name:'user',
  fields:()=>{
    id:{type:GraphQLInt},
    firstname:{type:GraphQLString},
   name:{type:GraphQLString},
    firstname:{type:GraphQLString},
    firstname:{type:GraphQLString},
    
  }

})
const RootQuery= new GraphQLObjectType({
  name:'RootQuery',
  fields:{
    getAllUsers:{
      type: new GraphQLList(Data)
    }
  }
})
const schema=new GraphQLObjectType( {
  query:RootQuery,
  mutation:Mutation

})
app.use('/graph',graphqlHTTP({
  schema,
  graphiql:true,
})
);



app.listen(port, () => {
  console.log(`server is listening at http://localhost:${port}`);
});

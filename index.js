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

const userType = new GraphQLObjectType({
  name:'user',
  fields:()=>({
    id:{type:GraphQLInt},
    firstname:{type:GraphQLString},
    lastname:{type:GraphQLString},
    emailtname:{type:GraphQLString},
    password:{type:GraphQLString},
    
  })

})
const RootQuery= new GraphQLObjectType({
  name:'RootQueryType',
  fields:{
    getAllUsers:{
      type: new GraphQLList(userType),
      args:{id:{type:GraphQLInt}},
      resolve:()=>{
        return Data;
      }
    }
  }
})
const schema=new GraphQLObjectType( {
  query:RootQuery,
  mutation:Mutation

})
app.use('/graphql',graphqlHTTP({
  schema,
  graphiql:true,
})
);



app.listen(port, () => {
  console.log(`server is listening at http://localhost:${port}`);
});

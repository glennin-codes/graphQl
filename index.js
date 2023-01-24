const express = require("express");
const app = express();
const port = 8080;
const Data=require ("./Mock_DATA.json");
const graphql=require('graphql')
const {GraphQLSchema,GraphQLInt,GraphQLString,GraphQLObjectType, GraphQLList}=graphql;
const {graphqlHTTP}=require("express-graphql");
const { query } = require("express");
app.get("/test", (req, res) => {
  res.send("hello there? My new graphql api");
});

const userType = new GraphQLObjectType({
  name:'user',
  fields:()=>({
    id:{type:GraphQLInt},
    firstName:{type:GraphQLString},
    lastName:{type:GraphQLString},
    email:{type:GraphQLString},
    password:{type:GraphQLString},
    
  })

})
const RootQuery= new GraphQLObjectType({
  name:'RootQueryType',
  fields:{
    getAllUsers:{
      type: new GraphQLList(userType),
      args:{id:{type:GraphQLInt}},
      resolve(parent,args){
        return Data;
      }
    }
  }
})
const Mutation=new GraphQLObjectType({
  name:"mutation",
  fields:{
    createUSer:{
      type:userType,
      args:{
        firstName:{type:GraphQLString},
        lastName:{type:GraphQLString},
       email:{type:GraphQLString},
       password:{type:GraphQLString},
      },
      resolve(parent,args){
        Data.push({
          id:Data.length+1,
          firstName:args.firstName,
          lastName:args.lastName,
          email:args.email,
          password:args.password,
        });
        return args;
      }
    }
  }
})
const schema=new GraphQLSchema( {
  query:RootQuery,
  mutation:Mutation

});

app.use('/graphql',graphqlHTTP({
  schema,
  graphiql:true
}));



app.listen(port, () => {
  console.log(`server is listening at http://localhost:${port}`);
});

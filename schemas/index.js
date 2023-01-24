const graphql = require("graphql");
const {
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLObjectType,
  GraphQLList,
} = graphql;
const UserType = require("../typeDef/UserType");
const Data=require ("../Mock_DATA.json");
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
        type:UserType,
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
  modules.exports=new GraphQLSchema( {
    query:RootQuery,
    mutation:Mutation
  
  });
  
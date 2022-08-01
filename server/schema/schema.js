const graphql = require("graphql");

const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
} = graphql;

const userType = new GraphQLObjectType({
  name: "user",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    email: { type: GraphQLString },
  }),
});

const postsType = new GraphQLObjectType({
  name: "posts",
  fields: () => ({
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    body: { type: GraphQLString },
    tag: { type: GraphQLString },
    author: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "userQuery",
  fields: {
    userList: {
      type: new GraphQLList(userType),
      resolve(parent, args) {
        let data = [
          { id: 1, name: "John", age: 30, email: "john@gmail.com" },
          { id: 2, name: "Jane", age: 25, email: "jane@gmail.com" },
          { id: 3, name: "Bob", age: 20, email: "Bob@gmail.com" },
        ];
        return data;
      },
    },
    posts: {
      type: new GraphQLList(postsType),
      resolve(parent, args) {
        let postsData = [
          {
            id: 1,
            title: "post1",
            body: "post1 body",
            tag: "tag1",
            author: "author1",
          },
          {
            id: 2,
            title: "post2",
            body: "post2 body",
            tag: "tag2",
            author: "author2",
          },
          {
            id: 3,
            title: "post3",
            body: "post3 body",
            tag: "tag3",
            author: "author3",
          },
        ];
        return postsData;
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: RootQuery });

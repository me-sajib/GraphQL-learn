const graphql = require("graphql");

const { GraphQLObjectType, GraphQLString } = graphql;

const bookType = new GraphQLObjectType({
  name: "book",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Author {
    user_id: Int,
    first_name: String,
    last_name: String,
  }

  type Book {
    id: Int,
    author_id: Int,
    title: String,
    author: Author
  }

  type Query {
    "You can query for books"
    books: [Book!]
  }
`;

const books = [{ id: 1, author_id: 1, title: "Bravo Zero" }];

const authors = [{ user_id: 1, first_name: "Ken", last_name: "Wamaria" }];

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    books: () => books,
  },
  Book: {
    author: (parent, args, ctx, info) => authors.find(author => author.user_id === parent.author_id)
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
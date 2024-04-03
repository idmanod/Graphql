import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `
    type Query {
        hello: String
        ognoo: String
    }
`;

const resolvers = {
    Query: {
        hello: () => 'Сайн уу!!',
        ognoo: () => new Date().toLocaleDateString()
    }   
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
  })

  const { url } = await startStandaloneServer(server)
 
console.log(`🚀 Server ready at ${url}`)
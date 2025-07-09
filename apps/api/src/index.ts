import { createServer } from '@graphql-yoga/node'

const typeDefs = /* GraphQL */ `
  type Query {
    hello: String!
  }
`

const resolvers = {
  Query: {
    hello: () => 'Hello from ReLoy API!',
  },
}

const server = createServer({
  schema: {
    typeDefs,
    resolvers,
  },
})

const port = Number(process.env.PORT) || 4000

server.start({ port }).then(() => {
  console.log(`GraphQL API running on http://localhost:${port}`)
})

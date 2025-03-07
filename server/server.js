import { ApolloServer, gql } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import http from "http";
import express from "express";
import cors from "cors";
import Players from './assets/players.js';

const app = express();
app.use(cors());
app.use(express.json());
const httpServer = http.createServer(app);

const typeDefs = gql`
  enum Position {
    QB
    RB
    WR
    TE
    OL
    DL
    LB
    CB
    S
    K
    P
    DE
    DT
    FS
  }

  type Team {
    id: ID!
    name: String!
  }

  type Stats {
    gamesPlayed: Int
    touchdowns: Int
    yards: Int
  }

  type Player {
    id: ID!
    name: String!
    position: Position!
    team: Team!
    number: Int
    age: Int
    height: String
    weight: Int
    stats: Stats
    photo: String
  }

  type Query {
    getAllPlayers: [Player!]!
    searchPlayersByName(name: String!): [Player!]!
    filterPlayersByTeam(teamId: ID!): [Player!]!
  }
`;

const resolvers = {
  Query: {
    getAllPlayers: () => Players,
    searchPlayersByName: (_, { name }) => 
      Players.filter(player => 
        player.name.toLowerCase().includes(name.toLowerCase())
      ),
    filterPlayersByTeam: (_, { teamId }) => 
      Players.filter(player => 
        player.team.id.toLowerCase() === teamId.toLowerCase()
      )
  }
};

const startApolloServer = async (app, httpServer) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();
  server.applyMiddleware({ app });

  await new Promise(resolve => httpServer.listen({ port: 4000 }, resolve));
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
};

startApolloServer(app, httpServer);
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import  Players  from './assets/players.js'; 

const typeDefs = `
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
      Players.filter(player => player.team.id === teamId)
  }
};
const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});


console.log("Server running on " + url);

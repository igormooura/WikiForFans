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
    
    getPlayerById(id: ID!): Player
    getPlayerByNumber(number: Int!): Player
   
    searchPlayersByName(name: String!): [Player!]!
    filterPlayersByPosition(position: Position!): [Player!]!
    filterPlayersByTeam(teamId: ID!): [Player!]!
  }
`;
const resolvers = {
  Query: {
    getAllPlayers: () => Players,

    getPlayerById: (_, args) => Players.find(player => player.id === args.id),

    getPlayerByNumber: (_, args) => Players.find(player => player.number === args.number),

    searchPlayersByName: (_, args) => 
      Players.filter(player => 
        player.name.toLowerCase().includes(args.name.toLowerCase())
      ),

    filterPlayersByPosition: (_, args) => 
      Players.filter(player => player.position === args.position),

    filterPlayersByTeam: (_, args) => 
      Players.filter(player => player.team.id === args.teamId)
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log("Server running on " + url);

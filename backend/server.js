import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";


const Players = [
  {
    id: "1",
    name: "Patrick Mahomes",
    position: "QB",
    team: {
      id: "KC",
      name: "Kansas City Chiefs"
    },
    number: 15,
    age: 28,
    height: "6'2\"",
    weight: 225,
    stats: {
      gamesPlayed: 17,
      touchdowns: 38,
      yards: 5250
    }
  },
  {
    id: "2",
    name: "Deebo Samuel",
    position: "WR",
    team: {
      id: "SF",
      name: "San Francisco 49ers"
    },
    number: 19,
    age: 27,
    height: "6'0\"",
    weight: 215,
    stats: {
      gamesPlayed: 16,
      touchdowns: 14,
      yards: 1534
    }
  }
];

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

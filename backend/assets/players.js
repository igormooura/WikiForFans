const Players = [
    {
      id: "1",
      name: "Patrick Mahomes",
      position: "QB",
      photo: "https://www.foxnews.com/sports/chiefs-patrick-mahomes-revenge-tour-after-losing-super-bowl-lix-teammate-says",
      team: {
        id: "KC",
        name: "Kansas City Chiefs"
      },
      number: 15,
      age: 29,
      height: "6'3\"",
      weight: 230,
      stats: {
        gamesPlayed: 17,
        touchdowns: 35,
        yards: 4800
      }
    },
    {
      id: "2",
      name: "Deebo Samuel",
      position: "WR",
      photo: "https://nypost.com/2022/07/31/49ers-deebo-samuel-agrees-to-three-year-73-5-million-extension/",
      team: {
        id: "SF",
        name: "San Francisco 49ers"
      },
      number: 19,
      age: 29,
      height: "6'0\"",
      weight: 215,
      stats: {
        gamesPlayed: 16,
        touchdowns: 12,
        yards: 1400
      }
    },
    {
      id: "3",
      name: "Josh Allen",
      position: "QB",
      photo: "https://sportsjone.com/josh-allen-will-play-this-weekend-playing-update/",
      team: {
        id: "BUF",
        name: "Buffalo Bills"
      },
      number: 17,
      age: 29,
      height: "6'5\"",
      weight: 237,
      stats: {
        gamesPlayed: 17,
        touchdowns: 38,
        yards: 4700
      }
    },
    {
      id: "4",
      name: "Joe Burrow",
      position: "QB",
      photo: "https://www.sportscasting.com/news/joe-burrow-started-updating-resume-before-stardom-at-lsu/",
      team: {
        id: "CIN",
        name: "Cincinnati Bengals"
      },
      number: 9,
      age: 28,
      height: "6'4\"",
      weight: 221,
      stats: {
        gamesPlayed: 17,
        touchdowns: 34,
        yards: 4600
      }
    },
    {
      id: "5",
      name: "Lamar Jackson",
      position: "QB",
      photo: "https://www.givemesport.com/88018217-lamar-jackson-ravens-qb-shows-off-incredible-arm-strength-in-viral-video/",
      team: {
        id: "BAL",
        name: "Baltimore Ravens"
      },
      number: 8,
      age: 28,
      height: "6'2\"",
      weight: 212,
      stats: {
        gamesPlayed: 17,
        touchdowns: 30,
        yards: 3800
      }
    },
    {
      id: "6",
      name: "Jahmyr Gibbs",
      position: "RB",
      photo: "https://www.mlive.com/sports/2024/12/jahmyr-gibbs-named-to-pro-bowl-as-rookie.html",
      team: {
        id: "DET",
        name: "Detroit Lions"
      },
      number: 26,
      age: 23,
      height: "6'0\"",
      weight: 200,
      stats: {
        gamesPlayed: 16,
        touchdowns: 10,
        yards: 1200
      }
    },
    {
      id: "7",
      name: "J.K. Dobbins",
      position: "RB",
      photo: "https://www.baltimoresun.com/sports/ravens/bs-sp-ravens-jk-dobbins-pro-bowl-20250102-20250102-7b2p5h3x4zau5g7s3o2j7z5p7i-story.html",
      team: {
        id: "BAL",
        name: "Baltimore Ravens"
      },
      number: 27,
      age: 26,
      height: "5'10\"",
      weight: 219,
      stats: {
        gamesPlayed: 15,
        touchdowns: 8,
        yards: 1100
      }
    },
    {
      id: "5",
      name: "Lamar Jackson",
      position: "QB",
      photo: "https://www.givemesport.com/88018217-lamar-jackson-ravens-qb-shows-off-incredible-arm-strength-in-viral-video/",
      team: {
        id: "BAL",
        name: "Baltimore Ravens"
      },
      number: 8,
      age: 28,
      height: "6'2\"",
      weight: 212,
      stats: {
        gamesPlayed: 17,
        touchdowns: 30,
        yards: 3800
      }
    },
    {
      id: "6",
      name: "Jahmyr Gibbs",
      position: "RB",
      photo: "https://www.mlive.com/sports/2024/12/jahmyr-gibbs-named-to-pro-bowl-as-rookie.html",
      team: {
        id: "DET",
        name: "Detroit Lions"
      },
      number: 26,
      age: 23,
      height: "6'0\"",
      weight: 200,
      stats: {
        gamesPlayed: 16,
        touchdowns: 10,
        yards: 1200
      }
    },

    {
      id: "7",
      name: "J.K. Dobbins",
      position: "RB",
      photo: "https://www.baltimoresun.com/sports/ravens/bs-sp-ravens-jk-dobbins-pro-bowl-20250102-20250102-7b2p5h3x4zau5g7s3o2j7z5p7i-story.html",
      team: {
        id: "BAL",
        name: "Baltimore Ravens"
      },
      number: 27,
      age: 26,
      height: "5'10\"",
      weight: 219,
      stats: {
        gamesPlayed: 15,
        touchdowns: 8,
        yards: 1100
      }
    },
    {
      id: "8",
      name: "Ja'Marr Chase",
      position: "WR",
      photo: "https://www.si.com/nfl/bengals/news/jamarr-chase-makes-history-with-pro-bowl-selection",
      team: {
        id: "CIN",
        name: "Cincinnati Bengals"
      },
      number: 1,
      age: 24,
      height: "6'1\"",
      weight: 201,
      stats: {
        gamesPlayed: 16,
        touchdowns: 9,
        yards: 1300
      }
    },
    {
      id: "9",
      name: "Nico Collins",
      position: "WR",
      photo: "https://www.houstonchronicle.com/texas-sports-nation/texans/article/texans-nico-collins-named-to-pro-bowl-2025-17677657.php",
      team: {
        id: "HOU",
        name: "Houston Texans"
      },
      number: 12,
      age: 25,
      height: "6'4\"",
      weight: 215,
      stats: {
        gamesPlayed: 16,
        touchdowns: 7,
        yards: 1100
      }
    },
    {
      id: "10",
      name: "Jerry Jeudy",
      position: "WR",
      photo: "https://www.denverpost.com/2025/01/02/jerry-jeudy-pro-bowl-2025/",
      team: {
        id: "DEN",
        name: "Denver Broncos"
      },
      number: 10,
      age: 26,
      height: "6'1\"",
      weight: 193,
      stats: {
        gamesPlayed: 16,
        touchdowns: 6,
        yards: 950
      }
    },
    {
      id: "11",
      name: "Tyreek Hill",
      position: "WR",
      photo: "https://www.miamidolphins.com/news/tyreek-hill-named-to-pro-bowl-2025",
      team: {
        id: "MIA",
        name: "Miami Dolphins"
      },
      number: 10,
      age: 30,
      height: "5'10\"",
      weight: 185,
      stats: {
        gamesPlayed: 17,
        touchdowns: 11,
        yards: 1500
      }
    },
    {
        id: "12",
        name: "Darren Waller",
        position: "TE",
        photo: "https://www.nfl.com/_image/2025/01/02/24334125/0ap3000001098765.jpg",
        team: {
          id: "NYG",
          name: "New York Giants"
        },
        number: 12,
        age: 31,
        height: "6'6\"",
        weight: 255,
        stats: {
          gamesPlayed: 15,
          touchdowns: 5,
          yards: 800
        }
      },
      {
        id: "13",
        name: "Justin Jefferson",
        position: "WR",
        photo: "https://www.nfl.com/_image/2025/01/02/24334125/0ap3000001098765.jpg",
        team: {
          id: "MIN",
          name: "Minnesota Vikings"
        },
        number: 18,
        age: 25,
        height: "6'1\"",
        weight: 193,
        stats: {
          gamesPlayed: 16,
          touchdowns: 10,
          yards: 1400
        }
      },
      {
        id: "14",
        name: "Terry McLaurin",
        position: "WR",
        photo: "https://www.nfl.com/_image/2025/01/02/24334125/0ap3000001098765.jpg",
        team: {
          id: "WAS",
          name: "Washington Commanders"
        },
        number: 17,
        age: 29,
        height: "6'0\"",
        weight: 210,
        stats: {
          gamesPlayed: 16,
          touchdowns: 8,
          yards: 1200
        }
      },
      {
        id: "15",
        name: "CeeDee Lamb",
        position: "WR",
        photo: "https://www.nfl.com/_image/2025/01/02/24334125/0ap3000001098765.jpg",
        team: {
          id: "DAL",
          name: "Dallas Cowboys"
        },
        number: 88,
        age: 24,
        height: "6'2\"",
        weight: 198,
        stats: {
          gamesPlayed: 16,
          touchdowns: 9,
          yards: 1300
        }
      },
      {
        id: "16",
        name: "Nick Bosa",
        position: "DE",
        photo: "https://www.nfl.com/_image/2025/01/02/24334125/0ap3000001098765.jpg",
        team: {
          id: "SF",
          name: "San Francisco 49ers"
        },
        number: 97,
        age: 27,
        height: "6'4\"",
        weight: 266,
        stats: {
          gamesPlayed: 16,
          sacks: 15,
          tackles: 50
        }
      },
      {
        id: "17",
        name: "Vita Vea",
        position: "DT",
        photo: "https://www.nfl.com/_image/2025/01/02/24334125/0ap3000001098765.jpg",
        team: {
          id: "TB",
          name: "Tampa Bay Buccaneers"
        },
        number: 50,
        age: 29,
        height: "6'4\"",
        weight: 350,
        stats: {
          gamesPlayed: 16,
          sacks: 7,
          tackles: 60
        }
      },
      {
        id: "18",
        name: "Brian Branch",
        position: "S",
        photo: "https://www.nfl.com/_image/2025/01/02/24334125/0ap3000001098765.jpg",
        team: {
          id: "DET",
          name: "Detroit Lions"
        },
        number: 32,
        age: 24,
        height: "6'0\"",
        weight: 210,
        stats: {
          gamesPlayed: 16,
          interceptions: 4,
          tackles: 80
        }
      },
      {
        id: "19",
        name: "Jaycee Horn",
        position: "CB",
        photo: "https://www.nfl.com/_image/2025/01/02/24334125/0ap3000001098765.jpg",
        team: {
          id: "CAR",
          name: "Carolina Panthers"
        },
        number: 26,
        age: 25,
        height: "6'1\"",
        weight: 205,
        stats: {
          gamesPlayed: 16,
          interceptions: 3,
          tackles: 70
        }
      },
      {
        id: "20",
        name: "Devon Witherspoon",
        position: "CB",
        photo: "https://www.nfl.com/_image/2025/01/02/24334125/0ap3000001098765.jpg",
        team: {
          id: "SEA",
          name: "Seattle Seahawks"
        },
        number: 24,
        age: 24,
        height: "6'0\"",
        weight: 200,
        stats: {
          gamesPlayed: 16,
          interceptions: 2,
          tackles: 60
        }
      },
      {
        id: "21",
        name: "Xavier McKinney",
        position: "FS",
        photo: "https://www.nfl.com/_image/2025/01/02/24334125/0ap3000001098765.jpg",
        team: {
          id: "GB",
          name: "Green Bay Packers"
        },
        number: 23,
        age: 25,
        height: "6'0\"",
        weight: 210,
        stats: {
          gamesPlayed: 16,
          interceptions: 5,
          tackles: 75
        }
      }
  ];
  

export default Players;
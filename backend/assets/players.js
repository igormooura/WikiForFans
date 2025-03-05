const Players = [
    {
      id: "1",
      name: "Patrick Mahomes",
      position: "QB",
      photo: "https://www.mensjournal.com/.image/t_share/MjEyNjI1MTkzNjE5Njk1MjMy/patrick-mahomes.png",
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
      photo: "https://playmakerbrasil.com.br/wp-content/uploads/2025/03/deebo-samuels-four-word-message-immediately-after-49ers-commanders-trade.jpg",
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
      photo: "https://images.squarespace-cdn.com/content/v1/644aee0dacaa0370337e0c7c/3592c59b-7df1-491c-ab7f-ca30e0746181/Josh+Allen+Final+Bio.png",
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
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSeaULXVmogjw6L8PXNEw6WKo0aOcwNOfReg&s",
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
      photo: "https://i.guim.co.uk/img/media/472006b3deec24b597f957f18ed164196920de6b/0_23_2912_1748/master/2912.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=2dbc5d31f8ab0f20ba44fe95d87891ce",
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
      photo: "https://s.yimg.com/ny/api/res/1.2/fXx4kH677vtBk6OLB2HDNg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD04Mjg-/https://media.zenfs.com/en/afrotech_articles_589/2851b666e0a2cae7c270fc3acd6ff9ec",
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
      photo: "https://ng-sportingnews.com/s3/files/styles/crop_style_16_9_desktop/s3/2024-09/USATSI_24190757.jpg?h=0fbd9ae9&itok=__s6HGn5",
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
      photo: "https://images2.minutemediacdn.com/image/upload/c_crop,w_4086,h_2298,x_0,y_0/c_fill,w_912,ar_16:9,f_auto,q_auto,g_auto/images/ImagnImages/mmsport/si/01jk17gnpr28tjvss77g.jpg",
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
      photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4258173.png",
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
      photo: "https://sportshub.cbsistatic.com/i/r/2023/10/18/84fcedc1-61f1-4f9d-9307-5b3a4b30a017/thumbnail/770x433/72b88b681f56675969021bf8888d9890/jeudy.jpg",
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
      photo: "https://www.reuters.com/resizer/v2/QOYJMFDUQ5PH3NA4BPPEVUOLD4.jpg?auth=2535051f1483cbda76f13c36b144f0a24f0d29d5130de1f4f9787aa18781b849&width=640&quality=80",
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
        photo: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/rockcms/2024-06/240610-darren-waller-al-0715-8d1ddf.jpg",
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
        photo: "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1449858901.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp",
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
        photo: "https://preview.redd.it/terry-mclaurin-appreciation-post-v0-xr9getuoov2e1.jpeg?auto=webp&s=4d1e8ee8e6663ba7e290adef20e563084ccdb43c",
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
        photo: "https://imageio.forbes.com/specials-images/imageserve/66e116c5f4e5065c3122d856/0x0.jpg?format=jpg&crop=1871,1053,x0,y44,safe&height=900&width=1600&fit=bounds",
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
        photo: "https://images.daznservices.com/di/library/DAZN_News/e1/3e/nick-bosa_1m8p0yxzbps6r1hrtipp47xpho.jpg?t=1820695117&w=800&quality=100",
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
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Vita_Vea_2021_%28cropped%29.jpg/220px-Vita_Vea_2021_%28cropped%29.jpg",
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
        photo: "https://lionswire.usatoday.com/gcdn/authoring/images/smg/2025/02/22/SLIO/79647233007-52-88621.jpeg?width=660&height=440&fit=crop&format=pjpg&auto=webp",
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
        photo: "https://images2.minutemediacdn.com/image/upload/c_crop,w_1188,h_668,x_207,y_21/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/ImagnImages/mmsport/all_panthers/01jmjq6an20tjxspgy10.jpg",
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
        photo: "https://sportshub.cbsistatic.com/i/r/2024/07/12/ccad8714-f282-48e1-a5e1-b564955d93ef/thumbnail/770x433/2cce8f8592ca589d6dddda025925aa9b/devon-witherspoon.jpg",
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
        photo: "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4241470.png&w=350&h=254",
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
const users = [
    {
      id: 1,
      name: "John",
      location: "New York",
      friends: [2, 3, 4],
      posts: [
        { content: "Great day at Central Park!", timestamp: "2024-09-10T12:00:00", likes: 15 },
        { content: "Loving the vibes in NYC!", timestamp: "2024-09-11T08:30:00", likes: 8 },
        { content: "Visited the Statue of Liberty today!", timestamp: "2024-09-05T17:45:00", likes: 20 }
      ]
    },
    {
      id: 2,
      name: "Alice",
      location: "San Francisco",
      friends: [1, 3],
      posts: [
        { content: "Hiking in the Bay Area!", timestamp: "2024-09-12T14:20:00", likes: 12 },
        { content: "Enjoying the sunny weather!", timestamp: "2024-09-08T11:10:00", likes: 6 },
        { content: "Attended a tech conference!", timestamp: "2024-08-28T10:00:00", likes: 18 }
      ]
    },
    {
      id: 3,
      name: "Emily",
      location: "Los Angeles",
      friends: [1, 2, 4],
      posts: [
        { content: "Beach day in LA!", timestamp: "2024-09-14T09:45:00", likes: 25 },
        { content: "Exploring Hollywood!", timestamp: "2024-09-09T16:55:00", likes: 5 },
        { content: "Amazing sunset in Santa Monica!", timestamp: "2024-09-02T19:00:00", likes: 30 }
      ]
    },
    {
      id: 4,
      name: "David",
      location: "Chicago",
      friends: [2],
      posts: [
        { content: "Deep dish pizza is the best!", timestamp: "2024-09-13T10:30:00", likes: 18 },
        { content: "Trying out a new jazz club tonight!", timestamp: "2024-09-04T20:00:00", likes: 3 },
        { content: "Checking out the Art Institute of Chicago!", timestamp: "2024-08-29T13:15:00", likes: 12 }
      ]
    },
    {
      id: 5,
      name: "Sarah",
      location: "Seattle",
      friends: [3, 1],
      posts: [
        { content: "Coffee time in the Pacific Northwest!", timestamp: "2024-09-15T15:15:00", likes: 9 },
        { content: "Exploring the Olympic National Park!", timestamp: "2024-09-09T07:00:00", likes: 11 },
        { content: "Visited the Space Needle!", timestamp: "2024-08-31T12:00:00", likes: 22 }
      ]
    },
    {
      id: 6,
      name: "Mike",
      location: "Austin",
      friends: [1, 2, 3],
      posts: [
        { content: "Enjoying live music at SXSW!", timestamp: "2024-09-12T20:30:00", likes: 28 },
        { content: "Best BBQ in Texas!", timestamp: "2024-09-06T18:00:00", likes: 7 },
        { content: "Visited the Texas State Capitol!", timestamp: "2024-08-25T09:30:00", likes: 5 }
      ]
    },
    {
      id: 7,
      name: "Sophia",
      location: "Miami",
      friends: [2, 4, 5],
      posts: [
        { content: "Beach volleyball with friends!", timestamp: "2024-09-10T17:00:00", likes: 19 },
        { content: "Cuban food is amazing!", timestamp: "2024-09-07T13:00:00", likes: 11 },
        { content: "Exploring Little Havana!", timestamp: "2024-08-30T16:30:00", likes: 17 }
      ]
    },
    {
      id: 8,
      name: "Liam",
      location: "Denver",
      friends: [1, 3, 7],
      posts: [
        { content: "Hiking in the Rockies!", timestamp: "2024-09-13T08:00:00", likes: 23 },
        { content: "Brewery hopping in Denver!", timestamp: "2024-09-11T19:00:00", likes: 10 },
        { content: "Attended a Broncos game!", timestamp: "2024-08-27T15:00:00", likes: 9 }
      ]
    },
    {
      id: 9,
      name: "Olivia",
      location: "Boston",
      friends: [2, 5],
      posts: [
        { content: "Beautiful day at Boston Common!", timestamp: "2024-09-09T14:45:00", likes: 14 },
        { content: "Attended a Red Sox game!", timestamp: "2024-09-05T19:00:00", likes: 13 },
        { content: "Exploring the Freedom Trail!", timestamp: "2024-08-26T12:00:00", likes: 21 }
      ]
    },
    {
      id: 10,
      name: "James",
      location: "Houston",
      friends: [4, 5],
      posts: [
        { content: "NASA Space Center visit!", timestamp: "2024-09-10T10:15:00", likes: 20 },
        { content: "Attended a Rockets game!", timestamp: "2024-09-07T18:30:00", likes: 9 },
        { content: "Exploring the Houston Museum District!", timestamp: "2024-08-29T11:00:00", likes: 15 }
      ]
    }
  ];

  

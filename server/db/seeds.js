
use movie_users;
db.dropDatabase();

db.users.insertMany([
    {
        username: "Test Name 1",
        password: "Test1",
        email: "test@email.com",
        review: [{
            movie: "Guardians of the Galaxy Vol. 2",
            comment: "test comment GotG2",
            score: 3,
            name: "Test Name 1"
        },
        {
            movie: "Batman",
            comment: "test comment Batman",
            score: 5,
            name: "Test Name 1"
        }
        ]
    },
    {
        username: "Test Name 2",
        password: "Test2",
        email: "test_2@email.com",
        review: [{
            movie: "Anchorman",
            comment: "test comment Anchorman",
            score: 4,
            name: "Test Name 2"
        }
        ]
    }
]);


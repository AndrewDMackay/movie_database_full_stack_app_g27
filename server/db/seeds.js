
use movie_users;
db.dropDatabase();

db.users.insertMany([
    {
        username: "NeilHanlon",
        password: "Test1",
        email: "test@email.com",
        review: [{
            movie: "Calendar Girls",
            comment: "gr8 film, luved all the grannies",
            score: 5
        },
        {
            movie: "One-Eyed Monster",
            comment: "Left a lot to be desired",
            score: 3
        }
        ]
    },
    {
        username: "CodeClanStan",
        password: "Test2",
        email: "test_2@email.com",
        review: [{
            movie: "Batman",
            comment: "Very misleading title, more of a man in a bat costume than an actual Bat Man",
            score: 3
        },
        {
            movie: "2 Fast 2 Furious",
            comment: "Nowhere near as fast as advertised",
            score: 3
        },
        {
            movie: "One-Eyed Monster",
            comment: "WORST MOVIE EVER",
            score: 1

        }
        ]
    }

    
]);


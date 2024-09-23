let express = require('express')
const Pool = require('pg').Pool

const cors = require('cors')
const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200
}

let app = express()
app.use(cors(corsOptions))

let bodyParser = require('body-parser')
app.use(bodyParser.json())

const pool = new Pool({
    user: 'twilson96',
    host: 'localhost',
    database: 'redditclone',
    password: 'password',
    port: 5432
})

app.get('/', function (req,res) {
    pool.query("SELECT * FROM redditposts", function (error,results) {
        if(error) {
            throw error
        }
        res.send(results.rows)
    })
})

app.post('/newpost', function (req,res) {
    let votes = req.body.votes
    let image = req.body.image
    let title = req.body.title
    let author = req.body.author
    let subreddit = req.body.subreddit 

    pool.query("INSERT INTO redditposts (votes,image,title,author,subreddit) VALUES ($1,$2,$3,$4,$5)", [votes,image,title,author,subreddit], function (error,results){
        if(error) {
            throw error
        }
        res.send("new post")
    })
})

app.put("/:id", function (req, res) {
  let id = req.params.id;
  let votes = req.body.votes;

  pool.query(
    "UPDATE redditposts SET votes = $1 WHERE id = $2",[votes,id
    ],
    function (error, results) {
      if (error) {
        throw error;
      }
      res.send({votes, id});
    }
  );
});

app.listen(3000)
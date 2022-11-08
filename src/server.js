import express from "express";
import {MongoClient} from 'mongodb'

let articlesInfo = [{
    name: 'elite-capture',
    upvotes: 0,
    comments: [],
},
{
    name: 'overton-window',
    upvotes: 0,
    comments: [],
},
{
    name: 'normalcy-bias',
    upvotes: 0,
    comments: [],
},
{
    name: 'false-flag',
    upvotes: 0,
    comments: [],
},
{
    name: 'rabbit-holes',
    upvotes: 0,
    comments: [],
}]
const app = express();
app.use(express.json());

app.get('/api/articles/:name', (req,res) => {
   const {name} = req.params; 
})

app.put('/api/articles/:name/upvote', (req, res) => {
const { name } = req.params;
const article = articlesInfo.find(a => a.name === name);
if (article) {
article.upvotes += 1;
res.send(`The ${name} article now has ${article.upvotes} upvotes`);
}else {
    res.send('That article does not exist')
}
});

app.post('/api/articles/:name/comments', (req, res) => {
    const {name} = req.params;
    const { postedBy, text } = req.body;
    const article = articlesInfo.find(a => a.name === name);
    if (article) {
    article.comments.push({ postedBy, text});
    res.send(article.comments);
    } else {
        res.send('That article does not exist')
    }
});





// app.get("/hello", (req, res) => {
//   res.send("Hello!");
// });

// app.get('/hello/:name', (req, res) => {
//     const name = req.params.name;
//     //or const { name } = req.params;
//     res.send(`hello again ${name}.`);
// })


// app.post("/", (req, res) => {
//   console.log(req.body);

//   res.send(`hello, ${req.body.name}`);
// });

app.listen(8000, () => {
  console.log("server is listening on port 8000");
});

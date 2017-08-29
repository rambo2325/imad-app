var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    'article-one':{
    title:'article-one/ rambo',
    heading:'article-one',
    date:'sep 5 2106',
    content:`  <p>
                    this is the content for my first article
                    this is the content for my first article
                </p>`},
    'article-two':{
    title:'article-two/ rambo',
    heading:'article-two',
    date:'sep 5 2106',
    content:`  <p>
                    this is the content for my second article
                    this is the content for my second article
                </p>`},
    'article-three':{ 
    title:'article-three/ rambo',
    heading:'article-three',
    date:'sep 5 2106',
    content:`  <p>
                    this is the content for my third article
                    this is the content for my third article
                </p>`}
    
};

function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    var htmlTemplate=`<html>
        <head>
            <title>
               ${title}
            </title>
       <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h3>
                   ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                  ${content}
                </div>
            </div>
        </body>
    </html>`;
    return htmlTemplate;
    }

var counter=0;
app.get('/counter',function(req,res)
{
  counter=counter+1;
  res.send(counter.toString());
});


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res){
    articleName=req.params.articleName;
     res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/goku-super-saiyan-god.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'goku-super-saiyan-god.jpg'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleone={
     title:'article-one',
     heading:'articleone',
     content:` <div>
                <p>
                    this is the article one this a text code from me to you .
                </p>
                
            </div>
            <div>
                <p>
                    i do whatever it takes cause i love the adrenaline in my veins.
                    i do whatever it takes cause i love how it feels when  i break the chains.
                </p>
            </div>
};

funtion createTemplate(data){
var title=data.title;
var content=data.content;
var htmlTemplate =

    <html>
    <head>
    <title>
    ${title}
    </title>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
    </head>
    <body>
        <header>
            <a href="/">Home</a>
        </header>
    <hr/>

    <div>
        ${content}
    </div>
    </body>
    </html>
 ;
 return htmlTemplate
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function(req,res){
   res.send(cretetemplate(articleone);
});
app.get('/article-two',function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three',function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
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

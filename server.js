var express = require('express');
var morgan = require('morgan');
var path = require('path');

var articleOne={
    title:'Article 1',
    date:'20 Sep 2016',
    heading:'Article 1 goes by editing',
    content:`<p>This is for article one This is for article one  This is for article one</p>
           <p>This is for article one This is for article one This is for article one This is for article one This is for article one
            This is for article one This is for article one This is for article one This is for article one</p>`,
};

var articleTwo={
     title:'Article 2',
    date:'21 Sep 2016',
    heading:'Article 2 goes by editing',
    content:`<p>This is for article two This is for article 2  This is for article 2</p>`,
};

function createTemplate(data){
    
    title=data.title;
    heading=data.heading;
    date=data.date;
    content=data.content;
var HTMLtemplate=`
    <!DOCTYPE html>
    <html>
    
    <head>
    
    <title>
    ${title}
    </title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="ui/style.css" rel="stylesheet" />
    </head>
    <body>
    <div class="container">
    <div>
    <a href="/">Home</a>
    </div>
    <div>
    <h3>${heading}</h3>
    </div>
    <div>
    ${date}
    </div>
    
    <div>
    ${content}
    </div>
    </div>
    </body>
    </html>
    
    `;
    return HTMLtemplate;
}
var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function(req, res){
    res.send(createTemplate(articleOne));
    });

app.get('/article-two', function(req, res){
    res.send(createTemplate(articleTwo));
});

app.get('/article-three', function(req, res){
    res.send('Article three is requested and is served here');
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

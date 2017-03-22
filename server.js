var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
     'articleOne' : {
        title: 'Article One| saikumar',
        heading: 'Article One',
        date: 'sep 5, 2016',
        content: `
            <p>this is my first article in my first web app.this is my first article in my first web app.this is my first article in my first web app.this is my first article in my first web app.this is my first article in my first web app.this is my first article in my first web app.this is my first article in my first web app.this is my first article in my first web app.this is my first article in my first web app.this is my first article in my first web app.this is my first article in my first web app.this is my first article in my first web app.this is my first article in my first web app.this is my first article in my first web app.this is my first article in my first web app.this is my first article in my first web app.this is my first article in my first web app.this is my first article in my first web app.this is my first article in my first web app.this is my first article in my first web app.this is my first article in my first web app.this is my first article in my first web app.
                    
                    </p>
                    
        `
},
     'articleTwo' : {
        title: 'Article Two| saikumar',
        heading: 'Article Two',
        date: 'sep 10, 2016',
        content: `
            <p>
                this is my second article in my first web app..
                    
             </p>
                    `
        
},
     'articleThree': {
        title: 'Article Three| saikumar',
        heading: 'Article Three',
        date: 'sep 15, 2016',
        content: `
            <p>
                this is my third article in my first web app..
                    
             </p>
                    `
        
}
};
function createTemplate(data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate = `
        <html>
        <head>
            <title> ${title} </title>
            <style>
            .container
            {
                        max-width: 800px;
                        color: #7d7a7a;
                        font-family: sans-serif;
                        margin: 0 auto;
                        padding-top: 50px;
                        padding-left: 20px;
                        padding-right: 20px;
            }
            </style>
        </head>
        <body>
            <div class='container'>
                <div>
                    <a href="/">HOME</a>    
                </div>
                <hr />
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
    </html>
    `;
    return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/:articleName', function(req,res){
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
}
);

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

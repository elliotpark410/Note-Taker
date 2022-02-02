// Dependencies required
const express = require("express");
const path = require("path");
const fs = require("fs");



// Sets up the Express App
const app = express();


// Sets up the Express app to handle data parsing for PUTS and POSTS
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setting up express to serve static files (index.html, notes.html, style.css, and index.js) in "public" directory
app.use(express.static('public'));


// process.env.PORT will allow any PORT that a user enters or 3000
// e.g. if you run node index.js ,Node will use 3000
// If you run PORT=4444 node index.js, Node will use process.env.PORT which equals to 4444 in this example
const PORT = process.env.PORT || 3000;






// GET Route for homepage (index.html)
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html'))
);


// GET route for notes page (notes.html)
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname,'./public/notes.html'));
}); 



// GET route for notes data stored as stringified array in db.json 
app.get('/api/notes', (req, res) => {
  console.log('notes get route successful');
  fs.readFile('./db/db.json', 'utf8', (err, data) => {
    err ? console.error(err) : console.log(data)
      if (err) throw err;
    // (data) is content stored in db.json
    // Need to JSON.parse(data) because it was stored as a stringified array
    let savedNotes = JSON.parse(data);
    console.log(savedNotes);
    res.json(savedNotes);
  });
}); 


// POST route to store notes data as stringified array in db.json
app.post('/api/notes', (req, res) => {
  console.log('notes post route successful');
  fs.readFile('./db/db.json', 'utf8', (err, data) => {
    err ? console.error(err) : console.log(data)
      if (err) throw err;
  
    let savedNotes = JSON.parse(data);
  // req.body object allows you to access data in a string or JSON object that user entered 
  // e.g. a user does a POST to http://localhost:3000/api/notes in Insomnia or browser and enters data in object format, I will be able to access that data
  let newNote = req.body;
  let uniqueId = savedNotes.length.toString();
  console.log(uniqueId);
  newNote.id = uniqueId;
  console.log(newNote);

  savedNotes.push(newNote);
  console.log(savedNotes);

    fs.writeFileSync('./db/db.json', JSON.stringify(savedNotes, null, 2), 'utf8', (err, data) => {
      err ? console.error(err) : console.log(data)
        if (err) throw err;
    });

  res.json(savedNotes);
  });

});













// The path string allows using regular expressions i.e. "*"
// Whenever user enters (http://localhost:3000/anyCharacters), then it will do a GET route for homepage (index.html)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

// Starts the server to begin listening
app.listen(PORT, function() {
  console.log(`App listening at http://localhost:${PORT} 🚀`)
});
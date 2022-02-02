// Include dependencies required (express, path, fs)
const express = require("express");
const path = require("path");
const fs = require("fs");

// Sets up the Express App
const app = express();

// Sets up the Express app to handle data parsing for PUTS and POSTS
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setting up express to serve static files (index.html, notes.html, style.css, and index.js) in "public" directory
app.use(express.static("public"));

// process.env.PORT will allow any PORT that a user enters or 3000
// e.g. if you run node index.js ,Node will use 3000
// If you run PORT=4444 node index.js, Node will use process.env.PORT which equals to 4444 
const PORT = process.env.PORT || 3000;


// GET Route for homepage (index.html)
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "./public/index.html"))
);


// GET route for notes page (notes.html)
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});


// GET route for notes data stored as stringified array in db.json
app.get("/api/notes", (req, res) => {
  console.log("notes get route successful");

  // use fs.readFile to capture data in db.json
  fs.readFile("./db/db.json", "utf8", (err, data) => {
    err ? console.error(err) : console.log(data);
    if (err) throw err;
    
    // (data) is content stored in db.json
    // Need to JSON.parse(data) because it was stored as a stringified array
    let savedNotes = JSON.parse(data);
    console.log(savedNotes);

    // return savedNotes as res.json
    res.json(savedNotes);
  });
});


// POST route to store notes data as stringified array in db.json
app.post("/api/notes", (req, res) => {
  console.log("notes post route successful");

  // use fs.readFile to capture data in db.json
  fs.readFile("./db/db.json", "utf8", (err, data) => {
    err ? console.error(err) : console.log(data);
    if (err) throw err;

    // (data) is content stored in db.json
    // Need to JSON.parse(data) because it was stored as a stringified array
    let savedNotes = JSON.parse(data);

    // req.body object allows you to access data in a string or JSON object that user entered
    // e.g. a user does a POST to http://localhost:3000/api/notes in Insomnia or browser and enters data in object format, I will be able to access that data
    let newNote = req.body;

    // create a variable for uniqueId equal to the length of savedNotes array and convert it to a string
    let uniqueId = savedNotes.length.toString();
    console.log(uniqueId);

    // create an id key for the newNote object and make it equal to uniqueId
    newNote.id = uniqueId;
    console.log(newNote);

    // push newNote (title, text, id) to savedNotes
    savedNotes.push(newNote);
    console.log(savedNotes);

    // fs.writeFileSync wll synchonize / update the db.json file with a stringified version of savedNotes
    fs.writeFileSync(
      "./db/db.json",
      JSON.stringify(savedNotes, null, 2),
      "utf8",
      (err, data) => {
        err ? console.error(err) : console.log(data);
        if (err) throw err;
      }
    );

    // return savedNotes as res.json
    res.json(savedNotes);
  });
});


// DELETE route to delete note depending on id parameter
// e.g. if user enters "http://localhost:3000/api/notes/4", then it will delete the note with id: 4
app.delete("/api/notes/:id", function (req, res) {
  console.log("notes delete route successful");

  // use fs.readFile to capture data in db.json
  fs.readFile("db/db.json", "utf8", (err, data) => {
    err ? console.error(err) : console.log(data);
    if (err) throw err;

    // (data) is content stored in db.json
    // Need to JSON.parse(data) because it was stored as a stringified array
    let savedNotes = JSON.parse(data);

    // takes the id parameter entered by user which will later be used to recreate the notes object minus the note with the id parameter entered
    // e.g. if user enters "api/notes/2", then it will recreate the savedNotes array minus the object that has id: 2
    let noteId = req.params.id;

    // SavedNotes will filter out the deleted note
    // .filter method creates a new array filled with elements that pass the test of notDeletedNotes.id is not equal to noteId (user input)
    savedNotes = savedNotes.filter((notDeletedNote) => {
      return notDeletedNote.id != noteId;
    });

    // create a let newNotesId = 0 which will be incremented and used to keep the same id structure before deletion
    let newNotesId = 0;

    // for of statement loop will loop through all of the noteDeletedNotes in savedNotes array
    for (notDeletedNote of savedNotes) {
      // the notDeletedNotes.id will be equal to 0 and converted to a string
      notDeletedNote.id = newNotesId.toString();
      // increment the newNotesId so notDeletedNotes.id has IDs that are the same as it was before deletion
      newNotesId++;
    }

    // fs.writeFileSync wll synchonize / update the db.json file with a stringified version of savedNotes
    fs.writeFileSync(
      "./db/db.json",
      JSON.stringify(savedNotes, null, 2),
      "utf8",
      (err, data) => {
        err ? console.error(err) : console.log(data);
        if (err) throw err;
      }
    );
    // return savedNotes as res.json
    res.json(savedNotes);
  });
});


// The path string allows using regular expressions i.e. "*"
// Whenever user enters (http://localhost:3000/anyCharacters), then it will do a GET route for homepage (index.html)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

// Starts the server to begin listening
app.listen(PORT, function () {
  console.log(`App listening at http://localhost:${PORT} 🚀`);
});

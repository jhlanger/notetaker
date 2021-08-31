




const fs = require('fs');
const path = require('path');
const router = require('express').Router();
let database = require('../../db/db.json');


router.get('/notes', (req,res) => {
  res.json(database);
})

router.post('/notes', (req,res) => {
  
  console.log(req.body);
  req.body.id = database.length.toString();
  const note = createNewNote(req.body, database);
  res.json(database);
})

router.get('/notes/:id', (req,res) => {
  res.json(database);
})

router.put('/notes/:id', (req,res) => {
  res.json(database);
})



function createNewNote(body, notes) {
  const note = body;
  //console.log(note);
  notes.push(note);
  console.log(notes);
  fs.writeFileSync(
    path.join(__dirname, '../../db/db.json'),
    JSON.stringify({database:notes}, null, 2)
  );
  return note;
}

module.exports = router;
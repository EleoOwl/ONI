const dataprovider = require('./core/dataprovider.js');

const express = require('express');
const app = express();
const port = 3000;

const apiRoute = '/onicore';

app.get(apiRoute+'/', (req, res) => {
  res.send('ONI core API is avaliable.')
});

app.get(apiRoute+'/schedule', (req, res) => {
  	res.json(dataprovider.getSchedule());

});

app.get(apiRoute+'/lecture/:id', (req, res) => {
  res.json(dataprovider.GetLectureById(req.params.id));
});

app.get(apiRoute+'/lecture?', (req, res) => {
  res.json(dataprovider.GetLectureByDateAndType(req.query.date, req.query.type));
});

app.get(apiRoute+'/lecturer/:name', (req, res) => {
	res.json(dataprovider.GetLecturerByName(req.params.name));
});

app.get(apiRoute+'/homework/:id', (req, res) => {
  res.json(dataprovider.GetHomeworkById(req.params.id));
});

app.listen(port, () => {
  console.log(`ONI API server listening at http://localhost:${port}${apiRoute}`)
});


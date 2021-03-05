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
  res.json(dataprovider.GetLectureById(id));
});

app.get(apiRoute+'/lecture/:date&:type', (req, res) => {
  res.json(dataprovider.GetLectureByDateAndType(date, type));
});

app.get(apiRoute+'/lecturer/:name', (req, res) => {
	res.json(dataprovider.GetLecturerByName(name));
});

app.get(apiRoute+'/homework/:id', (req, res) => {
  res.json(dataprovider.GetHomeworkById(id));
});

app.listen(port, () => {
  console.log(`ONI API server listening at http://localhost:${port}${apiRoute}`)
});


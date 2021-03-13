var pgp = require("pg-promise")(/*options*/);
//TO DO: update db password and hostname after db creation
var db = pgp("postgres://username:password@host:port/database");


const {QueryFile} = require('pg-promise');
const {join: joinPath} = require('path');

function sql(file) {
    const fullPath = joinPath(__dirname, file); 
    return new QueryFile(fullPath, {minify: true});
}


//exports like dbmanager.lecture.getById(id);

module.exports = {
	schedule:{
		getAll: sql('scripts/schedule/getAll.sql'),
	},
	lecture:{
		getById:sql('scripts/lecture/getById.sql'),
		getByDateAndType:sql('scripts/lecture/getByDateAndType.sql'),
	},
	lecturer:{
		getByName:sql('scripts/lecturer/getByName.sql'),
	},
	homework:{
		getById:sql('scripts/homework/getById.sql'),
	}
};
 function getSchedule(){
	let schedule = {
		schedule:{
			date: '05.03.2021',
			dayofweek: 'Friday',
			lecturer: 'Pidoras',
			lecturerId: 123,
			lectures:
			[
				{
					id : 1,
					type : 'lecture',
					name : 'huinya'
				},
				{
					id : 2,
					type : 'praktika',
					name : 'huinya2'
				}
			]
		}
	}
	return schedule;
}

function GetLectureById(id){
	let lecture = {
		id: 123,
		date: '05.03.2021',
		dayofweek: 'Friday',
		type:'sdvon'
	};
	return lecture;
}

function GetLectureByDateAndType(date, type){
	let lecture = {
		id: 123,
		date: '05.03.2021',
		dayofweek: 'Friday',
		type:'sdvon'
	};
	return lecture;
}

function GetLecturerByName(name){
	let lecturer = {
		name : 'pidoras',
		lections: [
		{
			ololo:'AAAA'
		},
		{
			ololo: 'AAAAA'

		}]
	};
	return lecturer;
}

function GetHomeworkById(id){
	let homework = {
		dz: 'SOS'
	};
	return homework;
}


module.exports = {
	getSchedule : getSchedule,
	GetLectureById : GetLectureById,
	GetLectureByDateAndType : GetLectureByDateAndType,
	GetLecturerByName : GetLecturerByName,
	GetHomeworkById : GetHomeworkById
};

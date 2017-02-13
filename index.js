var MongoClient = require('mongodb').MongoClient

var url = "mongodb://localhost/nodeDriver"

var Operaciones = require('./CRUD.js')

MongoClient.connect(url, function(err, db) {
	if (err) console.log(err)
	console.log("Connected to db")
	Operaciones.consultarYActualizar(db, (error, result) => {
		if(error) console.log("Error ELIMINANDO los registros " + error)
	})

})
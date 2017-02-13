module.exports.insertarRegistro = function (db, callback) {
	let coleccion = db.collection("users")

	coleccion.insertMany([
		{nombre: "David", edad: 25, peso: 75},
		{nombre: "Antonio", edad: 21, peso: 70},
		{nombre: "Jose", edad: 30, peso: 80}
	], (error, result) => {
		console.log("Result from insertMany: " + result.toString())
	})

}

module.exports.eliminarRegistro = function (db, callback) {
	let coleccion = db.collection("users")

	try {
		coleccion.deleteOne({edad:30})
		console.log("Se elimino el registro correctamente")
	} catch (e) {
		console.log("Se genero un error: " + e)
	}
}

module.exports.consultarYActualizar = function(db, callback) {
	let coleccion = db.collection("users")	

	coleccion.find().toArray((error, documents) => {
		if (error) console.log(error)
		console.log(documents)
		callback()
	})

	try {
		coleccion.updateOne ({nombre: "Antonio"}, {$set: {peso: 90}})
		console.log("Se modifico el registro correctamente")
	} catch (e) {
		console.log("Error actualizando el registro: " + e)
	}

	coleccion.find().toArray((error, documents) => {
		if (error) console.log(error)
		console.log(documents)
		callback()
	})

}
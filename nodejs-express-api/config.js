var config = {
	app: {
		name: "Truck Scale",
		url: "http://localhost:8060",
		frontendUrl: "http://localhost:8050",
		secret: "1025007234597773c1aebf070809f34b",
		language: "english",
		publicDir: "assets",
	},
	meta: {
		author:"",
		description: "__metadescription",
		charset: "UTF-8",
	},
	database: {
		name:"truckscale",
		type: "mysql",
		host: "localhost",
		username: "root",
		password: "astalavista",
		port: "3308",
		charset: "utf8",
		recordlimit: 10,
		ordertype: "DESC"
	},
	mail: {
		username:"",
		password: "",
		senderemail:"",
		sendername:"",
		host: "",
		port: ""
	},
	upload: {
		tempDir: "uploads/temp/",
		import_data: {
			filenameType: "timestamp",
			extensions: "json,csv",
			limit: "10",
			maxFileSize: "3",
			returnFullpath: "false",
			filenamePrefix: "",
			uploadDir: "uploads/files/"
		},
		
	},
	s3: {
		secretAccessKey: "",
		accessKeyId: "",
		region: "",
		bucket: "",
	},
	
	locales: {
		'english': 'English',
	}

}
module.exports = config
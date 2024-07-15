const multer = require('multer')
const path = require('path')
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join(__dirname, '..', 'public/img'))
	},
	filename: function (req, file, cb) {
		const uniqueSuffix = Math.round(Math.random() * 1e9)
		cb(null, file.originalname)
		// cb(null,uniqueSuffix + '-' + file.originalname)
	},
})

const upload = multer({ storage })

module.exports = upload

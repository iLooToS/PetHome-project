const router = require('express').Router()
const petController = require('../../controllers/petController')
const upload = require('../../middleware/upload')

const verifyAccessToken = require('../../middleware/verifyAccessToken')

router.get('/', petController.getAllPets)

router.get('/:petId', petController.getPetById)

router.post(
	'/',
	verifyAccessToken,
	upload.single('photo'),
	petController.createPet
)

router.put('/:petId', verifyAccessToken, petController.updatePet)

router.delete('/:petId', verifyAccessToken, petController.deletePet)

module.exports = router

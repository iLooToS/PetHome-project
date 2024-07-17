const { Pet, PetImage, Shelter, Location } = require('../db/models')

class PetServices {
	async getAllPets(filter) {
		return Pet.findAll({
			where: filter,
			include: PetImage,
		})
	}

	async getPetById(id) {
		return Pet.findByPk(id, {
			include: [{ model: Shelter, include: Location }, PetImage],
		})
	}

	async createPet(data) {
		data.name = data.name[0].toUpperCase() + data.name.slice(1).toLowerCase()
		return Pet.create(data)
	}
	async createPetImage(data) {
		return PetImage.create(data)
	}
	async updatePet(shelterId, id, body) {
		const pet = await Pet.findOne({ where: { id, shelterId } })
		if (pet) {
			console.log(body, 'awdwadwad');
			return pet.update(body)
		}
		return null
	}

	async updatePet(shelterId, id, body) {
		const pet = await Pet.findOne({ where: { id, shelterId } })
		if (pet) {
			return pet.update(body)
		}
		return null
	}

	async deleteShelter(id) {
		const pet = await Pet.findOne({ where: { id } })
		if (pet) {
			pet.destroy()
			return true
		}
		return false
	}
}

module.exports = new PetServices()

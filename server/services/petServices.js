const { Pet, PetImage, Shelter, Location } = require('../db/models')

class PetServices {
	async getAllPets() {
		return Pet.findAll({ include: PetImage })
	}

	async getPetById(id) {
		return Pet.findByPk(id, {
			include: [{ model: Shelter, include: Location }, PetImage],
		})
	}

	async createPet(data) {
		return Pet.create(data)
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

const { ShelterPost, ShelterPostImage, Shelter } = require("../db/models");

class PostServices {
  async getAllPosts() {
    console.log();
    return ShelterPost.findAll({ include: ShelterPostImage });
  }

  async getPostById(id) {
    return ShelterPost.findByPk(id, {
      include:  ShelterPostImage,
    });
  }

	async createPost(data) {
		data.postName = data.postName[0].toUpperCase() + data.postName.slice(1).toLowerCase();
		return ShelterPost.create(data)
	}
	async createPostImage(data) {
		return ShelterPostImage.create(data)
	}
}

module.exports = new PostServices();

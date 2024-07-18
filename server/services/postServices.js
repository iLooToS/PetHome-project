const {
  ShelterPost,
  ShelterPostImage,
  Shelter,
  ShelterPostComment,
  User,
} = require("../db/models");

class PostServices {
  async getAllPosts() {
    return ShelterPost.findAll({
      include: [ShelterPostImage, ShelterPostComment],
    });
  }

  async getPostById(id) {
    return ShelterPost.findByPk(id, {
      include: [ShelterPostImage, ShelterPostComment],
    });
  }

  async createPost(data) {
    data.postName =
      data.postName[0].toUpperCase() + data.postName.slice(1).toLowerCase();
    return ShelterPost.create(data);
  }
  async createPostImage(data) {
    return ShelterPostImage.create(data);
  }
  async deletePost(id) {
    const post = await ShelterPost.findOne({ where: { id } });
    if (post) {
      post.destroy();
      return true;
    }
    return false;
  }
}

module.exports = new PostServices();

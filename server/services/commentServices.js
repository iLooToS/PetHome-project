const { ShelterPost, ShelterPostComment } = require("../db/models");

class CommentServices {
  async getAllCommentsForPost(postId) {
    return ShelterPostComment.findAll({
      where: {
        postId,
      },
      include: {
        model: ShelterPost,
      },
      
    });
  }

  async createComment(shelterPostId, userId, text) {
    return ShelterPostComment.create({
      shelterPostId,
      userId,
      text,
    });
  }
}

module.exports = new CommentServices();

const PostServices = require("../services/postServices");
const CommentServices = require("../services/commentServices");

exports.createComment = async (req, res) => {
  try {
    const { text, shelterPostId } = req.body;
    if (!shelterPostId || !text) {
      res.status(400).json({ message: "Параметры недоступны" });
      return;
    }
    const { user } = res.locals;
    const post = await PostServices.getPostById(+shelterPostId);
    if (!post) {
      res.status(404).json({ message: "Пост не найден" });
      return;
    }
    const comment = await CommentServices.createComment(
      shelterPostId,
      user.id,
      text
    );
    if (comment) {
      console.log(comment);
      res.status(201).json({ message: "success", shelterPostComment: comment });
      return;
    }
    res.status(404).json({ message: "Комментарий не создан" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};

const PostServices = require("../services/postServices");
const ShelterServices = require("../services/shelterServices");

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await PostServices.getAllPosts();
    if (!posts) {
      res.status(400).json({ message: "Постов нет" });
      return;
    }
    res.status(200).json({ message: "success", posts });
  } catch ({ message }) {
    res.json({ error: message });
  }
};

exports.getPostById = async (req, res) => {
  try {
    const { postId } = req.params;
    if (!postId) {
      res.status(400).json({ message: "Параметра нет" });
      return;
    }
    const post = await PostServices.getPostById(+postId);
    if (!post) {
      res.status(400).json({ message: "Такого поста нет" });
      return;
    }
    res.status(200).json({ message: "success", post });
  } catch ({ message }) {
    res.json({ error: message });
  }
};

exports.createPost = async (req, res) => {
  try {
    const { shelterId, postName, text } = req.body;
    // console.log(req.body)
    if (!shelterId || !postName || !text) {
      res.status(400).json({ message: "Необходимые поля не заполнены" });
      return;
    }
    const newPost = await PostServices.createPost({
      shelterId: +shelterId,
      postName,
      text,
    });
    if (!newPost) {
      res.status(400).json({ message: "Ошибка создания поста" });
      return;
    }
    if (newPost && !req.file) {
      const post = await PostServices.getPostById(newPost.id);
      res.status(200).json({ message: "success", post: post.dataValues });
      return;
    }
    const { filename } = req.file;
    const postImage = await PostServices.createPostImage({
      shelterPostId: newPost.id,
      url: `/img/${filename}`,
    });
    if (!newPost || !postImage) {
      res.status(400).json({ message: "Ошибка создания поста" });
      return;
    }
    const post = await PostServices.getPostById(newPost.id);
    res.status(200).json({ message: "success", post: post.dataValues });
  } catch ({ message }) {
    res.json({ error: message });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const user = res.locals.user;
    const { postId } = req.params;
    if (!postId) {
      res.status(400).json({ message: "Параметра нет" });
      return;
    }
    const post = await PostServices.getPostById(+postId);
    if (!post) {
      res.status(400).json({ message: "Такого поста нет" });
      return;
    }
    const shelter = await ShelterServices.getShelterById(post.shelterId);
    if (!shelter) {
      res.status(400).json({ message: "Такого приюта нет" });
      return;
    }
    if (
      shelter.dataValues.id !== post.dataValues.shelterId ||
      shelter.dataValues.userId !== user.id
    ) {
      res.status(403).json({
        message: "Недостаточно прав для редактирования этого питомца",
      });
      return;
    }
    const deleted = await PostServices.deletePost(+postId);
    if (deleted === true) {
      res.status(200).json({ message: "success" });
      return;
    }
    res.status(400).json({ message: "Пост не удален" });
  } catch ({ message }) {
    res.json({ error: message });
  }
};

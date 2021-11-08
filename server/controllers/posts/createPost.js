const Post = require("../../models/posts");

const createPost = async (req, res) => {
  const post = new Post({
    name: req.body.name,
    title: req.body.title,
    description: req.body.description,
    picture: req.body.picture,
    senderPicture: req.body.senderPicture,
    date: req.body.date,
  });

  try {
    const a1 = await post.save();
    res.json({
      success: true,
      message: "Your post has been successfully added",
      content: "",
    });
  } catch (err) {
    res.json({
      success: false,
      message: "Your post couldn't be added, try again later",
      content: err,
    });
  }
};

module.exports = createPost;

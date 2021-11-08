const Post = require("../../models/posts");

const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.json({
      success: true,
      message: "",
      content: post,
    });
  } catch (err) {
    res.send({
      success: true,
      message: "Your post has been successfully added",
      content: err,
    });
  }
};

module.exports = getPost;

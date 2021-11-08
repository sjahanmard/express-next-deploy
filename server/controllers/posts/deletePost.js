const Post = require("../../models/posts");

const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    const response = await post.remove();
    res.json({
      success: true,
      message: "Your post has been successfully deleted",
      content: "",
    });
  } catch (err) {
    res.json({
      success: false,
      message: "Your post could not be removed",
      content: err,
    });
  }
};

module.exports = getPost;

const Post = require("../../models/posts");

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    // const posts = await post.find({ sub: true });

    // query = req.query
    //const posts = await post.find(query)
    // Profile.find({age:{$gt:40,$lt:50}})
    res.status(200).json({
      success: true,
      message: "",
      content: posts,
    });
  } catch (err) {
    res.json({
      success: false,
      message: "posts are not available",
      content: err,
    });
  }
};

module.exports = getPosts;

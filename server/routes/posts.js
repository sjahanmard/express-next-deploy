const express = require("express");
const router = express.Router();
const getPosts = require("../controllers/posts/getPosts");
const getPost = require("../controllers/posts/getPost");
const createPost = require("../controllers/posts/createPost");
const deletePost = require("../controllers/posts/deletePost");

router.route("/").get(getPosts).post(createPost);
router.route("/:id").get(getPost).delete(deletePost);

module.exports = router;

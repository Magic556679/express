var express = require('express');
const posts = require('../models/postsModel');
var router = express.Router();
const Post = require('../models/postsModel')

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const post = await Post.find();
  res.status(200).json({
    post
  })
});

router.post('/', async function(req, res, next) {
  const data = req.body
  const newPosts = await Post.create(data)
  res.status(200).json({
    data: newPosts
  })
});

module.exports = router;

const handleError = require('../service/handleError');
const handleSuccess = require('../service/handleSuccess');
const Posts = require('../models/postsModel');

const posts = {
  async getPosts(req, res) {
    const allPosts = await Posts.find();
		handleSuccess(res, allPosts);
  },
  async createdPosts(req, res) {
    try {
			const { body } = req;
			if(body.content){
				const newPosts = await Posts.create({
						name: body.name,
						content: body.content,
						tags: body.tags,
						type: body.type
				})
				handleSuccess(res, newPosts);
			} else {
				handleError(res);
			}
		} catch (error){
			handleError(res, error)
		}
  },
}

module.exports = posts;
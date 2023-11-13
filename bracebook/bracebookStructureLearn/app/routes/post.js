const express = require('express')
const {postController} = require('../controllers/postController')
const {validate} = require('../middlewares/validate')
const {postSchema} = require('../validations/postValidation')
const routs = express()

routs.post('/create', validate(postSchema),postController.createPost);
routs.get('/posts', postController.getAllPosts);
routs.get('/posts/:id', postController.getSinglePosts);
routs.post('/deletAll', postController.deletAllPosts);

module.exports = routs

const {Post} = require('../models/post')

class postController {
    //creating post
    static async createPost(req,res){
        try {
            const { userId,title, content } = req.body
            if(!userId || !title || !content) return res.status(404).json({ message:'please fill all field'});
            const post = await Post.create({ userId,title,content })
            res.status(201).json({message:`post ${post.title} is created`,post:post})
        } catch (error) {
            res.status(500).json({message:'SERVER_ERROR',error:error})
        }
    }

    //accessing all posts
    static async getAllPosts(req,res){
        try {
            const posts = await Post.find().populate('userId')
            if(!posts) return res.status(401).json({message:'No posts exists'})
            res.status(200).json({message:`You access post successfuly!`,posts:posts})
        } catch (error) {
            res.status(500).json({message:'SERVER_ERROR',error:error})
        }
    }

    //get single post
    static async getSinglePosts(req,res){
        try {
            const post = await Post.find({_id:req.params.id}).populate('userId')
            if(!post) return res.status(401).json({message:'No posts exists'})
            res.status(200).json({message:`${ post.title } retrieved success fully`,posts:post})
        } catch (error) {
            res.status(500).json({message:'SERVER_ERROR',error:error})
        }
    }

    //deleting all posts
    static async deletAllPosts(req,res){
        try {
            const deletedPosts = await Post.deleteMany()
            if (!deletedPosts) return res.status(401).json({message:'Deleting all post is not done'})
            res.status(200).json({message:'All post are deleted', deletedPosts:deletedPosts})
        } catch (error) {
            res.status(500).json({message:'SERVER_ERROR', error:error})
        }
    }
}

module.exports ={ postController }

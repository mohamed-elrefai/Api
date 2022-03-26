const router = require('express').Router();
const Post = require('../model/Posts');
const User = require('../model/User')

// Post
router.post('/Api/Post', async (req, res) => {
    try{
        const post = await Post(req.body).save();
        res.status(200).json(post);
    }catch(err){
        res.status(403).json(err);
    }
})

// Get
router.get('/api/post/:id', async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    }catch(err){
        res.status(403).json(err)
    }
})

// Update
router.put('/api/updatePost/:id', async (req, res) => {
    const post = await Post.findById(req.params.id);

    if(post.userId === req.body.userId){
        try{
            await post.updateOne({$set: req.body});
            res.status(200).json({msg: "u update post 😘"})
        }catch(err){
            res.status(500).json(err)
        }
    }else{
        res.status(403).json({msg: "u cant update this post"})
    }
})

// Delete
router.delete('/Api/DeletePost/:id', async (req, res) => {
    const post = await Post.findById(req.params.id);

    if(post.userId === req.body.userId){
        try{
            await post.deleteOne();
            res.status(200).json({msg: "u delete post 😣"})
        }catch(err){
            res.status(500).json(err)
        }
    }else{
        res.status(403).json({msg: "u cant delete this post"})
    }
})

// Likes
router.put('/api/post/:id/like', async (req, res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if (!post.likes.includes(req.body.userId)){
            await post.updateOne({ $push: { likes: req.body.userId } });
            res.status(200).json({msg: "The post has been liked"});
        }else{
            await post.updateOne({ $pull: { likes: req.body.userId } });
            res.status(200).json({msg: "The post has been disliked"});
        }
    }catch(err){
        res.status(403).json(err)
    }
})

// Timeline
router.get("/timeline/all", async (req, res) => {
    try {
        const userFind = await User.findById(req.body.userId);
        const userPosts = await Post.find({ userId: userFind._id });
        const friendPosts = await Promise.all(
            userFind.followings.map((friendId) => {
                return Post.find({ userId: friendId });
            })
        );
        res.json(userPosts.concat(...friendPosts))
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
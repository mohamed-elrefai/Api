const router = require('express').Router();
const User = require('../model/User');
const bcrypt = require('bcrypt');

// update 
router.put('/Api/UpdateUser/:id', async (req, res) =>{
    if (req.body.userID === req.params.id){
        if (req.body.password){
            try{
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt)
            }catch(err){
                res.status(500).json(err)
            }
        }
        try{
            await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            });
            res.status(200).json({msg: "Account is updated"})
        }catch(err){
            res.status(500).json(err)
        }
    }else{
        res.status(403).json({msg: "you cant update this account"})
    }
})

// Get
router.get('/:id', async (req, res) => {
    try{
        const user =  await User.findById(req.params.id);
        const {password, updatedAt, ...other} = user._doc;

        res.status(200).json(other)
    }catch(err){
        res.status(500).json(err)
    }
})

// Delete
router.delete('/ApiDeleteUser/:id', async (req, res) => {
    if(req.body.userId === req.params.id){
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({msg: 'account is deleted'})
    }else{
        res.status(403).json({msg: 'you cant delete this account'})
    }
})

// follow

router.put("/:id/follow", async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const followers = await User.findById(req.body.userId);
            if (!user.followers.includes(req.body.userId)) {
                await user.updateOne({ $push: { followers: req.body.userId } });
                await followers.updateOne({ $push: { followings: req.params.id } });
                res.status(200).json("user has been followed");
            } else {
                res.status(403).json("you allready follow this user");
            }
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("you cant follow yourself");
    }
});

// Unfollow

router.put("/:id/unfollow", async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
        if (user.followers.includes(req.body.userId)) {
            await user.updateOne({ $pull: { followers: req.body.userId } });
            await currentUser.updateOne({ $pull: { followings: req.params.id } });
            res.status(200).json("user has been unfollowed");
        } else {
            res.status(403).json("you dont follow this user");
        }
    } catch (err) {
        res.status(500).json(err);
    }
    } else {
        res.status(403).json("you cant unfollow yourself");
    }
});

module.exports = router;
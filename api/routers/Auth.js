const router = require('express').Router();
const { CookieByUserId, CookieByUsername, maxAge } = require('../utils/jwt');
const upload = require('../upload/App');
const User = require('../model/User');
const bcrypt = require('bcrypt');

// Upload Images
router.post('/Api/uploadImag', upload.single('img'), async (req, res) => {
    res.send(req.file.filename)
})


// Register
router.post('/Api/signUp', async (req, res) => {
    // Hash Password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    const password = hash;

    try{
        const { fname, lname, email } = req.body;
        const user = await User({fname, lname, email, password}).save();

        // create Cookie
        const token_Id = CookieByUserId(user.id);
        const token_username = CookieByUsername(user.fname);

        res.cookie('_set', token_Id, {httpOnly: true, expiresIn: maxAge})
        res.cookie('__Dark', token_username, {httpOnly: true, secure: true,  expiresIn: maxAge})

        res.status(200).json(user)
    }catch(err){
        res.status(400).json(err);
    }
});

// Login
router.post('/Api/signIn', async (req, res) => {

    try{
        const user = await User.findOne({email: req.body.email});
        if(!user) return res.status(404).json({msg: "this email not founded"})

        const password = await bcrypt.compare(req.body.password, user.password);
        if(!password) return res.status(404).json({msg: "password is not correct"})

        res.status(200).json(user);
    }catch(err){
        res.status(400).json(err);
    }
})

module.exports = router;
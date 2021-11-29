const User = require("../models/User")
const router = require("express").Router();
const bcrypt = require("bcrypt")

//update user
router.put("/:id", async (req, res) => {
    if (req.params.id === req.body.userId || req.body.isAdmin) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10)
                req.body.password = await bcrypt.hash(req.body.password, salt)
            } catch (err) {
                res.status(500).json(err)
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.body.userId, { $set: req.body })
            res.status(200).json("Your account have been updated")
        } catch (error) {
            res.status(500).json(err)
        }
    } else {
        return res.status(403).json("you can update only your account")
    }

})
//delete user
router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            await User.findByIdAndDelete(req.body.id)
            res.status(200).json("you have been deleted your account")
        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        res.status(403).json("you can delete only your account")
    }
})

//get a user
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById('61a3906c2d3d0093d470cc8c')
        const { password, updatedAt, ...orther } = user._doc
        res.status(200).json(orther)
    } catch (error) {
        res.status(500).json(error)
    }
})

//flowers
router.put("/:id/follow", async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if (!user.followers.includes(req.body.userId)) {
                await user.updateOne({ $push: { followers: req.body.userId } })
                await currentUser.updateOne({ $push: { followings: req.params.id } })
                res.status(200).json("follow success")
            } else {
                res.status(500).json("you already follow this user")
            }
        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        res.status(403).json("you cant follow yourself")
    }
})

//unflow
router.put("/:id/unfollow", async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if (user.followers.includes(req.body.userId)) {
                await user.updateOne({ $pull: { followers: req.body.userId } })
                await currentUser.updateOne({ $pull: { followings: req.params.id } })
                res.status(200).json("unfollow success")
            } else {
                res.status(500).json("you dont follow this user")
            }
        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        res.status(403).json("you cant unfollow yourself")
    }
})

module.exports = router;
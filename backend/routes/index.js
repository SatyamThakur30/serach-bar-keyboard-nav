const express = require("express")
const data = require("../data")
const User = require("../models/user")

const router = express.Router()

// routes for data injection
router.get("/inject-data", async (req, res) => {
    try {
        const insery = await User.insertMany(data)
        // console.log(insery)
        res.status(201).json({ message: "records injected" })

    } catch (error) {
        console.log(error)
        res.status(501).json({ message: "Internal server error" })
    }
})



// filter query using aggregation

router.get("/get-by-filter", async (req, res) => {
    const { text } = req.query
    console.log(text)
    try {
        const usersFilter = await User.find({
            $or: [
                {
                    id: { $regex: new RegExp("\\b" + ".*" + text + ".*" + "\\b"), $options: 'i' }
                },
                {
                    name: { $regex: new RegExp("\\b" + ".*" + text + ".*" + "\\b"), $options: 'i' }
                },
                {
                    pincode: { $regex: new RegExp("\\b" + ".*" + text + ".*" + "\\b"), $options: 'i' }
                },
                {
                    address: { $regex: new RegExp("\\b" + ".*" + text + ".*" + "\\b"), $options: 'i' }
                },
                {
                    items:{ $elemMatch:{ $regex: new RegExp("\\b" + ".*" + text + ".*" + "\\b"), $options: 'i' }}
                }


            ]
        })
        res.status(200).json({ message: "sucessfull", data: usersFilter })
    } catch (error) {
        console.log(error)
        res.status(501).json({ message: "internal server error" })
    }

})

module.exports = router

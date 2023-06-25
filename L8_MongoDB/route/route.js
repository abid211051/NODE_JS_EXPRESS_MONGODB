const express = require('express');
const User = require('../model/model');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const result = await User.find({}).exec();
        if (result) {
            res.send(result);
        } else {
            res.status(404).json({ error: 'not found' });
        }
    }
    catch (error) {
        console.error('Error retrieving :', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

router.get('/:id', async (req, res) => {
    try {
        const result = await User.findOne({ _id: req.params.id }).exec();
        if (result) {
            res.send(result);
        } else {
            res.status(404).json({ error: 'not found' });
        }
    }
    catch (error) {
        console.error('Error retrieving :', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

router.post('/', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        let user = new User(
            {
                name,
                email,
                password
            }
        )
        let newuser = await user.save();
        res.send(newuser);

    } catch (error) {
        res.send(error);
    }

})

router.put('/:id', async (req, res) => {
    try {
        const updateduser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        ).exec();

        if (updateduser) {
            res.send(updateduser);
        } else {
            res.status(404).json({ error: 'not found' });
        }
    }
    catch (error) {
        console.error('Error updating', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

router.delete('/:id', async (req, res) => {

    try {
        const deleteduser = await User.findByIdAndDelete(req.params.id).exec();

        if (deleteduser) {
            res.json({ message: 'deleted successfully' });
        } else {
            res.status(404).json({ error: 'not found' });
        }
    }
    catch (error) {
        console.error('Error deleting ', error);
        res.status(500).json({ error: 'Internal server error' });
    }

})

module.exports = router;
const express = require('express');
const router = express.Router();
const Registration = require('../model/User')


router.get('/register', (req, res) => {
    res.render('registerForm');
});

router.post('/register', async(req, res) => {
    try {
        const user = new Registration(req.body)
        await Registration.register(user, req.body.password, (error)=>{

            if (error) {
                throw  error;
            }
            res.redirect('/register')

        });
        
    } catch (error) {
        res.status(400).send('unable to register')
        
    }
})

module.exports = router
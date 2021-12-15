const express = require('express');
const router = express.Router();

const Teetime = require('../models/teetime')

router.get('/', function(req, res, next) {
    Teetime.find((err, teetime) => {
        if (err){
            console.log(err)
            res.end(err)
        }
        else{
            res.render('teetimes/index', {
                teetime : teetime,
                title: 'Tee Times'
            })
        }
    })
});

router.get('/create', (req,res) => {
    res.render('teetimes/create', {
        title: 'Add a New Teetime'
    })
})

router.post('/create', (req,res) => {
        Teetime.create({
            golferName: req.body.golferName,
            holes: req.body.holes,
            cartRequired: req.body.cartRequired,
            date: req.body.date,
            greenFee: req.body.greenFee
        }, (err, newGolfer) =>{
            if (err){
                console.log(err)
                res.end(err)
            }
            else{
                res.redirect('/teetimes')
            }
        })
})


module.exports = router;
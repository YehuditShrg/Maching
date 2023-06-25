const express = require('express');
const fundRaisersService = require('../services/fundRaisersService');
const router = express.Router();
const donations = require('./donations');
const errorMW = require('../middlewares/error');

router.use('/:ID/donation', donations);

router.get('/', async (req, res) => {
    res.send(await fundRaisersService.getAllFundRaisers());
});

router.get('/:fundRaiserID', async (req, res) => {
    res.send(await fundRaisersService.getByID(req.params.fundRaiserID));
});

router.post('/creat', async (req, res) => {
    res.send(await fundRaisersService.createFundRaiser(req.params));
});

router.put('/update', async (req, res) => {
    res.send(await fundRaisersService.updateFundRaiser(req.params));
});

router.delete('/delete/:fundRaiserID', async (req, res) => {
    res.send(await fundRaisersService.deleteFundRaiser(req.params.fundRaiserID));
});

router.use(errorMW);

module.exports = router;
const express = require('express');
const donationsService = require('../services/donationsService');
const router = express.Router();
const errorMW = require('../middlewares/error');

router.get('/', async (req, res) => {
    res.send(await donationsService.getAllDonaions());
});

router.post('/creat', async (req, res) => {
    res.send(await donationsService.createDonaion(req.params));
});

router.put('/update', async (req, res) => {
    res.send(await donationsService.updateDonaion(req.params));
});

router.delete('/delete/:donationID', async (req, res) => {
    res.send(await donationsService.deleteDonaion(req.params.donationID));
});

router.use(errorMW);

module.exports = router;
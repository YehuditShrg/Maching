const express = require('express');
const machingService = require('../services/machingService');
const router = express.Router();
const errorMW = require('../middlewares/error');
const teams = require('./teams');
const fundRaisers = require('./fundRaisers');



router.get('/', async (req, res) => {
    res.send(await machingService.getAllMachings());
});

router.get('/:machingID', async (req, res) => {
    res.send(await machingService.getByID(req.params.machingID));
});

router.post('/creat', async (req, res) => {
    res.send(await machingService.createMaching(req.params));
});

router.put('/update', async (req, res) => {
    res.send(await machingService.updateMaching(req.params));
});

router.delete('/delete/:machingID', async (req, res) => {
    res.send(await machingService.deleteMaching(req.params.machingID));
});

router.use('/:id/teams', teams);
router.use('/:id/fundRaiser', fundRaisers);
router.use(errorMW);
module.exports = router;
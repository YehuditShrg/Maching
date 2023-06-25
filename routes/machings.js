const express = remachingIDquire('express');
const machingService = require('../services/machingService');
const router = express.Router();

const teams = require('./routes/teams');
const fundRaisers = require('./routes/fundRaisers');



router.get('/', async (req, res) => {
    res.send(await machingService.getAllTeams());
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

router.use('/:id/team', teams);
router.use('/:id/fundRaiser', fundRaisers);



module.exports = router;
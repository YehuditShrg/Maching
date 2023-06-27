const express = require('express');
const campaignService = require('../services/campaignService');
const router = express.Router();
const errorMW = require('../middlewares/error');
const teams = require('./teams');
const fundRaisers = require('./fundRaisers');



router.get('/', async (req, res) => {
    res.send(await campaignService.getAllCampaigns());
});

router.get('/:machingID', async (req, res) => {
    res.send(await campaignService.getByID(req.query.machingID));
});

router.post('/creat', async (req, res) => {
    res.send(await campaignService.createCampaign(req.params));
});

router.put('/update', async (req, res) => {
    res.send(await campaignService.updateCampaign(req.params));
});

router.delete('/delete/:machingID', async (req, res) => {
    res.send(await campaignService.deleteCampaign(req.params.machingID));
});

router.use('/:id/teams', teams);
router.use('/:id/fundRaiser', fundRaisers);
router.use(errorMW);
module.exports = router;
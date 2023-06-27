const { connect } = require('../models/db_connection');
const { Campaign } = require('../models/campaign');
const logger = console;//require('../logger/api.logger');

class CampaignRepository {
    
    constructor() {
        // connect();
    }

    async getAllCampaigns() {
        const campaigns = await Campaign.find({});
        console.log('Campaigns:::', campaigns);
        return campaigns;
    }

    async getByID(campaignID) {
        console.log(campaignID);
        const campaign = await Campaign.findOne({ ID: campaignID });
        console.log('Campaigns:::', campaign);
        return campaign;
    }

    async createCampaign(campaign) {
        let data = {};
        try {
            data = await Campaign.create(campaign);
        } catch (err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async updateCampaign(campaign) {
        let data = {};
        try {
            data = await Campaign.updateOne(campaign);
        } catch (err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async deleteCampaign(campaignID) {
        let data = {};
        try {
            data = await Campaign.deleteOne({ ID: campaignID });
        } catch (err) {
            logger.error('Error::' + err);
        }
        return { status: `${data.deletedCount > 0 ? true : false}` };
    }

}

module.exports = new CampaignRepository();
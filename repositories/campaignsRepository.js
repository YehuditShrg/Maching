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

    async getByID(CampaignID) {
        const Campaign = await Campaign.findOne({ ID: CampaignID });
        console.log('Campaigns:::', Campaign);
        return Campaign;
    }

    async createCampaign(Campaign) {
        let data = {};
        try {
            data = await Campaign.create(Campaign);
        } catch (err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async updateCampaign(Campaign) {
        let data = {};
        try {
            data = await Campaign.updateOne(Campaign);
        } catch (err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async deleteCampaign(CampaignID) {
        let data = {};
        try {
            data = await Campaign.deleteOne({ ID: CampaignID });
        } catch (err) {
            logger.error('Error::' + err);
        }
        return { status: `${data.deletedCount > 0 ? true : false}` };
    }

}

module.exports = new CampaignRepository();
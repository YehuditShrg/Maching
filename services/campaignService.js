const campaignRepository  = require('../repositories/campaignsRepository');

class campaignService {

    constructor() {}

    async getAllCampaigns() {
        return await campaignRepository.getAllCampaigns();
    }

    async createCampaign(maching) {
        return await campaignRepository.createCampaign(maching);
    }

    async updateCampaign(maching) {
        return await campaignRepository.updateCampaign(maching);
    }

    async deleteCampaign(machingID) {
        return await campaignRepository.deleteCampaign(machingID);
    }
    async getByID(machingID) {
        return await campaignRepository.getByID(machingID);
    }
}

module.exports = new campaignService();
const { connect } = require('../models/dataBase');
const { Donation } = require('../models/donation');
const logger = console;//require('../logger/api.logger');

class teamsRepository {
    
    constructor() {
        connect();
    }

    async getAllDonations() {
        const donations = await Donation.find({});
        console.log('donations:::', donations);
        return donations;
    }

    async createDonation(donation) {
        let data = {};
        try {
            data = await Donation.create(donation);
        } catch (err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async updateDonation(donation) {
        let data = {};
        try {
            data = await Donation.updateOne(donation);
        } catch (err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async deleteDonation(donationID) {
        let data = {};
        try {
            data = await Donation.deleteOne({ ID: donationID });
        } catch (err) {
            logger.error('Error::' + err);
        }
        return { status: `${data.deletedCount > 0 ? true : false}` };
    }

}

module.exports = new teamsRepository();
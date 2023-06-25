const { connect } = require('../models/dataBase');
const { Donation } = require('../models/donation');
const logger = console;//require('../logger/api.logger');

class donationRepository {

    constructor() {
        connect();
    }

    async getAllDonations() {
        console.log("get donation");
        const donations = await Donation.find();
        console.log('donations:::', donations);
        return donations;
    }

    async createDonation(donation) {
        console.log("creat donation");
        let data = {};
        console.log(donation);
        try {
            data = await Donation.create(donation);
            console.log("creat donation1");
            console.log(data);

        } catch (err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async deleteDonation(donationID) {
        let data = {};
        console.log(donationID);
        try {
            data = await Donation.deleteOne({ ID: donationID });
        } catch (err) {
            logger.error('Error::' + err);
        }
        return { status: `${data.deletedCount > 0 ? true : false}` };
    }

}

module.exports = new donationRepository();
const donationsRepository  = require('../repositories/donationsRepository');

class donationService {

    constructor() {}

    async getAllDonations() {
        return await donationsRepository.getAllDonations();
    }

    async createDonation(donation) {
        return await donationsRepository.createDonation(donation);
    }

    async deleteDonation(donationID) {
        console.log(donationID);
        return await donationsRepository.deleteDonation(donationID);
    }

}

module.exports = new donationService();
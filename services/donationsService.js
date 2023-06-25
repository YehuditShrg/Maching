const donationsRepository  = require('../repositories/donationsRepository');

class donationService {

    constructor() {}

    async getAllDonations() {
        return await donationsRepository.getAllDonations();
    }

    async createDonation(donation) {
        return await donationsRepository.createDonation(donation);
    }

    async updateDonation(donation) {
        return await donationsRepository.updateDonation(donation);
    }

    async deleteDonation(donationID) {
        return await donationsRepository.deleteDonation(donationID);
    }

}

module.exports = new donationService();
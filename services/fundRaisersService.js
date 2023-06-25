const fundRaisersRepository = require('../repositories/fundRaisersRepository');

class fundRaisersService {

    constructor() { }

    async getAllFundRaisers() {
        return await fundRaisersRepository.getAllFundRaisers();
    }

    async getByID(fundRaiserID) {
        return await fundRaisersRepository.getByID(fundRaiserID);
    }

    async createFundRaiser(fundRaiser) {
        return await fundRaisersRepository.createFundRaiser(fundRaiser);
    }

    async updateFundRaiser(fundRaiser) {
        return await fundRaisersRepository.updateFundRaiser(fundRaiser);
    }

    async deleteFundRaiser(fundRaiserID) {
        return await fundRaisersRepository.deleteFundRaiser(fundRaiserID);
    }

}

module.exports = new fundRaisersService();
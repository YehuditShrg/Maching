const machingsRepository  = require('../repositories/machingsRepository');

class machingService {

    constructor() {}

    async getAllMachings() {
        return await machingsRepository.getAllMachings();
    }

    async createMaching(maching) {
        return await machingsRepository.createMaching(maching);
    }

    async updateMaching(maching) {
        return await machingsRepository.updateMaching(maching);
    }

    async deleteMaching(machingID) {
        return await machingsRepository.deleteMaching(machingID);
    }

}

module.exports = new machingService();
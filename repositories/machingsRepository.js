const { connect } = require('../models/dataBase');
const { Maching } = require('../models/maching');
const logger = console;//require('../logger/api.logger');

class machingRepository {
    
    constructor() {
        connect();
    }

    async getAllMachings() {
        const machings = await Maching.find({});
        console.log('Machings:::', machings);
        return machings;
    }

    async getByID(machingID) {
        const maching = await Maching.findOne({ ID: machingID });
        console.log('Machings:::', maching);
        return maching;
    }

    async createMaching(maching) {
        let data = {};
        try {
            data = await Maching.create(maching);
        } catch (err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async updateMaching(maching) {
        let data = {};
        try {
            data = await Maching.updateOne(maching);
        } catch (err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async deleteMaching(machingID) {
        let data = {};
        try {
            data = await Maching.deleteOne({ ID: machingID });
        } catch (err) {
            logger.error('Error::' + err);
        }
        return { status: `${data.deletedCount > 0 ? true : false}` };
    }

}

module.exports = new machingRepository();
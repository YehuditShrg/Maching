const { connect } = require('../models/db_connection');
const { FundRaisers } = require('../models/FundRaiser');
const logger = console;//require('../logger/api.logger');

class fundRaisersRepository {
    
    constructor() {
        // connect();
    }

    async getAllFundRaisers() {
        const fundRaisers = await FundRaisers.find();
        console.log('fund raisers:::', fundRaisers);
        return fundRaisers;
    }

    async getByID(fundRaiserID) {
        const fundRaiser = await FundRaisers.findOne({ ID: fundRaiserID });
        console.log('the fund raiser::::::', fundRaiser);
        return fundRaiser;
    }

    async createFundRaiser(fundRaiser) {
        let data = {};
        try {
            data = await FundRaisers.create(fundRaiser);
        } catch (err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async updateFundRaiser(fundRaiser) {
        let data = {};
        try {
            data = await FundRaisers.updateOne(fundRaiser);
        } catch (err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async deleteFundRaiser(fundRaiserID) {
        let data = {};
        try {
            data = await FundRaisers.deleteOne({ ID: fundRaiserID });
        } catch (err) {
            logger.error('Error::' + err);
        }
        return { status: `${data.deletedCount > 0 ? true : false}` };
    }

}

module.exports = new fundRaisersRepository();
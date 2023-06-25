const teamRepository  = require('../repositories/teamsRepository');

class teamService {

    constructor() {}

    async getAllTeams() {
        return await teamRepository.getAllTeams();
    }

    async getTeam(teamID) {
        return await teamRepository.getByID(teamID);
    }

    async createTeam(team) {
        return await teamRepository.createTeam(team);
    }

    async updateTeam(team) {
        return await teamRepository.updateTeam(team);
    }

    async deleteTeam(teamID) {
        return await teamRepository.deleteTeam(teamID);
    }

}

module.exports = new teamService();
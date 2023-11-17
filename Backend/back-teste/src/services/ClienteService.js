const { PrismaClient } = require('@prisma/client');

class ClienteService {
    constructor(modelName, prisma) {
        this.modelName = modelName;
        this.prisma = prisma || new PrismaClient();
    }

    async findAll() {
        return await this.prisma[this.modelName].findMany();
    }

    async findById(id) {
        return await this.prisma[this.modelName].findUnique({
            where: { id },
        });
    }

    async create(data) {
        return await this.prisma[this.modelName].create({
            data,
        });
    }

    async update(id, data) {
        return await this.prisma[this.modelName].update({
            where: { id },
            data,
        });
    }

    async delete(id) {
        return await this.prisma[this.modelName].delete({
            where: { id },
        });
    }
}

module.exports = ClienteService;

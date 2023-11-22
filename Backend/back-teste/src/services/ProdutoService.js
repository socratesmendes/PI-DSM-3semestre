const prisma = require('../config/prisma.js')

class ProdutoService{
    constructor(modelName, prismaInstance){
        // this.prisma = prismaInstance
        this.modelName = modelName
        // const prisma = new PrismaClient()
        // this.prisma = prisma
    }

    async findAll(req){
        return await prisma[this.modelName].findMany()

    }
}

module.exports = ProdutoService
const prisma = require('../config/prisma.js')

class ProdutoService{
    constructor(modelName, prismaInstance){
        // this.prisma = prismaInstance
        this.modelName = modelName
        // const prisma = new PrismaClient()
        // this.prisma = prisma
    }

    async findAll(req){
        console.log(this.modelName)
        const result = await prisma[this.modelName].findMany()

        return {...result}
    }
}

module.exports = ProdutoService
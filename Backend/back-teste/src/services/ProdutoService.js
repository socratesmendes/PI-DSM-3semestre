const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

class ProdutoService{
    constructor(modelName){
        this.modelName = modelName
        // const prisma = new PrismaClient()
        // this.prisma = prisma
    }

    async findAll(req){
        console.log(this.modelName)
        const result = await prisma[this.modelName].findMany(options)

        return {...result}
    }
}

module.exports = ProdutoService
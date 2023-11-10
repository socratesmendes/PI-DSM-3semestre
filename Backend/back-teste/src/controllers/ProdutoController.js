const prisma = require('../config/prisma.js')
const ProdutoService = require('../services/ProdutoService.js')

class ProdutoController {
    constructor(){
        this.service = new ProdutoService('Produto', prisma)
    }

    async findAll(req, res){
        try {
            const result = await this.service.findAll(req)
            console.log(this.modelName)
            res.status(200).send({...result})
        } catch (e) {
            res.status(400).send('Erro ao buscar produtos')
        }
    }
}


module.exports = ProdutoController
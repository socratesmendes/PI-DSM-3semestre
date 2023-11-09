const ProdutoService = require('../services/ProdutoService.js')

class ProdutoController {
    constructor(){
        this.service = new ProdutoService('Produto')
    }

    async findAll(req, res){
        try {
            const result = await this.service.findAll(req)
            res.status(200).send({...result})
        } catch (e) {
            res.status(400).send('Erro ao buscar produtos')
        }
    }
}


module.exports = ProdutoController
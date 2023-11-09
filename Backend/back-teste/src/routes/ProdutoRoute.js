const ProdutoController = require('../controllers/produtoController.js')

class ProdutoRoute {
  constructor(app){
    this.controller = new ProdutoController()
    this.app = app
    this.setupRoutes()
  }

  setupRoutes(){
    this.app.get('/produto', this.controller.findAll.bind(this.controller))
    // this.app.post('/produto')
    // this.app.put('/produto')
    // this.app.delete('/produto')
  }
}

module.exports = (app) => {
  return new ProdutoRoute(app)
}






// const { Router } = require( "express")
// const router = Router();
// const ProdutoController = require('../controllers/ProdutoController.js')

// /* GET all users. */
// router.get("/", async (req, res) => {
//    try {

//     const result = await produtoController.listarProdutos(req, res)
//     res.status(200).send({...result})
//    } catch (error) {
//     res.status(400).send("Erro ao buscar produto");
//    }
// });

// /* POST a user. */
// router.post("/", function (req, res) {
//   res.send("Created a product");
// });

// /* PATCH a user. */
// router.patch("/", function (req, res) {
//   res.send("Updated a product");
// });

// /* DELETE a user. */
// router.delete("/", function (req, res) {
//   res.send("Deleted a product");
// });

// module.exports = router;

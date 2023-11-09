import { Router } from "express";
const router = Router();
import ProdutoController from '../controllers/produtoController'
// const ProdutoController = require('../controllers/produtoController.js')


/* GET all users. */
router.get("/", async (req, res) => {
   try {
    const produtoController = new ProdutoController()

    const result = await produtoController.listarProdutos(req, res)
    res.status(200).send({...result})
   } catch (error) {
    res.status(400).send("Erro ao buscar produto");
   }
});

/* POST a user. */
router.post("/", function (req, res) {
  res.send("Created a product");
});

/* PATCH a user. */
router.patch("/", function (req, res) {
  res.send("Updated a product");
});

/* DELETE a user. */
router.delete("/", function (req, res) {
  res.send("Deleted a product");
});

export default router;

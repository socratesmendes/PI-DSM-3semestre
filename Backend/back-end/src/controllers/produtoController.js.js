// controllers/produtoController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Função para listar todos os produtos
const listarProdutos = async (req, res) => {
  try {
    const produtos = await prisma.produto.findMany();
    res.json(produtos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao listar produtos.' });
  }
};

// Função para criar um novo produto
const criarProduto = async (req, res) => {
  try {
    const { nome, preco, class, cor, espessura, tipo_id, categoria_id } = req.body;
    const novoProduto = await prisma.produto.create({
      data: {
        nome,
        preco,
        class,
        cor,
        espessura,
        tipo_id,
        categoria_id,
      },
    });
    res.status(201).json(novoProduto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Não foi possível criar o produto.' });
  }
};

// Função para atualizar um produto por ID
const atualizarProduto = async (req, res) => {
  const { id } = req.params;
  const { nome, preco, class, cor, espessura, tipo_id, categoria_id } = req.body;

  try {
    const produtoAtualizado = await prisma.produto.update({
      where: { id: parseInt(id) },
      data: {
        nome,
        preco,
        class,
        cor,
        espessura,
        tipo_id,
        categoria_id,
      },
    });
    res.json(produtoAtualizado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar o produto.' });
  }
};

// Função para excluir um produto por ID
const excluirProduto = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.produto.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: 'Produto excluído com sucesso.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao excluir o produto.' });
  }
};

module.exports = {
  listarProdutos,
  criarProduto,
  atualizarProduto,
  excluirProduto,
};

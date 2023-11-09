// controllers/vendaController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Função para listar todas as vendas
const listarVendas = async (req, res) => {
  try {
    const vendas = await prisma.venda.findMany();
    res.json(vendas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao listar vendas.' });
  }
};

// Função para criar uma nova venda
const criarVenda = async (req, res) => {
  try {
    const { itens, cliente_id, data_pedido } = req.body;
    const novaVenda = await prisma.venda.create({
      data: {
        itens,
        cliente_id,
        data_pedido,
      },
    });
    res.status(201).json(novaVenda);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Não foi possível criar a venda.' });
  }
};

// Função para atualizar uma venda por ID
const atualizarVenda = async (req, res) => {
  const { id } = req.params;
  const { itens, cliente_id, data_pedido } = req.body;

  try {
    const vendaAtualizada = await prisma.venda.update({
      where: { id: parseInt(id) },
      data: {
        itens,
        cliente_id,
        data_pedido,
      },
    });
    res.json(vendaAtualizada);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar a venda.' });
  }
};

// Função para excluir uma venda por ID
const excluirVenda = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.venda.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: 'Venda excluída com sucesso.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao excluir a venda.' });
  }
};

module.exports = {
  listarVendas,
  criarVenda,
  atualizarVenda,
  excluirVenda,
};

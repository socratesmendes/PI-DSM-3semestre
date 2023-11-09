// controllers/clienteController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Função para listar todos os clientes
const listarClientes = async (req, res) => {
  try {
    const clientes = await prisma.cliente.findMany();
    res.json(clientes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao listar clientes.' });
  }
};

// Função para criar um novo cliente
const criarCliente = async (req, res) => {
  try {
    const { nome, telefone, email, bairro, logradouro, cnpj } = req.body;
    const novoCliente = await prisma.cliente.create({
      data: {
        nome,
        telefone,
        email,
        bairro,
        logradouro,
        cnpj,
      },
    });
    res.status(201).json(novoCliente);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Não foi possível criar o cliente.' });
  }
};

// Função para atualizar um cliente por ID
const atualizarCliente = async (req, res) => {
  const { id } = req.params;
  const { nome, telefone, email, bairro, logradouro, cnpj } = req.body;

  try {
    const clienteAtualizado = await prisma.cliente.update({
      where: { id: parseInt(id) },
      data: {
        nome,
        telefone,
        email,
        bairro,
        logradouro,
        cnpj,
      },
    });
    res.json(clienteAtualizado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar o cliente.' });
  }
};

// Função para excluir um cliente por ID
const excluirCliente = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.cliente.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: 'Cliente excluído com sucesso.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao excluir o cliente.' });
  }
};

module.exports = {
  listarClientes,
  criarCliente,
  atualizarCliente,
  excluirCliente,
};

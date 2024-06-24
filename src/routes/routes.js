const express = require('express');
const { getCardapio, insereCardapio } = require('../controller/cardapioController');
const { deletaCardapio } = require('../controller/cardapioController');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const cardapio = await getCardapio();
        res.json(cardapio);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar o cardápio.' });
    }
});

router.post('/create', async (req, res) => {
    try {
        const { nome, preco } = req.body;
        await insereCardapio(nome, preco);
        console.log('Dados recebidos no corpo da requisição:', req.body);

        if(nome === undefined || preco === undefined) {
            res.status(400).json({ error: 'Nome não informado.' });
        }

        res.status(201).json({ message: 'Item cadastrado com sucesso.' });
    } catch (e) {
        res.status(500).json({ error: 'Erro ao cadastrar o item.', });
        console.log(e)
    }
})

router.delete('/delete', async (req, res) => {
    try {
        const { id } = req.body;
        await deletaCardapio(id);
    }
    catch (e){
        res.status(500).json({ error: 'Erro ao cadastrar o item.', });
        console.log(e)
    }
})

module.exports = router;
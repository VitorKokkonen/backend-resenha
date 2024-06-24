const connection = require('../db/connection');

const getCardapio = async () => {
    try {
        const [query] = await connection.execute('SELECT * FROM cardapio')
        return query
    }
    catch (err) {
        console.log(err)
        throw new Error(err)
    }
}

const insereCardapio = async (nome, preco) => {
    try {
        const [query] = await connection.execute('INSERT INTO cardapio (nome, preco) VALUES (?,?)', [nome, preco])
        return query
    }
    catch (err) {
        console.log(err)
        throw new Error(err)
    }
}

const deletaCardapio = async (id) => {
    try {
        const [query] = await connection.execute('DELETE FROM cardapio WHERE id =?', [id])
        return query
    }
    catch (err) {
        console.log(err)
        throw new Error(err)
    }
}

module.exports = {
    getCardapio,
    insereCardapio,
    deletaCardapio,
}
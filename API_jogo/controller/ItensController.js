const { item } = require('../models')
require('dotenv').config()

module.exports = class ItensController {

    static async create(req, res) {
        try {
            const result = await item.create({
                itemNome: req.body.itemNome,
                itemDescricao: req.body.itemDescricao,
            })
            res.status(200).json({
                data: "Item criado com sucesso"
            })
        } catch (e) {
            res.status(500).json({
                error: e.message,
            })
        }
    }

    static async showAll(req, res) {
        try {
            const itens = await item.findAll();
            res.status(200).json({
                data: itens,
            })
        } catch (e) {
            res.status(500).json({
                error: e.message,
            })
        }
    }

    static async show(req, res) {
        try {
            const itens = await item.findByPk(req.params.id);
            res.status(200).json({
                data: itens,
            });
        } catch (e) {
            res.status(500).json({
                error: e.message,
            })
        }
    }

    static async update(req, res) {
        try {
            const itens = await item.findByPk(req.params.id);
            const result = await itens.update({
                itemNome: req.body.itemNome,
                itemDescricao: req.body.itemDescricao,
            })
            res.status(200).json({
                data: "Atualizado com sucesso"
            })
        } catch (e) {
            res.status(500).json({
                error: e.message,
            })
        }
    }

    static async delete(req, res) {
        try {
            const itens = await item.findByPk(req.params.id);
            await itens.destroy()
            res.status(200).json({
                data: "excluido com sucesso"
            })
        } catch (e) {
            res.status(500).json({
                error: e.message,
            });
        }
    }
}
const { usuario } = require('../models')
require('dotenv').config()

module.exports = class UsersController {

    static async create(req, res) {
        try {
            const result = await usuario.create({
                usuarioNome: req.body.usuarioNome,
                usuarioClasse: req.body.usuarioClasse,
            })
            res.status(200).json({
                data: "usuário criado com sucesso"
            })
        } catch (e) {
            res.status(500).json({
                error: e.message,
            })
        }
    }

    static async showAll(req, res) {
        try {
            const users = await usuario.findAll();
            res.status(200).json({
                data: users,
            })
        } catch (e) {
            res.status(500).json({
                error: e.message,
            })
        }
    }

    static async show(req, res) {
        try {
            const user = await usuario.findByPk(req.params.id);
            res.status(200).json({
                data: user,
            });
        } catch (e) {
            res.status(500).json({
                error: e.message,
            })
        }
    }

    static async update(req, res) {
        try {
            const user = await usuario.findByPk(req.params.id);
            const result = await user.update({
                usuarioNome: req.body.usuarioNome,
                usuarioClasse: req.body.usuarioClasse,
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
            const user = await usuario.findByPk(req.params.id);
            await user.destroy()
            res.status(200).json({
                data: "excluido com sucesso"
            })
        } catch (e) {
            res.status(500).json({
                error: e.message,
            });
        }
    }
};
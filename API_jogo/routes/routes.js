const express = require('express')
const router = express.Router()
const path = require('path')
const ItensController = require('../controller/ItensController')
const UsersController = require('../controller/UserController')

router.get('/usuario', UsersController.showAll)
router.get('/usuario/:id', UsersController.show)
router.post('/usuario', UsersController.create)
router.put('/usuario/:id', UsersController.update)
router.delete('/usuario/:id', UsersController.delete)

router.get('/itens', ItensController.showAll)
router.get('/itens/:id', ItensController.show)
router.post('/itens', ItensController.create)
router.put('/itens/:id', ItensController.update)
router.delete('/itens/:id', ItensController.delete)


router.use (function (req, res, next){ 
    
    res.status(404).sendFile(path.resolve('./public/error.html'))
})

module.exports = router
const { Type } =require('../models/models')
const ApiError = require('../error/ApiError')

class  TypeController {
    async create (req, res) {
        const {name} = req.body
        const types = await Type.create({name})
        return res.json(types)
    }

    async getAll (req, res) {
        const types = await Type.findAll()
        return res.json(types)
    }

    async delete (req, res) {
        
    }
}

module.exports = new TypeController()
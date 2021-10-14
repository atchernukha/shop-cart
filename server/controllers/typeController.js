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
        const {id} = req.body
        try{
            await Type.destroy({where:{id: id}})
            res.status(200).json({message:"Deleted successfully"});
           }
           catch(e){
            res.status(404).json({message:"type not found"})
           }
    }
}

module.exports = new TypeController()
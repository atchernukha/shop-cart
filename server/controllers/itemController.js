const uuid = require('uuid')
const path = require('path')
const { Item, ItemInfo } = require('../models/models')
const ApiError =require('../error/ApiError')

class  ItemController {
    async create (req, res, next) {
       try{
            const {name, price, brandId, typeId, info} = req.body
             const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const item =await Item.create({name, price, brandId, typeId, img: fileName})

            if (info) { // test!!!!
                info = JSON.parse(info)
                info.forEach(i =>
                    ItemInfo.create({
                        title: i.title,
                        description: i.description,
                        itemId: item.id
                    })
                )
            }
            console.log(item)
            return res.json(item)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll (req, res) {
        const { typeId, brandId, lim, pg} = req.query
        console.log(req.query)
        let page =pg || 1
        let limit = lim || 9
        let offset = page*limit -limit
        let items;
        if (!brandId && !typeId) {
            items = await Item.findAndCountAll({limit, offset})
        }
        if (brandId && !typeId )  {
            items = await Item.findAndCountAll({where:{brandId}, limit, offset})
        }
        if (!brandId && typeId) {
            items = await Item.findAndCountAll({where:{typeId}, limit, offset})                
        }
        if (brandId && typeId) {
            items = await Item.findAndCountAll({where:{brandId, typeId}, limit, offset})            
        }
        return res.json(items)
    }
    async getOne (req, res) {
        const {id} = req.params

        const item = await Item.findOne(
            {
                where: {id},
                include: [{model: ItemInfo, as: 'info'}]
            }
        )
        return res.json(item)
        // console.log(item)        
    }

    async delete (req, res) {
        const {id} = req.body
        try{
            await Item.destroy({where:{id: id}})
            res.status(200).json({message:"Deleted successfully"});
           }
           catch(e){
            res.status(404).json({message:"item not found"})
            // console.log(e)
             // handle error better
           }
    }
}

module.exports = new ItemController()
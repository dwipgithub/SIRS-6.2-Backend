import { golonganObatRLTigaTitikDelapanBelas } from '../models/RLTigaTitikDelapanBelasGolonganObatModel.js'
import { databaseSIRS } from '../config/Database.js'

export const getGolonganObatRLTigaTitikDelapanBelas = (req, res) => {
    golonganObatRLTigaTitikDelapanBelas.findAll({
        attributes: ['id','no','nama'],
        // where: {
        //     rl_id: 12
        // }
    })
    .then((results) => {
        res.status(200).send({
            status: true,
            message: "data found",
            data: results
        })
    })
    .catch((err) => {
        res.status(422).send({
            status: false,
            message: err
        })
        return
    })
}
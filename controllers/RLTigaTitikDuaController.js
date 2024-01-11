import { databaseSIRS } from '../config/Database.js'
import { get, show, rlTigaTitikDuaHeader, rlTigaTitikDuaDetail } from '../models/RLTigaTitikDuaModel.js'
import Joi from 'joi'
import joiDate from "@joi/date"

export const getRLTigaTitikDua = (req, res) => {
    const joi = Joi.extend(joiDate) 

    const schema = joi.object({
        rsId: joi.string().required(),
        periode: joi.date().format("YYYY-M").required(),
        page: joi.number(),
        limit: joi.number()
    })

    const { error, value } =  schema.validate(req.query)

    if (error) {
        res.status(400).send({
            status: false,
            message: error.details[0].message
        })
        return
    }

    get(req, (err, results) => {
        const message = results.length ? 'data found' : 'data not found'
        res.status(200).send({
            status: true,
            message: message,
            data: results
        })
    })
}

export const showRLTigaTitikDua = (req, res) => {
    show(req.params.id, (err, results) => {
        if (err) {
            res.status(422).send({
                status: false,
                message: err
            })
            return
        }

        const message = results.length ? 'data found' : 'data not found'
        const data = results.length ? results[0] : null

        res.status(200).send({
            status: true,
            message: message,
            data: data
        })
    })
}

export const insertRLTigaTitikDua =  async (req, res) => {
    const schema = Joi.object({
        periodeBulan: Joi.number().greater(0).less(13).required(),
        periodeTahun: Joi.number().greater(2022).required(),
        data: Joi.array()
            .items(
                Joi.object().keys({
                    rlTigaTitikDuaJenisPelayananId: Joi.number().required(),
                    pasienAwalBulan: Joi.number().required(),
                    pasienMasuk: Joi.number().required(),
                    pasienKeluarHidup: Joi.number().required(),
                    pasienKeluarMatiKurangDari48Jam: Joi.number().required(),
                    pasienKeluarMatiLebihDariAtauSamaDengan48Jam: Joi.number().required(),
                    jumlahLamaDirawat: Joi.number().required(),
                    rincianHariPerawatanKelasVVIP: Joi.number().required(),
                    rincianHariPerawatanKelasVIP: Joi.number().required(),
                    rincianHariPerawatanKelas1: Joi.number().required(),
                    rincianHariPerawatanKelas2: Joi.number().required(),
                    rincianHariPerawatanKelas3: Joi.number().required(),
                    rincianHariPerawatanKelasKhusus: Joi.number().required(),
                    jumlahAlokasiTempatTidurAwalBulan: Joi.number().required()
                }).required()
            ).required()
    })

    const { error, value } =  schema.validate(req.body)
    if (error) {
        res.status(404).send({
            status: false,
            message: error.details[0].message
        })
        return
    }

    const periodeBulan = String(req.body.periodeBulan)
    const periodeTahun = String(req.body.periodeTahun)
    const periode = periodeTahun.concat("-").concat(periodeBulan).concat("-").concat("1")

    const transaction = await databaseSIRS.transaction()
    try {
        const resultInsertHeader = await rlTigaTitikDuaHeader.create({
            rs_id: req.user.satKerId,
            periode: periode,
            user_id: req.user.id
        }, { 
            transaction: transaction
        })

        const dataDetail = req.body.data.map((value, index) => {
            return {
                rs_id: req.user.satKerId,
                periode: periode,
                rl_tiga_titik_dua_id: resultInsertHeader.id,
                rl_tiga_titik_dua_jenis_pelayanan_id: value.rlTigaTitikDuaJenisPelayananId,
                pasien_awal_bulan: value.pasienAwalBulan,
                pasien_masuk: value.pasienMasuk,
                pasien_keluar_hidup: value.pasienKeluarHidup,
                pasien_keluar_mati_kurang_dari_48_jam: value.pasienKeluarMatiKurangDari48Jam,
                pasien_keluar_mati_lebih_dari_atau_sama_dengan_48_jam: value.pasienKeluarMatiLebihDariAtauSamaDengan48Jam,
                jumlah_lama_dirawat: value.jumlahLamaDirawat,
                rincian_hari_perawatan_kelas_VVIP: value.rincianHariPerawatanKelasVVIP,
                rincian_hari_perawatan_kelas_VIP: value.rincianHariPerawatanKelasVIP,
                rincian_hari_perawatan_kelas_1: value.rincianHariPerawatanKelas1,
                rincian_hari_perawatan_kelas_2: value.rincianHariPerawatanKelas2,
                rincian_hari_perawatan_kelas_3: value.rincianHariPerawatanKelas3,
                rincian_hari_perawatan_kelas_khusus: value.rincianHariPerawatanKelasKhusus,
                jumlah_alokasi_tempat_tidur_awal_bulan: value.jumlahAlokasiTempatTidurAwalBulan,
                user_id: req.user.id
            }
        })

        await rlTigaTitikDuaDetail.bulkCreate(dataDetail, { 
            transaction: transaction
        })
        
        await transaction.commit()
        res.status(201).send({
            status: true,
            message: "data created",
            data: {
                id: resultInsertHeader.id
            }
        })
    } catch (error) {
        console.log(error)
        await transaction.rollback()
        if(error.name === 'SequelizeUniqueConstraintError'){
            res.status(400).send({
                status: false,
                message: "Duplicate Entry"
            })
        } else {
            res.status(400).send({
                status: false,
                message: error
            })
        }
    }
}

export const updateRLTigaTitikDua = async(req,res)=>{
    try{
        const update = await rlTigaTitikDuaDetail.update(
            {
                pasien_awal_bulan: req.body.pasienAwalBulan,
                pasien_masuk: req.body.pasienMasuk,
                pasien_keluar_hidup: req.body.pasienKeluarHidup,
                pasien_keluar_mati_kurang_dari_48_jam: req.body.pasienKeluarMatiKurangDari48Jam,
                pasien_keluar_mati_lebih_dari_atau_sama_dengan_48_jam: req.body.pasienKeluarMatiLebihDariAtauSamaDengan48Jam,
                jumlah_lama_dirawat: req.body.jumlahLamaDirawat,
                rincian_hari_perawatan_kelas_VVIP: req.body.rincianHariPerawatanKelasVVIP,
                rincian_hari_perawatan_kelas_VIP: req.body.rincianHariPerawatanKelasVIP,
                rincian_hari_perawatan_kelas_1: req.body.rincianHariPerawatanKelas1,
                rincian_hari_perawatan_kelas_2: req.body.rincianHariPerawatanKelas2,
                rincian_hari_perawatan_kelas_3: req.body.rincianHariPerawatanKelas3,
                rincian_hari_perawatan_kelas_khusus: req.body.rincianHariPerawatanKelasKhusus,
                jumlah_alokasi_tempat_tidur_awal_bulan: req.body.jumlahAlokasiTempatTidurAwalBulan,
                user_id: req.user.id
            },
            {
                where:{
                    id: req.params.id,
                    rs_id: req.user.satKerId
            }
        });
        res.status(200).json({
            status: true,
            message: update
        });
    }catch(error){
        console.log(error.message);
    }
}

export const deleteRLTigaTitikDua = async(req, res) => {
    try {
        const count = await rlTigaTitikDuaDetail.destroy({
            where: {
                id: req.params.id,
                rs_id: req.user.satKerId
            }
        })
        if (count == 0) {
            res.status(404).send({
                status: true,
                message: "Data Not Found",
                data: {
                    'deleted_rows': count
                }
            })
        } else {
            res.status(201).send({
                status: true,
                message: "data deleted successfully",
                data: {
                    'deleted_rows': count
                }
            })
        }
    } catch (error) {
        res.status(404).send({
            status: false,
            message: error
        })
    }
}
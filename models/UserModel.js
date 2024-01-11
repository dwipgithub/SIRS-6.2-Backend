import { DataTypes, QueryTypes } from "sequelize"
import { databaseSIRS } from "../config/Database.js"

export const users = databaseSIRS.define('users', {
    nama: {
        type: DataTypes.STRING
    },
    jenis_user_id: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    refresh_token: {
        type: DataTypes.TEXT
    },
    satker_id: {
        type: DataTypes.STRING
    },
    jenis_user_id: {
        type: DataTypes.STRING
    },
    created_at: {
        type: DataTypes.DATE
    },
    modified_at: {
        type: DataTypes.DATE
    }
}, {
    freezeTableName: true
})

export const show = (req, callback) => {
    const sql = 'SELECT users.id, ' +
        'users.nama, ' +
        'users.email, ' +
        'users.satker_id as satKerId, ' +
        'users.jenis_user_id as jenisUserId, ' +
        'users.kriteria_user_id as kriteriaUserId ' +
        'FROM ' +
        'users ' +
        'WHERE users.id = ?'

    const sqlFilterValue = [req.params.id]
    databaseSIRS.query(sql, {
        type: QueryTypes.SELECT,
        replacements: sqlFilterValue
    }).then(
        (res) => {
            callback(null, res)
        }
    )
        .catch(
            (error) => {
                callback(error, null)
            }
        )
}

export const insert = (data, callback) => {
    const sqlInsert = 'INSERT INTO users (nama,email,password,satker_id,jenis_user_id,kriteria_user_id) VALUES ( ? )'
    databaseSIRS.query(sqlInsert, {
        type: QueryTypes.INSERT,
        replacements: [data]
    })
        .then((res) => {
            callback(null, res)
        })
        .catch((error) => {
            callback(error, null)
        })
}
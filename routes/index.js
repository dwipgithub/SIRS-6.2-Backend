import express from 'express'

// Token Generate
import { getUser, showUser, insertUser, login, logout, changePassword } from '../controllers/UsersController.js'
import { verifyToken } from '../middleware/VerifyToken.js'
import { refreshToken } from '../controllers/RefreshTokenController.js'

//Punya Bibo Ganteng

import { getDataJenisPengunjung} from '../controllers/JenisPengunjungRLTigaTitikEmpatController.js'
import { getDataJenisKegiatanRLTigaTitikLima} from '../controllers/JenisKegiatanRLTigaTitikLimaController.js'
import { getDataJenisKegiatanRLTigaTitikEnam} from '../controllers/JenisKegiatanRLTigaTitikEnamController.js'
import { getDataJenisKegiatanRLTigaTitikTujuh} from '../controllers/JenisKegiatanRLTigaTitikTujuhController.js'

// RL 3.4
import { getDataRLTigaTitikEmpat, getRLTigaTitikEmpatById, insertDataRLTigaTitikEmpat, 
  updateDataRLTigaTitikEmpat, deleteDataRLTigaTitikEmpat } from '../controllers/RLTigaTitikEmpatController.js'

// RL 3.5
import { getDataRLTigaTitikLima, getRLTigaTitikLimaById, insertDataRLTigaTitikLima, 
  updateDataRLTigaTitikLima, deleteDataRLTigaTitikLima } from '../controllers/RLTigaTitikLimaController.js'

// RL 3.6
import { getDataRLTigaTitikEnam, getRLTigaTitikEnamById, insertDataRLTigaTitikEnam, 
  updateDataRLTigaTitikEnam, deleteDataRLTigaTitikEnam } from '../controllers/RLTigaTitikEnamController.js'

// RL 3.7
import { getDataRLTigaTitikTujuh, getRLTigaTitikTujuhById, insertDataRLTigaTitikTujuh, 
  updateDataRLTigaTitikTujuh, deleteDataRLTigaTitikTujuh } from '../controllers/RLTigaTitikTujuhController.js'
  
//Punya Bibo Ganteng


// Rumah Sakit
import { showRumahSakit, getRumahSakit } from '../controllers/RumahSakitController.js'

// Jenis Pelayanan
import { getRLTigaTitikDuaJenisPelayanan } from '../controllers/RLTigaTitikDuaJenisPelayananController.js'

// Jenis Kegiatan 3.11
import { getDataJenisKegiatanRLTigaTitikSebelas } from "../controllers/JenisKegiatanRLTigaTitikSebelasController.js";

// Jenis Spesialisasi 3.12
import { getDataSpesialisasiRLTigaTitikDuaBelas } from "../controllers/RLTigaTitikDuaBelasSpesialisasiController.js";

//ICD
import { getIcdRanap, getIcdRanapbyId, getIcdRanapbySearch } from '../controllers/ICDController.js'

//Jenis Pemeriksaan RL 3.8
import { getDataPemeriksaanRlTigaTitikDelapan } from '../controllers/RLTigaTitikDelapanPemeriksaanController.js'

//Jenis Kegiatan RL 3.14
import { getDataJenisKegiatanRLTigaTitikEmpatBelas } from '../controllers/RLTigaTitikEmpatBelasJenisKegiatanController.js'

//Golongan Obat RL 3.17
import { getGolonganObatRLTigaTitikTujuhBelas } from '../controllers/RLTigaTitikTujuhBelasGolonganObatController.js'

//Golongan Obat RL 3.18
import { getGolonganObatRLTigaTitikDelapanBelas } from '../controllers/RLTigaTitikDelapanBelasGolonganObatController.js'

// MASTER 3.13
import {
    getDataJenisTindakanRLTigaTitikTigaBelas,
    getDataJenisTindakanHeaderRLTigaTitikTigaBelas,
} from "../controllers/RLTigaTitikTigaBelasJenisTindakanController.js";

// MASTER 5.1
import {
  getDataIcdRLLimaTitikSatu,
  getIcdRajalbySearch,
  getIcdRajalbyId,
} from "../controllers/IcdRLLimaTitikSatuController.js";

// Provinsi
import { getProvinsi, showProvinsi } from '../controllers/ProvinsiController.js'

// KabKota
import { getKabKota, showKabKota } from '../controllers/KabKotaController.js'

// RL 3.2
import { getRLTigaTitikDua, showRLTigaTitikDua, insertRLTigaTitikDua, deleteRLTigaTitikDua, updateRLTigaTitikDua } from '../controllers/RLTigaTitikDuaController.js'

//Jenis Kegiatan RL 3.9
import { getDataJenisKegiatanTigaTitikSembilan } from '../controllers/RLTigaTitikSembilanJenisKegiatanController.js'

// RL 3.9 baru
import { getRLTigaTitikSembilan, 
    showRLTigaTitikSembilan, 
    insertRLTigaTitikSembilan, 
    deleteRLTigaTitikSembilan, 
    updateRLTigaTitikSembilan  } from '../controllers/RLTigaTitikSembilanController.js'

// RL 3.11
import {
    insertDataRLTigaTitikSebelas,
    getDataRLTigaTitikSebelas,
    getDataRLTigaTitikSebelasDetail,
    getRLTigaTitikSebelas,
    showRLTigaTitikSebelas,
    getRLTigaTitikSebelasById,
    updateDataRLTigaTitikSebelas,
    deleteDataRLTigaTitikSebelas,
} from "../controllers/RLTigaTitikSebelasController.js";

// RL 3.12
import {
    insertDataRLTigaTitikDuaBelas,
    getDataRLTigaTitikDuaBelas,
    getRLTigaTitikDuaBelasById,
    updateDataRLTigaTitikDuaBelas,
    deleteDataRLTigaTitikDuaBelas,
    getRLTigaTitikDuaBelas,
    showRLTigaTitikDuaBelas,
} from "../controllers/RLTigaTitikDuaBelasController.js";

// RL 3.17 baru
import { getRLTigaTitikTujuhBelas, 
  showRLTigaTitikTujuhBelas, 
  insertDataRLTigaTitikTujuhBelas, 
  deleteRLTigaTitikTujuhBelas, 
  updateRLTigaTitikTujuhBelas } from '../controllers/RLTigaTitikTujuhBelasController.js'

// RL 3.18 baru
import { getRLTigaTitikDelapanBelas, 
  showRLTigaTitikDelapanBelas, 
  insertDataRLTigaTitikDelapanBelas, 
  deleteRLTigaTitikDelapanBelas, 
  updateRLTigaTitikDelapanBelas } from '../controllers/RLTigaTitikDelapanBelasController.js'
  
// RL 3.8
import { deleteDataRLTigaTitikDelapan, getDataRLTigaTitikDelapan, getDataRLTigaTitikDelapanById,
  getDataRLTigaTitikDelapanDetailPemeriksaan, insertDataRLTigaTitikDelapan, updateDataRLTigaTitikDelapan } from "../controllers/RLTigaTitikDelapanController.js"

// RL 4.1
import {
  deleteDataRLEmpatTitikSatu,
  getDataRLEmpatTitikSatu,
  getDataRLEmpatTitikSatuById,
  getRLEmpatTitikDua,
  getRLEmpatTitikTiga,
  insertDataRLEmpatTitikSatu,
  updateDataRLEmpatTitikSatu,
} from "../controllers/RLEmpatTitikSatuController.js"

// RL 3.13 NEW
import {
  insertDataRLTigaTitikTigaBelas,
  getDataRLTigaTitikTigaBelas,
  getRLTigaTitikTigaBelasById,
  getRLTigaTitikTigaBelas,
  showRLTigaTitikTigaBelas,
  updateDataRLTigaTitikTigaBelas,
  deleteDataRLTigaTitikTigaBelas,
} from "../controllers/RLTigaTitikTigaBelasController.js";

// RL 5.1
import {
  deleteDataRLLimaTitikSatu,
  getDataRLLimaTitikSatu,
  getDataRLLimaTitikSatuById,
  insertdataRLLimaTitikSatu,
  updateDataRLLimaTitikSatu,
} from "../controllers/RLLimaTitikSatuController.js";
  
// RL 3.14
import { deleteDataRLTigaTitikEmpatBelas, getDataRLTigaTitikEmpatBelasById, getDataRLTigaTitikEmpatBelasDetailKegiatan, insertDataRLTigaTitikEmpatBelas, updateDataRLTigaTitikEmpatBelas } from '../controllers/RLTigaTitikEmpatBelasController.js'

// RL 5.2
import { getRLLimaTitikDua } from '../controllers/RLLimaTitikDuaController.js'

// RL 5.3
import { getRLLimatitikTiga } from '../controllers/RLLimaTitikTigaController.js'

const router = express.Router()

// Token
router.post('/apisirs6v2/login', login)
router.delete('/apisirs6v2/logout', logout)
router.get('/apisirs6v2/token', refreshToken)

// User
router.get('/apisirs/users', verifyToken, getUser)
router.get('/apisirs/users/:id', verifyToken, showUser)
router.post('/apisirs/users', verifyToken, insertUser)
router.patch('/apisirs/users/:id/admin', verifyToken, changePassword)

// Rumah Sakit
router.get('/apisirs6v2/rumahsakit/:id', verifyToken, showRumahSakit)
router.get('/apisirs6v2/rumahsakit', verifyToken, getRumahSakit)

// Provinsi
router.get('/apisirs6v2/provinsi', verifyToken, getProvinsi)
router.get('/apisirs6v2/provinsi/:id', verifyToken, showProvinsi)

// KabKota
router.get('/apisirs6v2/kabkota', verifyToken, getKabKota)
router.get('/apisirs6v2/kabkota/:id', verifyToken, showKabKota)

// Jenis Pelayanan RL 3.2
router.get('/apisirs6v2/rltigatitikduajenispelayanan', verifyToken, getRLTigaTitikDuaJenisPelayanan)
    
//Jenis Pemeriksaan RL3.8
router.get('/apisirs6v2/rltigatitikdelapanpemeriksaan', verifyToken, getDataPemeriksaanRlTigaTitikDelapan)

// Jenis Kegiatan RL 3.9
router.get('/apisirs6v2/rltigatitiksembilanjeniskegiatan', verifyToken, getDataJenisKegiatanTigaTitikSembilan)

// Jenis Kegiatan RL 3.11
router.get("/apisirs6v2/jeniskegiatanrltigatitiksebelas", verifyToken, getDataJenisKegiatanRLTigaTitikSebelas)

// JENIS TINDAKAN RL 3.13
router.get(
    "/apisirs6v2/jenistindakanrltigatitiktigabelas",
    verifyToken,
    getDataJenisTindakanRLTigaTitikTigaBelas
  );

// JENIS TINDAKAN HEADER RL 3.13
router.get(
    "/apisirs6v2/jenistindakanheaderrltigatitiktigabelas",
    verifyToken,
    getDataJenisTindakanHeaderRLTigaTitikTigaBelas
  );

// Golongan Obat 3.17
router.get('/apisirs6v2/rltigatitiktujuhbelasgolonganobat', verifyToken, getGolonganObatRLTigaTitikTujuhBelas)

// Golongan Obat 3.18
router.get('/apisirs6v2/rltigatitikdelapanbelasgolonganobat', verifyToken, getGolonganObatRLTigaTitikDelapanBelas)

// Spesialisasi RL 3.12
router.get("/apisirs6v2/spesialisasirltigatitikduabelas", verifyToken, getDataSpesialisasiRLTigaTitikDuaBelas)

// jenis kegiatan RL 314
router.get("/apisirs6v2/rltigatitikempatbelasjeniskegiatan", verifyToken, getDataJenisKegiatanRLTigaTitikEmpatBelas)

// ICD RL 4
router.get("/apisirs6v2/icd/rawat_inap", verifyToken, getIcdRanap)
router.get("/apisirs6v2/icd/rawat_inap/find", verifyToken,getIcdRanapbySearch)
router.get("/apisirs6v2/icd/rawat_inap/id",verifyToken,getIcdRanapbyId)

// RL 3.2
router.post('/apisirs6v2/rltigatitikdua', verifyToken, insertRLTigaTitikDua)
router.get('/apisirs6v2/rltigatitikdua', verifyToken, getRLTigaTitikDua)
router.delete('/apisirs6v2/rltigatitikdua/:id', verifyToken, deleteRLTigaTitikDua)
router.get('/apisirs6v2/rltigatitikdua/:id', verifyToken, showRLTigaTitikDua)
router.patch('/apisirs6v2/rltigatitikdua/:id', verifyToken, updateRLTigaTitikDua)

// RL 3.8
router.post("/apisirs6v2/rltigatitikdelapan", verifyToken, insertDataRLTigaTitikDelapan)
router.get("/apisirs6v2/rltigatitikdelapan", verifyToken,getDataRLTigaTitikDelapanDetailPemeriksaan)
router.get("/apisirs6v2/rltigatitikdelapan/:id", verifyToken, getDataRLTigaTitikDelapanById)
router.delete("/apisirs6v2/rltigatitikdelapan/:id", verifyToken, deleteDataRLTigaTitikDelapan)
router.patch("/apisirs6v2/rltigatitikdelapan/:id", verifyToken, updateDataRLTigaTitikDelapan)

// RL 3.9 Baru
router.post('/apisirs6v2/rltigatitiksembilan', verifyToken, insertRLTigaTitikSembilan)
router.get('/apisirs6v2/rltigatitiksembilan', verifyToken, getRLTigaTitikSembilan)
router.delete('/apisirs6v2/rltigatitiksembilan/:id', verifyToken, deleteRLTigaTitikSembilan)
router.get('/apisirs6v2/rltigatitiksembilan/:id', verifyToken, showRLTigaTitikSembilan)
router.patch('/apisirs6v2/rltigatitiksembilan/:id', verifyToken, updateRLTigaTitikSembilan)

// RL 3.11
router.post("/apisirs6v2/rltigatitiksebelas", verifyToken,insertDataRLTigaTitikSebelas)
router.get("/apisirs6v2/rltigatitiksebelas", verifyToken, getRLTigaTitikSebelas)
router.get("/apisirs6v2/rltigatitiksebelas/:id", verifyToken,showRLTigaTitikSebelas)
router.patch("/apisirs6v2/rltigatitiksebelas/:id", verifyToken, updateDataRLTigaTitikSebelas)
router.delete("/apisirs6v2/rltigatitiksebelas/:id", verifyToken, deleteDataRLTigaTitikSebelas)

// RL 3.12
router.post("/apisirs6v2/rltigatitikduabelas",verifyToken, insertDataRLTigaTitikDuaBelas)
router.get("/apisirs6v2/rltigatitikduabelas",verifyToken, getRLTigaTitikDuaBelas)
router.get("/apisirs6v2/rltigatitikduabelas/:id",verifyToken, showRLTigaTitikDuaBelas)
router.patch("/apisirs6v2/rltigatitikduabelas/:id",verifyToken, updateDataRLTigaTitikDuaBelas)
router.delete("/apisirs6v2/rltigatitikduabelas/:id", verifyToken, deleteDataRLTigaTitikDuaBelas)

// RL 3.13 NEW
router.post(
  "/apisirs6v2/rltigatitiktigabelas",
  verifyToken,
  insertDataRLTigaTitikTigaBelas
);
  
router.get(
  "/apisirs6v2/rltigatitiktigabelas/",
  verifyToken,
  getRLTigaTitikTigaBelas
);

router.get(
  "/apisirs6v2/rltigatitiktigabelas/:id",
  verifyToken,
  showRLTigaTitikTigaBelas
);

router.patch(
  "/apisirs6v2/rltigatitiktigabelas/:id",
  verifyToken,
  updateDataRLTigaTitikTigaBelas
);

router.delete(
  "/apisirs6v2/rltigatitiktigabelas/:id",
  verifyToken,
  deleteDataRLTigaTitikTigaBelas
);

// RL 3.14
router.post("/apisirs6v2/rltigatitikempatbelas",verifyToken,insertDataRLTigaTitikEmpatBelas)
router.get("/apisirs6v2/rltigatitikempatbelas",verifyToken,getDataRLTigaTitikEmpatBelasDetailKegiatan)
router.get("/apisirs6v2/rltigatitikempatbelas/:id",verifyToken,getDataRLTigaTitikEmpatBelasById)
router.delete("/apisirs6v2/rltigatitikempatbelas/:id",verifyToken,deleteDataRLTigaTitikEmpatBelas)
router.patch("/apisirs6v2/rltigatitikempatbelas/:id",verifyToken,updateDataRLTigaTitikEmpatBelas)

// RL 3.17
router.post('/apisirs6v2/rltigatitiktujuhbelas', verifyToken, insertDataRLTigaTitikTujuhBelas)
router.get('/apisirs6v2/rltigatitiktujuhbelas', verifyToken, getRLTigaTitikTujuhBelas)
router.delete('/apisirs6v2/rltigatitiktujuhbelas/:id', verifyToken, deleteRLTigaTitikTujuhBelas)
router.get('/apisirs6v2/rltigatitiktujuhbelas/:id', verifyToken, showRLTigaTitikTujuhBelas)
router.patch('/apisirs6v2/rltigatitiktujuhbelas/:id', verifyToken, updateRLTigaTitikTujuhBelas)

// RL 3.18
router.post('/apisirs6v2/rltigatitikdelapanbelas', verifyToken, insertDataRLTigaTitikDelapanBelas)
router.get('/apisirs6v2/rltigatitikdelapanbelas', verifyToken, getRLTigaTitikDelapanBelas)
router.delete('/apisirs6v2/rltigatitikdelapanbelas/:id', verifyToken, deleteRLTigaTitikDelapanBelas)
router.get('/apisirs6v2/rltigatitikdelapanbelas/:id', verifyToken, showRLTigaTitikDelapanBelas)
router.patch('/apisirs6v2/rltigatitikdelapanbelas/:id', verifyToken, updateRLTigaTitikDelapanBelas)

// RL 4.1
router.post("/apisirs6v2/rlempattitiksatu", verifyToken, insertDataRLEmpatTitikSatu);
router.get("/apisirs6v2/rlempattitiksatu", verifyToken, getDataRLEmpatTitikSatu);
router.delete("/apisirs6v2/rlempattitiksatu/:id", verifyToken, deleteDataRLEmpatTitikSatu);
router.get("/apisirs6v2/rlempattitiksatu/:id", verifyToken, getDataRLEmpatTitikSatuById);
router.patch("/apisirs6v2/rlempattitiksatu/:id", verifyToken, updateDataRLEmpatTitikSatu);

// RL 4.2
router.get("/apisirs6v2/rlempattitikdua", verifyToken, getRLEmpatTitikDua)

// RL 4.3
router.get("/apisirs6v2/rlempattitiktiga", verifyToken, getRLEmpatTitikTiga)

// ICD RL 5
// router.get("/apisirs6v2/icd/rawat_jalan", verifyToken, getIcdRajal)
router.get("/apisirs6v2/icd/rawat_jalan/find", verifyToken,getIcdRajalbySearch)
router.get("/apisirs6v2/icd/rawat_jalan/id",verifyToken,getIcdRajalbyId)

// RL 5.1
router.post(
  "/apisirs6v2/rllimatitiksatu",
  verifyToken,
  insertdataRLLimaTitikSatu
);
  
router.get("/apisirs6v2/rllimatitiksatu", verifyToken, getDataRLLimaTitikSatu);

router.get(
  "/apisirs6v2/rllimatitiksatu/:id",
  verifyToken,
  getDataRLLimaTitikSatuById
);

router.patch(
  "/apisirs6v2/rllimatitiksatu/:id",
  verifyToken,
  updateDataRLLimaTitikSatu
);

router.delete(
  "/apisirs6v2/rllimatitiksatu/:id",
  verifyToken,
  deleteDataRLLimaTitikSatu
);

// RL 5.3
router.get("/apisirs6v2/rllimatitikdua", verifyToken, getRLLimaTitikDua)

// RL 5.3
router.get("/apisirs6v2/rllimatitiktiga", verifyToken, getRLLimatitikTiga)

//Punya Bibo
// Jenis Pengunjung
router.get('/apisirs6v2/jenispengunjung', verifyToken,
getDataJenisPengunjung)

// RL 3.4
router.post('/apisirs6v2/rltigatitikempat', verifyToken, insertDataRLTigaTitikEmpat)
router.get('/apisirs6v2/rltigatitikempat', verifyToken, getDataRLTigaTitikEmpat)
router.get('/apisirs6v2/rltigatitikempatdetail/:id',verifyToken, getRLTigaTitikEmpatById)
router.delete('/apisirs6v2/rltigatitikempat/:id', verifyToken, deleteDataRLTigaTitikEmpat)
router.patch('/apisirs6v2/rltigatitikempatdetail/:id', verifyToken, updateDataRLTigaTitikEmpat)

// Jenis Kegiatan
router.get('/apisirs6v2/jeniskegiatanrltigatitiklima', verifyToken,
getDataJenisKegiatanRLTigaTitikLima)

// RL 3.5
router.post('/apisirs6v2/rltigatitiklima', verifyToken, insertDataRLTigaTitikLima)
router.get('/apisirs6v2/rltigatitiklima', verifyToken, getDataRLTigaTitikLima)
router.get('/apisirs6v2/rltigatitiklimadetail/:id',verifyToken, getRLTigaTitikLimaById)
router.delete('/apisirs6v2/rltigatitiklima/:id', verifyToken, deleteDataRLTigaTitikLima)
router.patch('/apisirs6v2/rltigatitiklimadetail/:id', verifyToken, updateDataRLTigaTitikLima)

// Jenis Kegiatan
router.get('/apisirs6v2/jeniskegiatanrltigatitikenam', verifyToken,
getDataJenisKegiatanRLTigaTitikEnam)

// RL 3.6
router.post('/apisirs6v2/rltigatitikenam', verifyToken, insertDataRLTigaTitikEnam)
router.get('/apisirs6v2/rltigatitikenam', verifyToken, getDataRLTigaTitikEnam)
router.get('/apisirs6v2/rltigatitikenamdetail/:id',verifyToken, getRLTigaTitikEnamById)
router.delete('/apisirs6v2/rltigatitikenam/:id', verifyToken, deleteDataRLTigaTitikEnam)
router.patch('/apisirs6v2/rltigatitikenamdetail/:id', verifyToken, updateDataRLTigaTitikEnam)

// Jenis Kegiatan
router.get('/apisirs6v2/jeniskegiatanrltigatitiktujuh', verifyToken,
getDataJenisKegiatanRLTigaTitikTujuh)

// RL 3.7
router.post('/apisirs6v2/rltigatitiktujuh', verifyToken, insertDataRLTigaTitikTujuh)
router.get('/apisirs6v2/rltigatitiktujuh', verifyToken, getDataRLTigaTitikTujuh)
router.get('/apisirs6v2/rltigatitiktujuhdetail/:id',verifyToken, getRLTigaTitikTujuhById)
router.delete('/apisirs6v2/rltigatitiktujuh/:id', verifyToken, deleteDataRLTigaTitikTujuh)
router.patch('/apisirs6v2/rltigatitiktujuhdetail/:id', verifyToken, updateDataRLTigaTitikTujuh)
//Punya Bibo


export default router
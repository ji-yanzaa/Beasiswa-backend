const express = require('express');
const router= express.Router();
const scholarshipController = require('../controllers/scholarshipController');
const {verifyToken, isAdmin} = require('../middleware/authMiddleware');

// Publik atau user login boleh lihat
router.get('/', scholarshipController.getAll);
router.get('/:id', scholarshipController.getOne);

// Hanya Admin
router.post('/', verifyToken, isAdmin, scholarshipController.create);
router.put('/:id', verifyToken, isAdmin, scholarshipController.update);
router.delete('/:id', verifyToken, isAdmin, scholarshipController.delete);

module.exports = router;
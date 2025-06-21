const express = require('express');
const router = express.Router();
const bookmarkController = require('../controllers/bookmarkController');
const { verifyToken } = require('../middleware/authMiddleware');

// hanya user yang login bisa akses
router.post('/', verifyToken, bookmarkController.addBookmark);
router.get('/', verifyToken, bookmarkController.getBookmarks);
router.delete('/:id', verifyToken, bookmarkController.removeBookmark);

module.exports = router;
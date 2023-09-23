const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { accessChat, fetchChats, createGroup, renameGroup, addToGroup, removeFromGroup } = require('../controllers/chatController');
const router = express.Router();

router.post('/', protect, accessChat);
router.get('/', protect, fetchChats);
router.post('/group', protect, createGroup);
router.put('/rename-group', protect, renameGroup);
router.put('/add-user', protect, addToGroup);
router.put('/remove-user', protect, removeFromGroup);

module.exports = router;
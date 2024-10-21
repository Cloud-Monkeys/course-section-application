const express = require('express');
const { getSections, getSectionById, createSection, updateSection, deleteSection } = require('../controllers/sectionController');
const router = express.Router();

// Define routes for Section resource
router.get('', getSections);
router.get('/:id', getSectionById);
router.post('', createSection);
router.put('/:id', updateSection);
router.delete('/:id', deleteSection);

module.exports = router;
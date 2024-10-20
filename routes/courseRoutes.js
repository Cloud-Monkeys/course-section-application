const express = require('express');
const { getCourses, getCourseById, createCourse, updateCourse, deleteCourse } = require('../controllers/courseController');
const router = express.Router();

// Define routes for Course resource
router.get('', getCourses);
router.get('/:id', getCourseById);
router.post('', createCourse);
router.put('/:id', updateCourse);
router.delete('/:id', deleteCourse);

module.exports = router;
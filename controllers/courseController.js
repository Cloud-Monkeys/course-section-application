const Course = require('../models/course');

// Get all courses
const getCourses = async (req, res) => {
    try {
        const courses = await Course.findAll();
        res.json(courses);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get a course by its id
const getCourseById = async (req, res) => {
    try {
        const course = await Course.findByPk(req.params.id);
        if (course) {
            res.json(course);
        } else {
            res.status(404).json({ message: 'Course not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create a new course
const createCourse = async (req, res) => {
    try {
        const newCourse = await Course.create(req.body);
        res.status(201).json(newCourse);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update course details
const updateCourse = async (req, res) => {
    try {
        const course = await Course.findByPk(req.params.id);
        if (course) {
            await course.update(req.body);
            res.json(course);
        } else {
            res.status(404).json({ message: 'Course not found' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a course
const deleteCourse = async (req, res) => {
    try {
        const course = await Course.findByPk(req.params.id);
        if (course) {
            await course.destroy();
            res.json({ message: 'Course deleted' });
        } else {
            res.status(404).json({ message: 'Course not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getCourses,
    getCourseById,
    createCourse,
    updateCourse,
    deleteCourse
};
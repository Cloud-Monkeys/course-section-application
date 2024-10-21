const Section = require('../models/section');

// Get all sections
const getSections = async (req, res) => {
    try {
        const sections = await Section.findAll();
        res.json(sections);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get a section by its id
const getSectionById = async (req, res) => {
    try {
        const section = await Section.findByPk(req.params.id);
        if (section) {
            res.json(section);
        } else {
            res.status(404).json({ message: 'Section not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create a new section
const createSection = async (req, res) => {
    try {
        const newSection = await Section.create(req.body);
        res.status(201).json(newSection);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update section details
const updateSection = async (req, res) => {
    try {
        const section = await Section.findByPk(req.params.id);
        if (section) {
            await section.update(req.body);
            res.json(section);
        } else {
            res.status(404).json({ message: 'Section not found' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a section
const deleteSection = async (req, res) => {
    try {
        const section = await Section.findByPk(req.params.id);
        if (section) {
            await section.destroy();
            res.json({ message: 'Section deleted' });
        } else {
            res.status(404).json({ message: 'Section not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getSections,
    getSectionById,
    createSection,
    updateSection,
    deleteSection
};
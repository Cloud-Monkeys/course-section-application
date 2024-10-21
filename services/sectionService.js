// const express = require('express');
// const router = express.Router();
// const db = require('../config/db');
//
// // Get all sections
// router.get('', async (req, res) => {
//     const query = 'SELECT * FROM sections';
//     try {
//         const [results] = await db.query(query);
//         res.json(results);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });
//
// // Create a new section
// router.post('', async (req, res) => {
//     const { course_id, section_code } = req.body;
//     const query = 'INSERT INTO sections (course_id, section_code) VALUES (?, ?)';
//     try {
//         const [results] = await db.query(query, [course_id, section_code]);
//         res.status(201).json({ id: results.insertId, course_id, section_code });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });
//
// // Update a section
// router.put('/:id', async (req, res) => {
//     const id = req.params.id;
//     const { course_id, section_code } = req.body;
//     const query = 'UPDATE sections SET course_id = ?, section_code = ? WHERE id = ?';
//     try {
//         const [results] = await db.query(query, [course_id, section_code, id]);
//         res.json({ message: `${results.affectedRows} section found. ${results.changedRows} section updated successfully.` });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });
//
// // Delete a section
// router.delete('/:id', async (req, res) => {
//     const id = req.params.id;
//     const query = 'DELETE FROM sections WHERE id = ?';
//     try {
//         const [results] = await db.query(query, [id]);
//         res.json({ message: `${results.affectedRows} section deleted successfully.` });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });
//
// // Get a section by its id
// router.get('/:id', async (req, res) => {
//     const id = req.params.id;
//     const query = 'SELECT * FROM sections WHERE id = ?';
//     try {
//         const [results] = await db.query(query, [id]);
//         res.json(results);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });
//
// module.exports = router;
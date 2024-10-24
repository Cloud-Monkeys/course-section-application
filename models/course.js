const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Course = db.define('course', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    courseCode: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'course_code',
        unique: true
    },
    courseName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'course_name'
    }
}, {
    timestamps: false
});

module.exports = Course;
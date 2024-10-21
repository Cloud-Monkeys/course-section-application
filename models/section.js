const { DataTypes } = require('sequelize');
const db = require('../config/db');
const Course = require('./course');

const Section = db.define('Section', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    courseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'course_id',
        references: {
            model: Course,
            key: 'id',
            onDelete: 'CASCADE'
        }
    },
    sectionCode: {
        type: DataTypes.TINYINT,
        allowNull: false,
        field: 'section_code',
        validate: {
            min: 1,
        }
    }
}, {
    timestamps: false,
    indexes: [
        {
            unique: true,
            fields: ['course_id', 'section_code']
        }
    ]
});

module.exports = Section;
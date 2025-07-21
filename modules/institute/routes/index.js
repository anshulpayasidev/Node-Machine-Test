const express = require("express");
const institute = express.Router();
const InstitueController = require("../controllers/instituteContoller");
const instituteController = new InstitueController();

/**
 * Create route for get institute list in instituteController.
 */
institute.get('/institutes', (req, res, next) => {
    instituteController.getInstiute(req, res, next);
});

/**
 * Create route for add  institutes in instituteController.
 */
institute.post('/add-institute', (req, res, next) => {
    instituteController.addInstiute(req, res, next);
});

/**
 * Create route for add education boards in instituteController.
 */
institute.post('/add-boards', (req, res, next) => {
    instituteController.addBoards(req, res, next);
});

/**
 * Create route for get education boards list in instituteController.
 */
institute.get('/education_boards', (req, res, next) => {
    instituteController.getEducationBoard(req, res, next);
});

/**
 * Create routes for add medium in instituteController
 */
institute.post('/add-medium', (req, res, next) => {
    instituteController.addMedium(req, res, next);
});

/**
 * Create routes for get medium in instituteController.
 */
institute.get('/medium', (req, res, next) => {
    instituteController.getMedium(req, res, next);
});

/**
 * Create routes for add class category in instituteController
 */
institute.post('/add-class-category', (req, res, next) => {
    instituteController.addClassCategories(req, res, next);
});

/**
 * Create routes for get class category in instituteController.
 */
institute.get('/class-category', (req, res, next) => {
    instituteController.getClassCategory(req, res, next);
});

/**
 * Create routes for add standard in instituteController
 */
institute.post('/add-standard', (req, res, next) => {
    instituteController.addStandard(req, res, next);
});

/**
 * Create routes for get standard in instituteController.
 */
institute.get('/standards', (req, res, next) => {
    instituteController.getStandards(req, res, next);
});

/**
 * Create routes for add subject in instituteController
 */
institute.post('/add-subject', (req, res, next) => {
    instituteController.addSubject(req, res, next);
});

/**
 * Create routes for get subject in instituteController
 */
institute.get('/subject', (req, res, next) => {
    instituteController.getSubject(req, res, next);
});

/**
 * Create routes for registration in instituteController
 */
institute.post('/registration', (req, res, next) => {
    instituteController.createRegistration(req, res, next);
});

module.exports = institute;

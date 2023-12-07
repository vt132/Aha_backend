const express = require('express');
const userController = require('../controllers/user');

const router = express.Router();
/**
 * @swagger
 * /signup:
 *   post:
 *     summary: Sign up a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: The user was successfully created
 */
router.post('/signup', userController.signUp);


module.exports = router;
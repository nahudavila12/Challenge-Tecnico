import express from 'express';
import { getCurrentUser, login } from '../controllers/authController';
import { authenticateToken } from '../middleware/auth';

const router = express.Router();

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Inicia sesión con email y password
 *     tags: [Autenticación]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: juan@mail.com
 *               password:
 *                 type: string
 *                 example: password123
 *     responses:
 *       200:
 *         description: Login exitoso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: eyJh.....
 *       400:
 *         description: Email y password son requeridos
 *       401:
 *         description: Credenciales invalidas
 *       500:
 *         description: Error interno del servidor
 */
router.post('/login', login);

/**
 * @swagger
 * /api/auth/me:
 *   get:
 *     summary: Obtiene los datos del usuario autenticado
 *     tags: [Autenticación]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Datos del usuario autenticado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 nombre:
 *                   type: string
 *                   example: Juan
 *                 apellido:
 *                   type: string
 *                   example: Pérez
 *                 edad:
 *                   type: number
 *                   example: 28
 *                 email:
 *                   type: string
 *                   format: email
 *                   example: juan@mail.com
 *       401:
 *         description: Token no proporcionado o invalido
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error interno del servidor
 */
router.get('/me', authenticateToken, getCurrentUser);

export default router;


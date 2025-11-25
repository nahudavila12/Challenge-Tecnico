import { Request, Response } from 'express';
import { AuthRequest } from '../middleware/auth';
import { AuthService } from '../services/authService';
import { LoginRequest } from '../types';

/**
 * Controller para el login
 */
export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const credentials: LoginRequest = req.body;
    const result = AuthService.login(credentials);
    res.json(result);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Error al iniciar sesion';
    
    if (message === 'Email y password son requeridos') {
      res.status(400).json({ error: message });
    } else if (message === 'Credenciales invalidas') {
      res.status(401).json({ error: message });
    } else {
      console.error('Error en login:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  }
};

/**
 * Controller para obtener datos del usuario autenticado
 */
export const getCurrentUser = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const userId = req.userId;

    if (!userId) {
      res.status(401).json({ error: 'Usuario no autenticado' });
      return;
    }

    const user = AuthService.getUserById(userId);
    res.json(user);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Error al obtener usuario';
    
    if (message === 'Usuario no encontrado') {
      res.status(404).json({ error: message });
    } else {
      console.error('Error al obtener usuario:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  }
};


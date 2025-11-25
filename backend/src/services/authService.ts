import jwt from 'jsonwebtoken';
import { LoginRequest, UserResponse } from '../types';
import { findUserById, findUserByEmail } from '../utils/usersLoader';

const JWT_SECRET = process.env.JWT_SECRET || 'secret-key-challenge-tecnico';

/**
 * Servicio de autenticacion
 */
export class AuthService {
  /**
   * Autentica un usuario y genera un JWT
   */
  static login(credentials: LoginRequest): { token: string } {
    const { email, password } = credentials;

    // Validacion
    if (!email || !password) {
      throw new Error('Email y password son requeridos');
    }

    // Buscar usuario
    const user = findUserByEmail(email);

    if (!user || user.password !== password) {
      throw new Error('Credenciales invalidas');
    }

    // Generar JWT
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: '23h',
    });

    return { token };
  }

  /**
   * Obtiene los datos del usuario
   */
  static getUserById(userId: number): UserResponse {
    const user = findUserById(userId);

    if (!user) {
      throw new Error('Usuario no encontrado');
    }

    const { id, password, ...userResponse } = user;
    return userResponse;
  }
}


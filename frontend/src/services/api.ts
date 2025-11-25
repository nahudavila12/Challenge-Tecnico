import { LoginRequest, LoginResponse, User } from '../types';
import { API_ENDPOINTS, STORAGE_KEYS } from '../utils/constants';

export const login = async (
  credentials: LoginRequest
): Promise<LoginResponse> => {
  const response = await fetch(API_ENDPOINTS.LOGIN, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Error al iniciar sesion');
  }

  return response.json();
};

export const getCurrentUser = async (): Promise<User> => {
  const token = localStorage.getItem(STORAGE_KEYS.TOKEN);

  if (!token) {
    throw new Error('No hay token almacenado');
  }

  const response = await fetch(API_ENDPOINTS.ME, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    if (response.status === 401 || response.status === 403) {
      localStorage.removeItem(STORAGE_KEYS.TOKEN);
      throw new Error('Token invalido o expirado');
    }
    const error = await response.json();
    throw new Error(error.error || 'Error al obtener usuario');
  }

  return response.json();
};


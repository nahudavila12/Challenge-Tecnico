import { readFileSync } from 'fs';
import { join } from 'path';
import { User } from '../types';

// Cache de usuarios precargados
let usersCache: User[] = [];

/**
 * Precarga los usuarios desde el archivo JSON
 */
export const preloadUsers = (): User[] => {
  if (usersCache.length === 0) {
    try {
      const filePath = join(__dirname, '../preload/users.json');
      const fileContent = readFileSync(filePath, 'utf-8');
      usersCache = JSON.parse(fileContent);
      console.log(`Precargando ${usersCache.length} usuarios`);
    } catch (error) {
      console.error('Error al precargar usuarios:', error);
      usersCache = [];
    }
  }
  return usersCache;
};

/**
 * Obtiene todos los usuarios del cache
 */
export const getUsers = (): User[] => {
  return preloadUsers();
};

/**
 * Busca un usuario por email
 */
export const findUserByEmail = (email: string): User | undefined => {
  const users = getUsers();
  return users.find((user) => user.email === email);
};

/**
 * Busca un usuario por ID
 */
export const findUserById = (id: number): User | undefined => {
  const users = getUsers();
  return users.find((user) => user.id === id);
};


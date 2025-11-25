export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface User {
  nombre: string;
  apellido: string;
  edad: number;
  email: string;
}


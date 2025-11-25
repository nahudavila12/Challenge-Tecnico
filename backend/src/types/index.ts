export type User = {
  id: number;
  nombre: string;
  apellido: string;
  edad: number;
  email: string;
  password: string;
}

export type UserResponse = Omit<User, 'id' | 'password'>

export type LoginRequest = {
  email: string;
  password: string;
}

export type LoginResponse = {
  token: string;
}



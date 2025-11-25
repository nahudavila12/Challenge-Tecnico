import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, ErrorMessage, Input, Logo } from '../components/ui';
import { login } from '../services/api';
import { ROUTES, STORAGE_KEYS } from '../utils/constants';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await login({ email, password });
      localStorage.setItem(STORAGE_KEYS.TOKEN, response.token);
      navigate(ROUTES.ME);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al iniciar sesion');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 mb-10 mt-10">
        <Logo />
        
        <h1 className="text-[#1e3a5f] text-center text-2xl font-bold mb-8">RENTMOTE</h1>
        
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-4">Iniciar Sesión</h2>
        
        <p className="text-center text-gray-600 mb-8">
          Bienvenido Rentmote, por favor
          <br />
          ingrese a su cuenta
        </p>

        <form onSubmit={handleSubmit}>
          <Input
            id="email"
            type="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingrese su correo electrónico"
            required
          />

          <Input
            id="password"
            type="password"
            label="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingrese su contraseña"
            required
          />

          <ErrorMessage message={error} />

          <div className="flex justify-center">
            <Button type="submit" isLoading={isLoading}>
              ENTRAR
            </Button>
          </div>
        </form>

        <div className="text-center mt-6">
          <a
            href="#"
            className="text-[#68A57C] hover:text-[#4a8a6c] font-medium text-base underline transition-colors duration-200"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Olvidaste tu contraseña
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;


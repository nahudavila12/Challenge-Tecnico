import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../services/api';
import { User } from '../types';

interface UseAuthReturn {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  logout: () => void;
}

/**
 * Hook para manejar la autenticacion
 */
export const useAuth = (): UseAuthReturn => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      
      if (!token) {
        setIsLoading(false);
        return;
      }

      try {
        const userData = await getCurrentUser();
        setUser(userData);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error al cargar usuario');
        setUser(null);
        localStorage.removeItem('token');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setError(null);
    navigate('/login');
  };

  return { user, isLoading, error, logout };
};


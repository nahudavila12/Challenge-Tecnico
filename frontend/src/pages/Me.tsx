import { Button, ErrorMessage, Logo } from '../components/ui';
import { useAuth } from '../hooks/useAuth';

const Me = () => {
  const { user, isLoading, error, logout } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 text-center">
          <p className="text-gray-600">Cargando...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          <ErrorMessage message={error} />
          <p className="text-center text-gray-600 mt-4">Redirigiendo al login...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <Logo />
        
        <h1 className="text-[#1e3a5f] text-center text-2xl font-bold mb-4">RENTMOTE</h1>
        
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-2">Mi Perfil</h2>
        
        <p className="text-center text-gray-600 mb-8">
          Información de tu cuenta
        </p>

        <div className="flex flex-col gap-4 mb-8">
          <div className="flex justify-between items-center py-3 border-b border-gray-200">
            <span className="font-semibold text-gray-700 text-sm">Nombre:</span>
            <span className="text-gray-900 text-sm">{user.nombre}</span>
          </div>
          <div className="flex justify-between items-center py-3 border-b border-gray-200">
            <span className="font-semibold text-gray-700 text-sm">Apellido:</span>
            <span className="text-gray-900 text-sm">{user.apellido}</span>
          </div>
          <div className="flex justify-between items-center py-3 border-b border-gray-200">
            <span className="font-semibold text-gray-700 text-sm">Edad:</span>
            <span className="text-gray-900 text-sm">{user.edad} años</span>
          </div>
          <div className="flex justify-between items-center py-3">
            <span className="font-semibold text-gray-700 text-sm">Email:</span>
            <span className="text-gray-900 text-sm">{user.email}</span>
          </div>
        </div>

        <div className="flex justify-center">
          <Button variant="danger" onClick={logout}>
            CERRAR SESIÓN
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Me;


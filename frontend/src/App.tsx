import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Me from './pages/Me';
import { ROUTES } from './utils/constants';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route
          path={ROUTES.ME}
          element={
            <ProtectedRoute>
              <Me />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Navigate to={ROUTES.LOGIN} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


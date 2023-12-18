import { Routes, Route } from 'react-router-dom';
import { LoginPage } from '../pages';

function AppRoutes() {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
    </Routes>
  );
}

export default AppRoutes;

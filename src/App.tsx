import { useNavigate } from 'react-router-dom';
import AppRoutes from './routes';
import { useEffect } from 'react';

function App() {
  const navigate = useNavigate();

  // redirects to the authorization page
  useEffect(() => {
    navigate('/login');
  }, [navigate]);

  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;


import { Outlet, useLocation } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './styles.css'
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import HomePage from '../features/home/HomePage';
import Footer from './Footer';


function App() {
  const location = useLocation()

  return (
    <>
      {location.pathname === '/' ? <HomePage /> : (
        <>
          <NavBar />
          <Container style={{ paddingTop: '7em' }}>
            <Outlet />
          </Container>
          <Footer />
        </>
      )}

    </>
  );
}

export default App

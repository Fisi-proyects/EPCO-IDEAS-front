import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import './App.css';
import ClippedDrawer from './components/Sidebar/Sidebar';
import {Box} from '@mui/material';
import RequestsTable from './pages/requests'; // Importar la tabla
import { Route, Routes } from 'react-router';
import SignIn from './pages/login';
import { AuthProvider } from './context/AuthContext';


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Routes>
            <Route path='/login' element={<SignIn />} />
            <Route path='/*' element={
              <Box sx={{ display: 'flex', justifyContent:'center' }}>
              <ClippedDrawer/>
              <Box sx={{ marginTop: '70px', width: '100%'}}>
                <Routes>
                  <Route path='/' element={<RequestsTable />} />
                  <Route path ='*' element={<h1>404 wasaa</h1>}/>
                  {/* Aca ponen las rutas que iran dentro del sidebar y header */}
                </Routes>
              </Box>
              </Box>
            }/>
          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default App;

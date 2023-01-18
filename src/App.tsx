import { Container } from '@mui/system';
import { Navigate } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  { ArticlePage }  from './components/Article/ArticlePage';
import Homepage from './components/Homepage/Homepage';

function App() {
  
  return (
    <>
      <Container sx={{ mt: '4rem' }}>
        <BrowserRouter>
          <Routes>
            <Route path="/homepage/:id" element={<ArticlePage />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/" element={<Navigate replace to="/homepage" />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>

  );
}

export default App;

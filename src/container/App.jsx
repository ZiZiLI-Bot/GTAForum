import { BrowserRouter, Route, Routes } from 'react-router-dom';
import background from '../asset/bg-index.jpg';
import Footer from '../layout/footer';
import Navbar from '../layout/navbar';
import { ROUTER } from '../router';
import Home from './Home';
import VQMM from './VQMM/VQMM';

function App() {
  const style = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    position: 'relative',
  };

  return (
    <div style={style}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={ROUTER.HOME} element={<Home />} />
          <Route path={ROUTER.VQMM} element={<VQMM />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

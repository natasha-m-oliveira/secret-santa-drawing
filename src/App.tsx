import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Config } from './pages/Config';
import { PrizeDraw } from './pages/PrizeDraw';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Config />} />
          <Route path="/sorteio" element={<PrizeDraw />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;

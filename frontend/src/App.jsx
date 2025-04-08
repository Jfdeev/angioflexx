import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Main from './screens/Main';
import { injectSpeedInsights } from '@vercel/speed-insights';


injectSpeedInsights();

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
            <Main />
        } />
        <Route path="/produto/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

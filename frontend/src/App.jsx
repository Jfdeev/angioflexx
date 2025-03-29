import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './screens/Products';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/produto/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

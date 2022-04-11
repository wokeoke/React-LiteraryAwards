import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { HomePage, ErrorPage } from './pages';
import { Navbar, Footer } from './components';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};
export default App;

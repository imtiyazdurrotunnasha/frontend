import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <header className="bg-dark text-white py-3">
        <div className="container d-flex justify-content-between align-items-center">
          <h2 className="mb-0">Portofolio</h2>
          <nav>
            <ul className="nav">
              <li className="nav-item"><Link className="nav-link text-white" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/portfolio">Portfolio</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/contact">Contact</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/blog">Blog</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container my-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>

      <footer className="bg-light text-center text-muted py-3 mt-auto">
        <hr />
        <p className="mb-0">© 2025 Web Portfolio – Dibuat oleh Mas Ganteng</p>
      </footer>
    </Router>
  );
}

export default App;

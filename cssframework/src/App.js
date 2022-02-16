import './App.scss';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import News from './pages/news';
import Contact from './pages/contact';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
          <Navbar/>
          <div>
            <Routes>
            <Route path="/" exact element={<Home/>} />
              <Route path="/news" exact element={<News/>} />
              <Route path="/contact" exact element={<Contact/>} />
            </Routes>
          </div>
          <Footer/>
      </BrowserRouter>
    </div>

  );
}

export default App;

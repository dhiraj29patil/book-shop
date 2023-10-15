
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import AddBooks from './pages/AddBooks';
import Book from './pages/Book';
import Home from './pages/Home';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={ <Home /> } />
        <Route path='/books' element={ <Book /> } />

        <Route path='/addBooks' element={ <AddBooks /> } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

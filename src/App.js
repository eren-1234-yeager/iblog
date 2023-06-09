import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import BlogProvider from './context/BlogProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <BlogProvider>
          <Navbar title="iblog" />

          <Routes>

            <Route path='/' element={<Home />} />

          </Routes>

        </BlogProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

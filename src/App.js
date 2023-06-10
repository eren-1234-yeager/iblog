import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import BlogProvider from './context/BlogProvider';
import AuthProvider from './context/AuthProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>

          <BlogProvider>
            <Navbar title="iblog" />

            <Routes>

              <Route path='/' element={<Home category="general"/>} />
              <Route path='/general' element={<Home category="general"/>} />
              <Route path='/science' element={<Home category="science"/>} />
              <Route path='/programming' element={<Home category="programming"/>} />
              <Route path='/anime' element={<Home category="anime"/>} />

            </Routes>

          </BlogProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

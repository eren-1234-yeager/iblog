import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import BlogProvider from './context/BlogProvider';
import AuthProvider from './context/AuthProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Pagenotfound from './components/Pagenotfound';

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>

          <BlogProvider>
            <Navbar title="iblog" />

            <Routes>

              <Route path='/' element={<Home key="general" category="general"/>} />
              <Route path='/general' element={<Home key="general" category="general"/>} />
              <Route path='/science' element={<Home key="science" category="science"/>} />
              <Route path='/programming' element={<Home key="programming" category="programming"/>} />
              <Route path='/anime' element={<Home key="anime" category="anime"/>} />
              <Route path='*' element={<Pagenotfound/>}/>
            </Routes>

          </BlogProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

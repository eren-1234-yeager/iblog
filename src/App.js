import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import BlogProvider from './context/BlogProvider';
import AuthProvider from './context/AuthProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Pagenotfound from './components/Pagenotfound';
import Admin from './components/Admin';
import Login from './components/Login';
import Carousel from './components/Carousel';
import Blogs from './components/Blogs';

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>

          <BlogProvider>
            <Navbar title="iblog" />
            <Login/>
            <Routes>

              <Route path='/' element={[<Carousel key="carousel"/>,<Home key="general" category="general"/>]} />
              <Route path='/admin' element={<Admin/>}/>
              <Route path='/general' element={<Home key="general" category="general"/>} />
              <Route path='/science' element={<Home key="science" category="science"/>} />
              <Route path='/programming' element={<Home key="programming" category="programming"/>} />
              <Route path='/anime' element={<Home key="anime" category="anime"/>} />
              <Route path='/blogs/:slug' element={<Blogs/>} />
              <Route path='*' element={<Pagenotfound/>}/>
            </Routes>

          </BlogProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Navigation from './Pages/Navigation';
import Skills from './Pages/Skills';
import Works from './Pages/Works';
import IndexPage from './Pages/IndexPage';
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<IndexPage/>}>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/navigation' element={<Navigation/>}/>
    <Route path='/skills' element={<Skills/>}/>
    <Route path='/works' element={<Works/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
   
  );
}

export default App;

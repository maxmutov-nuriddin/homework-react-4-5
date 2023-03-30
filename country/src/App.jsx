import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './countrys/countrys';
import SingleArticle from './serch/serch';
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/news/:id' element={<SingleArticle />}/>
      </Routes> 
    </>
  )
}

export default App

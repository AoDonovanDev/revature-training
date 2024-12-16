import './App.css';
import { Router, Route, BrowserRouter, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hello from './components/Hello';
import ToDoList from './components/ToDoList/ToDoList';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Navbar />}>
              <Route path='hello' element={<Hello />}/>
              <Route path='todo' element={<ToDoList />}/>         
            </Route>   
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
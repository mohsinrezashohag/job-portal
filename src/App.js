import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddNewJob from './pages/AddNewJob';
import EditJob from './pages/EditJob';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="">
      <BrowserRouter>

        <Navbar></Navbar>

        <Routes>

          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/add-new-job' element={<AddNewJob></AddNewJob>}></Route>
          <Route path='/edit-job' element={<EditJob></EditJob>}></Route>
          <Route path='*' element={<NotFound />} />

        </Routes>

      </BrowserRouter>

    </ div>
  );
}

export default App;

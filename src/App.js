import './App.css';
import Header from './components/Header';
import Index from './pages/Index';
import New from './pages/New';
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Header />


      <Routes>

        <Route path="/" element={<Index/>}/>
        <Route path="/new" element={ <New/>}/>

      </Routes>
    </div>
  );
}

export default App;

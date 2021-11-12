import './App.css';
import Header from './components/Header';
import Index from './pages/Index';
import New from './pages/New';
import { Route, Routes } from 'react-router-dom'
import Edit from './pages/Edit';

function App() {
  const url = "https://bookmarkd-project.herokuapp.com/bookmarks";
  return (
    <div className="App">
      <Header />


      <Routes>

        <Route path="/" element={<Index url={url}/>}/>
        <Route path="/new" element={<New url={url} />} />
        <Route path="/:id" element ={<Edit/>}/>

      </Routes>
    </div>
  );
}

export default App;

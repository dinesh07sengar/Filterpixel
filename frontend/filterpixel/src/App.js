
import './App.css';
import { Home } from './components/home/Home';
import { Login } from './components/login/Login';
import { Navbar } from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Login/> */}
      <Home/>
     
    </div>
  );
}

export default App;

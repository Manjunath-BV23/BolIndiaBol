import logo from './logo.svg';
import './App.css';
import { TopNavbar } from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './components/Home/Home';
import { People } from './components/People/People';
import { Routers } from './components/Routers';

function App() {
  return (
    <div className="App">
        <Routers/>
    </div>
  );
}

export default App;

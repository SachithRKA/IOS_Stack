import './CSS/App.css';
import {Routes, Route} from 'react-router-dom';
import Header from './Components/nav-bar';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Recommendation from './Pages/Recommendations';
import Contacts from './Pages/Contacts';
import Login from './Pages/Login';
import Tutorial from './Pages/Tutorial';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Register />} />
          <Route path="home" element={ <Home /> } />
          <Route path="login" element={<Login />} />
          <Route path="recommendation" element={<Recommendation />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="tutorial" element={<Tutorial />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

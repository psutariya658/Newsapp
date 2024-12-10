import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  const PAGEsize = 10
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>

          <Route exact path='/' element={<News key="general" pageSize={PAGEsize} country="in" category="general" />} />
          <Route exact path='/business' element={<News key="business" pageSize={PAGEsize} country="in" category="business" />} />
          <Route exact path='/entertainment' element={<News key="entertainment" pageSize={PAGEsize} country="in" category="entertainment" />} />
          <Route exact path='/health' element={<News key="health" pageSize={PAGEsize} country="in" category="health" />} />
          <Route exact path='/science' element={<News key="science" pageSize={PAGEsize} country="in" category="science" />} />
          <Route exact path='/sports' element={<News key="sports" pageSize={PAGEsize} country="in" category="sports" />} />
          <Route exact path='/technology' element={<News key="technology" pageSize={PAGEsize} country="in" category="technology" />} />

        </Routes>
      </div>
    </Router>

  );
}

export default App;
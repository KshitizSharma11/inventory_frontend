import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Welcome } from './components/welcome.js';
import { Main } from './components/main.js';
import {Create} from './components/create.js';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/start" element={<Main/>}/>
        <Route path="/create" element={<Create/>}/>
      </Routes>
    </Router>
  );
}

export default App;

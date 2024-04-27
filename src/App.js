import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Welcome } from './components/welcome.js';
import { Main } from './components/main.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/start" element={<Main/>}/>
      </Routes>
    </Router>
  );
}

export default App;

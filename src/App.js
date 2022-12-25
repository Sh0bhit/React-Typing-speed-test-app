import { Routes, Route,useLocation } from "react-router-dom";
import Navbar from './components/navbar'
import Home from './components/home'
import Typing from './components/typing'
import {AnimatePresence} from 'framer-motion'

function App() {
  const location = useLocation();
  return (
    <div className="App">
    <Navbar />
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/test" element={<Typing />} />
    
      </Routes>
      </AnimatePresence>

    
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Home from './Home';
import Logs from './Logs';

function App() {
  return <div>

    <NavigationBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/logs" element={<Logs />} />
      
    </Routes>

  </div>;
}

export default App;

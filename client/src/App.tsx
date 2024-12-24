import { Outlet } from 'react-router-dom';
import "./style/index.css"

import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <main className='container pt-5'>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
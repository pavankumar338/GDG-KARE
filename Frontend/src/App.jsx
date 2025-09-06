import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative w-full overflow-x-hidden">
      <Navbar />
      <main className="min-h-screen pt-16 w-full overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;

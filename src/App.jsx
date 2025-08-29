import './App.css';
import "./index.css";
import LoadingScreen from './components/LoadingScreen'
import { useState } from 'react';
import Navbar from './components/Navbar';

function App() {
  const [isloaded,setIsLoaded] = useState(false);

  return (
   <>
    {!isloaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>}
      <div className={`min-h-screen transition-opacity duration-700 ${isloaded ? "opacity-100":"opacity-0"} bg-black text-gray-100`}>
        <Navbar/>
      </div>
   </>
  )
}

export default App

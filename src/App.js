import Header from './Components/Header/Header';
import './App.scss';
import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Portfolio from './Components/Portfolio/Portfolio';
import About from './Components/About/About';
import { Link, Element } from 'react-scroll';


function App() {
  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
}, []);
  return (
    <div className="App">
    
      {(width>768) &&
      <>
      <Header/>
      <Element name = "About">
        <About/>
      </Element>
      <Element name = "Portfolio">
        {/* a<Portfolio/> */}
      </Element>
      </>
      }
      {(width<768) &&
      <h1>Sorry only desktop view is supported</h1>
      }
    
    </div>
  );
}

export default App;



import './App.css';
import NavBar from './NavBar';
import AboutMe from './AboutMe';
import Projects from './Projects'; 
import Contact from './Contact'

function App() {
  return (
    <div className="App">
        <NavBar/>
        <AboutMe/>
        <Projects/>
        <Contact/>
    </div>
  );
}

export default App;

import './App.scss';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import {Switch, Route} from 'react-router-dom'
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import { useState } from 'react';
function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () =>{
    setNavToggle(!navToggle)
  }
  const check = () =>{
    if(navToggle==true){
    setNavToggle(!navToggle)
    }
  }
  
  document.addEventListener("click",function(event){
    if (event.target.closest(".nav-items")){
      if(navToggle==true){
        setNavToggle(!navToggle)
        }
    }
  })

  return (
    <div className="App" id="mapp">
      <div className={`sidebar ${navToggle ? 'nav-toggle': ''}`} id="sbar">
        <NavBar />
      </div>
      <div className="nav-btn" onClick={navClick} id="anav">
        {/* <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div> */}
        <div class={`menu-btn ${navToggle ? 'open': ''}`} id="bnav">
          <div class="menu-btn__burger"></div>
        </div>
      </div>
      <div className="main-content" onClick={check}>
          <div className="content">
            <Switch>
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route path="/portfolio" exact>
                <HomePage />
              </Route>
              <Route path="/about" exact>
                <AboutPage />
              </Route>
              <Route path="/contact" exact>
                <ContactPage />
              </Route>
            </Switch>
          </div>
      </div>
    </div>
  );
}

export default App;

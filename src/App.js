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
  // const box=document.querySelector(".sidebar")
  // document.addEventListener("click", function(event){
  //   if(event.target.closest(".sidebar")) return
  //   // box.classList.add("sidebar")
  // })
  return (
    <div className="App">
      <div className={`sidebar ${navToggle ? 'nav-toggle': ''}`}>
        <NavBar />
      </div>
      <div className="nav-btn" onClick={navClick}>
        {/* <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div> */}
        <div class={`menu-btn ${navToggle ? 'open': ''}`}>
          <div class="menu-btn__burger"></div>
        </div>
      </div>
      <div className="main-content">
          <div className="content">
            <Switch>
              <Route path="/portfolio" exact>
                <HomePage />
              </Route>
              <Route path="/" exact>
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

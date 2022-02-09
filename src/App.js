// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React,{Component} from 'react';

import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
//import BMI from './components/bmi';
import Metronome from './components/Metronome/component/Metronome';
// components
//import Sidebar from './components/sidebar'
import Social from './components/Social/Social';
import ChangeColor from './components/changeColor';
import './MenuStyle.css';
import Bank from './components/Bank/Bank';
import Currency from './components/Currency/Currency';
import Oghat from './components/Oghat/Oghat';
class App extends Component{
  render(){
    return(
      <>
     <Router>
      <div>
        <nav className="topnav">
          <ul>
            <li>
              <Link  style={{ textDecoration: 'none' ,color:'inherit'}} to="/Social/">Social</Link>
            </li>
            <li>
              <Link  style={{ textDecoration: 'none' ,color:'inherit'}} to="/Currency/">Currency</Link>
            </li>
            <li>
              <Link  style={{ textDecoration: 'none' ,color:'inherit'}} to="/Metronome/">Metronome</Link>
            </li>
            <li>
              <Link  style={{ textDecoration: 'none' ,color:'inherit'}} to="/ChangeColor/">ChangeColor</Link>
            </li>
            <li>
              <Link  style={{ textDecoration: 'none' ,color:'inherit'}} to="/Bank/">Bank</Link>
            </li>

            
          </ul>
        </nav>
        <Routes className="nav">
          <Route path="/Currency/" element={<Currency></Currency>}>
          </Route>
          <Route path="/Metronome/" element={<Metronome></Metronome>}>
          </Route>
          <Route path="/Social/" element={<Social></Social>}>
          </Route>
          <Route path="/ChangeColor/" element={<ChangeColor></ChangeColor>}>
          </Route>
          <Route path="/Bank/" element={<Bank></Bank>}>
          </Route>


        </Routes>
      </div>
    </Router>
    
    </>
    )
  }
}

export default App;


import MenuLayout from './Layouts/MenuLayout/MenuLayout';
import {BrowserRouter as Router , Switch,Route} from 'react-router-dom';
import Home from  './Layouts/Home';
import WarFirst from  './Layouts/WarFirst';
import WarSecond from  './Layouts/WarSecond';
import WarThird from './Layouts/WarThird';
import WarFourth from './Layouts/WarFourth';
import './App.css';


function App() {
  return (
    <>
        <Router>
          <MenuLayout />
             <Switch>
               <Route path="/" exact component={Home} />
               <Route path="/warfirst"  component={WarFirst} />
               <Route path="/warsecond"  component={WarSecond} />
               <Route path="/warthird"  component={WarThird} />
               <Route path="/warfourth"  component={WarFourth} />
             </Switch>
        </Router>
    </>
  );
}

export default App;

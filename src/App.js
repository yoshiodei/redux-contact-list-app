import Nav from "./Components/Nav";
import { useState } from 'react';
import Footer from "./Components/Footer";
import Users from "./Components/Users";
import Form from "./Components/Form";
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import EditUser from "./Components/EditUser";



function App() {

  return (
    <div className="App">
      <Nav />
      <Router>
        <Switch>
          <Route path="/" exact>
              <Users />
          </Route>
          <Route path="/edit/:id" exact>
              <EditUser />
          </Route>
        </Switch>
      </Router>    
          <Footer /> 
    </div>
  );
}

export default App;

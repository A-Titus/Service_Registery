import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ToolBar from './pages/Tool/category-tool';
import './App.css';
//import Form from './components/form/AddData';

import HomePage from './pages/HomePage/HomePage.component';
import NavbarAll from './components/naverbar/navbar.component';
import CollectionApi from './components/ApiCollection/ApiCollection.component';
import DisplayData from "./components/DisplayData/DisplayData";

function App() {
  return (
    <div>
      <NavbarAll/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path="/api/category/:id" component={CollectionApi}/>
        <Route exact path='/category' component={CollectionApi}/>
        <Route exact path='/tool' component={ToolBar}/>
        <Route exact path="/api/:id" component={DisplayData}/>
      </Switch>
    </div>
  );
}

export default App;

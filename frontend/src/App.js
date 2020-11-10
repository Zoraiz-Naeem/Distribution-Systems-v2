import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Home from './pages/Home/Home'
import ShopTracker from "./pages/ShopTracker/ShopTracker";
import Orders from "./pages/Orders/Orders";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import './App.css';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Montserrat',
    ].join(','),
  },});

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
            <ThemeProvider theme={theme}>
                <Route path={'/'} render={() => <Home />} exact />
                <Route path={'/shoptracker'} render={() => <ShopTracker />} exact />
                <Route path={'/orders'} render={() => <Orders />} exact />
                </ThemeProvider>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;

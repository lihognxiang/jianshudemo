import React, { Component } from 'react';
import { GlobalStyle } from "./style";
import { GlobalIconStyle } from "./statics/iconfont/iconfont";
import store from './store';
import { BrowserRouter, Route } from "react-router-dom";

import { Provider } from "react-redux";
import Home from "./pages/home";
import Detail from "./pages/detail";

import Header from "./common/header";


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header>
              <GlobalIconStyle/>
              <GlobalStyle/>
            </Header>
            <Route path='/' exact component={Home}/>
            <Route path='/detail/:id' exact component={Detail}/>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

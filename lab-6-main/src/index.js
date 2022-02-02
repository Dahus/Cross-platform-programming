import React from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"

import { Route } from "wouter"

import Header from "./components/Header"

import MyPolls from "./containers/MyPolls"
import Keystore from "./containers/Keystore"
import Poll from "./containers/Poll"
import NewPoll from "./containers/NewPoll"
import VisitedPolls from "./containers/VisitedPolls"

import colors from './colors'
import typo from './typo'
import { Provider } from "react-redux"
import store from "./store/store"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`

const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  background: ${colors.white};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
  position: relative;
  z-index: 1;
`

const Content = styled.div`
  width: 100%;
  height: 100%;
  background: ${colors.lightestGray};
  padding-bottom: 100px;
`

const H1 = styled.h1`
  ${typo.h1};
  color: ${colors.mainText};
  margin-top: 40px;
  text-align: center;
`

const App = () => (
  <Container>
    <HeaderContainer>
      <Header />
    </HeaderContainer>
    <Content>
      <Route path="/" component={MyPolls} />
      <Route path="/visited-polls" component={VisitedPolls}/>
      <Route path="/new" component={NewPoll} />
      <Route path="/keystore" component={Keystore} />
      <Route path="/poll/:pollId" component={Poll} />
    </Content>
  </Container>
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
)

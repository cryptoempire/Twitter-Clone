import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import Particles from 'react-particles-js';
import NavBar from './components/NavBar/NavBar';
import NotificationBox from './components/NotificationBox/NotificationBox'


class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />

      <Particles
              params={{
            		particles: {
            			line_linked: {
            				shadow: {
            					enable: true,
            					color: "rgba(#e82727, 1)",
            					blur: 5
            				}
            			}
            		}
            	}}
              style={{
                width: '100%'

              }}
            />
              <NotificationBox />

      </div>
    );
  }
}

export default App;

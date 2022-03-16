import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

import About from './components/About';
import Saint from './components/Saint';
import Header from './components/Header';

import Home from './pages/Home';
import Typography from './pages/Typography';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedSaint: null
    }
  }

  onSelectSaint(json) {
    this.setState({ selectedSaint: json })
  }

  render() {
    return(
      <div className="app__wrap-outer">
        <Header />

        <div className="app__wrap-inner">
          {(this.state.selectedSaint)
            ? <Saint {...this.state.selectedSaint} />
            : <About />}

          <Routes>
            <Route path="/" element={<Home onSelectSaint={this.onSelectSaint} />} />
            <Route path="typography" element={<Typography />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;

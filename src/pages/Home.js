import React from 'react';
import MenuSlider from '../components/MenuSlider';
import MapOfFes from '../components/MapOfFes';
import saintData from '../config/saint-data.json';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      saints: saintData,
      activeSaint: ""
    }
  }

  render() {
    let { saints, activeSaint } = this.state;

    return(
      <div className="page home__wrap">
        <MenuSlider
          title="Saints"
          items={saints}
          activeSaint = {activeSaint}
          onSelect={this.props.onSelectSaint}
        />

        <MapOfFes
          title="Map of Fes"
          items={saints}
          activeSaint = {activeSaint}
        />
      </div>
    );
  }
}

export default Home;

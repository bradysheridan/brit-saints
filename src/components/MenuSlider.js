import React from 'react';

const MenuItem = ({ title, body, dest, onSelect }) => (
  <a href={dest || "#"} target="_self">
    <div className="menu-slider__item">
      {title && <p>{title}</p>}
      {title && <p>{body.substring(0, 40).trim().concat('...')}</p>}
    </div>
  </a>
);

class MenuSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title || false,
      items: props.items || [],
      index: 0
    }
  }

  componentDidMount() {
    // fetch data if external source is specified in props
    if (this.props.dataSource) {
      // ...
    }
  }

  handleClick(dir) {
    if (this.state.index === 0 && dir === 'left')
      return;
    if (this.state.index === this.state.items.length - 1 && dir === 'right')
      return;

    this.setState({
      index: ("left" === dir)
        ? this.state.index - 1
        : this.state.index + 1
    });
  }

  render() {
    let { title, items, index } = this.state;

    return(
      <div className="menu-slider__wrap">
        <div className="menu-slider__controls">
          {title && <h5 className="menu-slider__title">{title}</h5>}
          <div className="menu-slider__arrows">
            <button className="menu-slider__arrow-left" onClick={() => this.handleClick('left')}>{"<-"}</button>
            <button className="menu-slider__arrow-right" onClick={() => this.handleClick('right')}>{"->"}</button>
          </div>
        </div>

        <div className="menu-slider__items" style={{ marginLeft: index * -132 }}>
          {items.map((item, i) => (
            <MenuItem {...item} onSelect={() => this.props.onSelect(item)} />
          ))}
        </div>
      </div>
    );
  }
}

export default MenuSlider;

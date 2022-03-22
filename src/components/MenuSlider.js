import React from 'react';

const MenuItem = (props) => {
  let { data, onSelect } = props;
  let { name } = data;

  console.log(props)

  return(
    <a href="#" onClick={onSelect}>
      <div className="menu-slider__item">
        {name && <p>{name}</p>}
      </div>
    </a>
  );
}

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
    let { title, items } = this.props;
    let { index } = this.state;

    console.log(items)

    return(
      <div className="menu-slider__wrap">
        <div className="menu-slider__items">
          {items.map((item, i) => (
            <MenuItem
              {...item}
              onSelect={() => this.props.onSelect(item)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default MenuSlider;

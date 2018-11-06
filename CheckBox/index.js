import React from "react";
import PropTypes from "prop-types";
import Checkbox from "./checkbox";
const checkboxes = [
  {
    name: "check-box-1",
    key: "checkBox1",
    label: "Check Box 1"
  },
  {
    name: "check-box-2",
    key: "checkBox2",
    label: "Check Box 2"
  },
  {
    name: "check-box-3",
    key: "checkBox3",
    label: "Check Box 3"
  },
  {
    name: "check-box-4",
    key: "checkBox4",
    label: "Check Box 4"
  }
];
class CheckboxContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedItems: new Map()
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({
      checkedItems: prevState.checkedItems.set(item, isChecked)
    }));
  }

  render() {
    return (
      <React.Fragment>
        {checkboxes.map(item => (
          <label key={item.key} className="checkbox">
            {item.name}
            <Checkbox
              name={item.name}
              checked={this.state.checkedItems.get(item.name)}
              onChange={this.handleChange}
            />
          </label>
        ))}
        <button
          onClick={() => {
            console.log(this.state.checkedItems);
          }}
        >
          check
        </button>
      </React.Fragment>
    );
  }
}

export default CheckboxContainer;

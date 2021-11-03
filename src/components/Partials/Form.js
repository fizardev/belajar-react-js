import React, { Component } from "react";
import '../Style/style.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.textInput = React.createRef();
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    alert("Pesan input: " + this.state.value);
    this.textInput.current.focus();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            className="form-control"
            type="text"
            onChange={this.handleChange}
            ref={this.textInput}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;

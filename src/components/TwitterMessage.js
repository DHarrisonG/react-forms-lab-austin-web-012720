import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      message: e.target.value
    })
  }


  render() {
    let charNum = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message: </strong>
        <input onChange={this.handleChange} type="text" name="message" id="message" value={this.state.message}/>
        {charNum}
      </div>
    );
  }
}

export default TwitterMessage;

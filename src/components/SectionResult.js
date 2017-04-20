import React, { Component } from 'react';

class SectionResult extends Component {
	render() {
		return(
      <div>
        <h2>Testing</h2>
        <button onClick={() => this.setState({section: this.props.currentSection})}>Back</button>
        <button onClick={() => this.setState({section: this.props.nextSection})}>Next</button>
      </div>
    )
	}
}

export default SectionResult;
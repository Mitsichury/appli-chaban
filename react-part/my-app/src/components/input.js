import React from 'react';
import { Col, Row } from 'react-materialize';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: props.value,
    };
  }

  handle = (evt) => {
    this.setState({
      search: evt.target.value,
    });
    this.props.onChange(evt.target.value, this.props.name);
  }

  render() {
    return (
      <Row>
        <Col s={3}><p>Recherche {this.props.name}:</p></Col>
        <Col s={9}><input type="text" value={this.state.search} onChange={this.handle} /></Col>
      </Row>
    );
  }
}

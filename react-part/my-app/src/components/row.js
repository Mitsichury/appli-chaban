import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-materialize';


export default class Fetch extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.data.date}</td>
        <td>{this.props.data.full ? 'oui' : 'non'}</td>
        <td>{this.props.data.start}</td>
        <td>{this.props.data.end}</td>
        <td>{this.props.data.reason}</td>
        <td><Button waves="light"><Link to={`/${this.props.data.id}`}>Détails</Link></Button></td>
      </tr>
    );
  }
}

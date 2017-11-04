import React from 'react';
import Row from './row';
import { Table } from 'react-materialize';

export default class Fetch extends React.Component {

  render() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th data-field="date">Date</th>
              <th data-field="full">Fermé complétement</th>
              <th data-field="start">Début</th>
              <th data-field="end">Fin</th>
              <th data-field="reason">Raison</th>
            </tr>
          </thead>

          <tbody>
            {this.props.data.map((post, index) => <Row key={index} data={post} />)}
          </tbody>
        </Table>
      </div>
    );
  }
}

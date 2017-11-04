import React from 'react';
import Input from './input';
import { Button } from 'react-materialize';
import moment from 'moment';

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      from: '01-01-2017',
      to: '01-01-2018',
    };
  }

  update = (value, type) => {
    if (type === 'From') {
      this.setState({
        from: value,
      });
    } else {
      this.setState({
        to: value,
      });
    }
  }

  send = () => {
    const _from = this.state.from ? moment(this.state.from, 'DD-MM-YYYY') : moment().subtract(1, 'year');
    const _to = this.state.to ? moment(this.state.to, 'DD-MM-YYYY') : moment().add(1, 'year');
    let error = null;
    if (_from.isAfter(_to) ||
            _to.isBefore(_from)) {
      error = "Les date ne sont pas dans l'ordre chronologique.";
    }

    if (!_from.isValid() ||
          !_to.isValid()) {
      error = 'Le format des dates ne sont pas valides.';
    }

    this.props.makeCall(this.state, error);
  }


  render() {
    return (
      <div>
        <Input name={'From'} value={this.state.from} onChange={this.update} />
        <Input name={'To'} value={this.state.to} onChange={this.update} />
        <Button onClick={this.send} waves="light">chercher</Button>
      </div>
    );
  }
}

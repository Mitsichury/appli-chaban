/* eslint-disable indent */
import React, { Component } from 'react';
import Fetch from '../components/fetch';
import Search from '../components/search';
import { getBy } from '../utils/utils';
import { Preloader } from 'react-materialize';
import '../style/App.css';
import { Redirect } from 'react-router';


class Homepage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rows: [],
            code: undefined,
            error: null,
        };
    }

    componentDidMount() {
        this.callToApi({
            from: '01-01-2017',
            to: '01-01-2018',
        }, null);
    }

    callToApi = (obj, error) => {
        this.setState({
            error,
        });
        if (error) { return; }
        this.setState({
            rows: [],
        });

        getBy(obj.from, obj.to).then(values => {
            this.setState({
                rows: values,
            });
        }).catch(code => {
            this.setState({
                code: code
            });
        });
    }


    render() {
        return (
          <div className="App">
            {this.state.code && <Redirect to={`error/${this.state.code}`} />}
            {this.state.error && <p>{this.state.error}</p>}
            <Search makeCall={this.callToApi} />
            {(this.state.rows.length > 0 && this.state.rows[0].date !== undefined) && <Fetch data={this.state.rows} />}
            {this.state.rows.length === 0 && <Preloader size="big" />}
            {(this.state.rows.length === 1 && this.state.rows[0].date === undefined) && <p>Rien n'a été trouvé</p>}
          </div>
        );
    }
}

export default Homepage;

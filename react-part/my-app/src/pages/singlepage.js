import React from 'react';
import axios from 'axios';
import Fetch from '../components/fetch';
import { Preloader, Button, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import '../style/App.css';

export default class SinglePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [],
            code: undefined,
        };
    }

    componentDidMount() {
        this.apiCall(this.props.match.params.id);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.match.params.id !== nextProps.match.params.id) {
            this.apiCall(nextProps.match.params.id);
        }
    }

    apiCall = (id) => {
        this.setState({
            rows: [],
        });

        axios.get(`http://localhost:1337/${id}`)
            .then(res => {
                this.setState({
                    rows: [res.data],
                });
            }).catch((err) => {
            this.setState({
                code: err.response.status,
            });
        });
    };


    render() {
        return (
            <div>
                {this.state.code && <Redirect to={`error/${this.state.code}`}/>}
                <Button waves="light"><Link to={'/'}><Icon
                    left
                >home</Icon></Link></Button>
                <Button waves="light"><Link to={`/${this.props.match.params.id - 1}`}><Icon
                    left
                >chevron_left</Icon></Link></Button>
                <Button waves="light"><Link to={`/${parseInt(this.props.match.params.id) + 1}`}><Icon
                    left
                >chevron_right</Icon></Link></Button>
                <Fetch data={this.state.rows}/>
                {this.state.rows.length === 0 && <Preloader size="big"/>}
            </div>
        );
    }
}
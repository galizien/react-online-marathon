import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {

    state = {
        persons: '',
        birth_year: '',
        count: 1
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 })
    }

    componentDidMount() {
        axios.get(`https://swapi.dev/api/people/${this.state.count}`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            });
    }

    render() {
        return (
            <div>
                <h1>{this.state.persons.name}</h1>
                <h3>{this.state.persons.birth_year}</h3>
                <button onClick={this.increment}> Next</button>
            </div >
        )
    }
}
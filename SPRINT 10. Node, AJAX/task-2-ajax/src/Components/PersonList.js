import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {

    state = {
        persons: '',
        birth_year: '',
        count: 1
    }

    load() {
        axios.get(`https://swapi.dev/api/people/${this.state.count}/`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            });

    }

    componentDidMount() {
        this.load();
    }

    componentDidUpdate() {
        this.load();
    }

    increment = () => {
        const count = this.state.count + 1;
        this.setState({ count });
    }

    render() {
        return (
            <div>
                <h1>{this.state.persons.name}</h1>
                <h3>{this.state.persons.birth_year}</h3>
                <img src={`https://starwars-visualguide.com/assets/img/characters/${this.state.count}.jpg`}></img>
                <button type="button" onClick={this.increment} id="button"> Next</button>

            </div >
        )
    }
}
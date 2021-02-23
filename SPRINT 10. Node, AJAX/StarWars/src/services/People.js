import React from "react";
import axios from "axios";

export default class People extends React.Component {
    state = {
        currentCharacter: {},
        currentIndex: 1
    };

    load() {
        axios
            .get(`https://swapi.dev/api/people/${this.state.currentIndex}/`)
            .then(res => {
                this.setState({ currentCharacter: res.data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    componentDidMount() {
        this.load();
    }

    componentDidUpdate() {
        this.load();
    }

    onNext = _ => {
        const currentIndex = this.state.currentIndex + 1;
        this.setState({ currentIndex });
    }

    render() {
        const { name, birth_year, gender, eye_color } = this.state.currentCharacter;

        return (
            <div>
                <button type="button" onClick={this.onNext} id="button">NEXT</button>
                <img src={`https://starwars-visualguide.com/assets/img/characters/${this.state.currentIndex}.jpg`} alt="Person" />
                <h3>{name}</h3>
                <ul>
                    <li>Gender: {gender}</li>
                    <li>Birth Year: {birth_year}</li>
                    <li>Eye color: {eye_color}</li>
                </ul>
            </div>

        )
    }
}


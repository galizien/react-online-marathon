import React from "react";
import axios from "axios";

export default class Planets extends React.Component {
    state = {
        currentCharacter: {},
        currentIndex: 1
    };

    componentDidMount() {
        axios
            .get(`https://swapi.dev/api/planets/${this.state.currentIndex}/`)
            .then(res => {
                this.setState({ currentCharacter: res.data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    componentDidUpdate() {
        axios
            .get(`https://swapi.dev/api/planets/${this.state.currentIndex}/`)
            .then(res => {
                this.setState({ currentCharacter: res.data });
            })
            .catch(error => {
                console.log(error);
            });
    }
    render() {
        return (
            <div>
                <button type="button" onClick={() => this.setState({ currentIndex: this.state.currentIndex + 1 })} id="button">NEXT</button>
                <img src={`https://starwars-visualguide.com/assets/img/planets/${this.state.currentIndex}.jpg`} alt="Planet" />
                <h3>{this.state.currentCharacter.name}</h3>
                <ul>
                    <li>Planet name: {this.state.currentCharacter.name}</li>
                    <li>Diameter: {this.state.currentCharacter.diameter}</li>
                    <li>Population: {this.state.currentCharacter.population}</li>
                    <li>Climate: {this.state.currentCharacter.climate}</li> 
                </ul> 
            </div> 
                
        )
    }
}
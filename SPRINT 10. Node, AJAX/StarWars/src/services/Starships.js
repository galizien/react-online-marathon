import React from "react";
import axios from "axios";

export default class Starship extends React.Component {
    state = {
        currentCharacter: {},
        currentIndex: 1
    };

    componentDidMount() {
        axios
            .get(`https://swapi.dev/api/starships/${this.state.currentIndex}/`)
            .then(res => {
                this.setState({ currentCharacter: res.data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    componentDidUpdate() {
        axios
            .get(`https://swapi.dev/api/starships/${this.state.currentIndex}/`)
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
                <img src={`https://starwars-visualguide.com/assets/img/starships/${this.state.currentIndex}.jpg`} alt="Starship" />
                <h3>{this.state.currentCharacter.name}</h3>
                <ul>
                    <li>Model:  {this.state.currentCharacter.model}</li>
                    <li>Manufacturer: {this.state.currentCharacter.manufacturer}</li>
                    <li>Max atmosphering speed: {this.state.currentCharacter.max_atmosphering_speed}</li>
                    <li>Passengers: {this.state.currentCharacter.passengers}</li> 
                </ul> 
            </div> 
                
        )
    }
}

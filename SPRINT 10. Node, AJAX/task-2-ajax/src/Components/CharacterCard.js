import React from "react";
import * as axios from 'axios';

class CharacterCard extends React.Component {
    state = {
        isLoading: true,
        idPerson: 0,
        idImg: 1,
    };

    async componentDidMount() {
        if (this.state.idPerson === 10) {
            this.state.idPerson = 0;
            this.state.idImg = 1;
        }

        let peopleData = await axios.get('https://swapi.dev/api/people/', {
            params: {
                results: 1,
                inc: 'name,eyeColor,gender,birthYear',
            }
        });

        peopleData = peopleData.data.results[this.state.idPerson];
        const name = peopleData.name;
        const eyeColor = peopleData.eye_color;
        const gender = peopleData.gender;
        const birthYear = peopleData.birth_year;
        this.setState({
            ...this.state, ...{
                isLoading: false,
                img: `https://starwars-visualguide.com/assets/img/characters/${this.state.idImg}.jpg`,
                name,
                eyeColor,
                gender,
                birthYear,
                idPerson: this.state.idPerson + 1,
                idImg: this.state.idImg + 1
            }
        });
    }
    render() {
        return (
            <div className={style.cardWrapper}>
                <div className={style.cardImgContainer}>
                    <img
                        src={this.state.img}
                        alt="" />
                </div>
                <div className={style.cardInfoContainer}>
                    <h3 className={style.cardName}>
                        {this.state.name}
                    </h3>
                    <ul className={style.cardInfo}>
                        <li className={style.cardInfoItem}>
                            Gender: {this.state.gender}
                        </li>
                        <li className={style.cardInfoItem}>
                            Birth Year: {this.state.birthYear}
                        </li>
                        <li className={style.cardInfoItem}>
                            Eye Color: {this.state.eyeColor}
                        </li>
                    </ul>
                    <div className={style.cardButtonContainer}>
                        <button onClick={() => this.componentDidMount()}
                            className={style.cardButton}>
                            next
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CharacterCard;

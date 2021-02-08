import React from 'react';
import "./header.style.css";

import {People, Planets, Starship} from "../../services/sw-services";


export default class Header extends React.Component {

    constructor(props) {
        super(props);
       
        this.state = {
            pageNumber: 0
        }
    }
    render() {
        let compoment;
        switch(this.state.pageNumber) {
            case 0:
                compoment = <People />;
                break;
            case 1:
                compoment = <Planets />;
                break;
            case 2:
                compoment = <Starship />;
               break;
             default:
                 compoment = <People />;
                 break;
        }
        return (
            <div className="header-component">
                <header>
                    <a href="#" onClick={ () => this.setState({pageNumber: 0 })}>People</a>
                    <a href="#" onClick={ () => this.setState({pageNumber: 1 })}>Planets</a>
                    <a href="#" onClick={ () => this.setState({pageNumber: 2 })}>Starship</a> 
                    {compoment}  
                </header>          
            </div> 
        )
    }
}
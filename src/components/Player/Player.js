import React from 'react';
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'


const Player = (props) => {
    console.log(props);
    const {image, name, country, profession, base_price } = props.player;
    return (
        <div className="player">
            <img src={image} alt="" />
            <h5>Player Name: {name}</h5>
            <p>Country: {country}</p>
            <p>Player Details: {profession}</p>
            <p>Bidding Price: {base_price}</p>
            <button className="main-button"><FontAwesomeIcon icon={faUserPlus} />   Add to Team</button>
        </div>
    );
};

export default Player;
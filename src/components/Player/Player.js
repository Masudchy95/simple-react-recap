import React from 'react';
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'


const Player = (props) => {
    const {image, name, country, profession, base_price } = props.player;
    return (
        <div className="player col-3 card">
            <img src={image} alt="" />
            <h6>{name}</h6>
                Country: {country}
            <br /> 
                {profession}
            <p>Bidding Price: {base_price}</p>
            <button onClick={() => props.handleAddPlayer(props.player)}
             className="main-button"><FontAwesomeIcon icon={faUserPlus} />   Add to Team</button>
        </div>
    );
};

export default Player;
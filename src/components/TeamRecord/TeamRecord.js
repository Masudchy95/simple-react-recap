import React, { useEffect, useState } from 'react';
import './TeamRecord.css';
import mockData from '../../mockData/playerData';
import Player from '../Player/Player';


const TeamRecord = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        setPlayers(mockData);
    }, [])

    return (
        <div className="team-container">
            <div className="player-container">
                <h2>Here are the complete data of the world's best players. You can select the best 11 for your team. </h2>
                    {
                        players.map(player => (<Player player={player}></Player> ))
                    }
            </div>
            <div className="budget-container">
                <h3>This is the budget section.</h3>
                <p>Total Players: {players.length}</p>
            </div>
        </div>
    );
};

export default TeamRecord;
import React, { useEffect, useState } from 'react';
import './TeamRecord.css';
import mockData from '../../mockData/playerData';
import Player from '../Player/Player';
import Budget from '../Budget/Budget';


const TeamRecord = () => {
    const [players, setPlayers] = useState([]);
    const [budget, setBudget] = useState([]);

    useEffect(() => {
        setPlayers(mockData);
    }, [])

    const handleAddPlayer = (player) => {
        const newBudget = [...budget, player];
        setBudget(newBudget);
    }

    return (
        <div className="team-container">
            <div className="player-container">
                <h4>Here are the complete data of the world's best players. You can select the best 11 for your team. </h4>
                    {
                        players.map(player => (<Player 
                            handleAddPlayer = {handleAddPlayer}
                            player={player}
                            ></Player> ))
                    }
            </div>
            <div className="budget-container">
                    <Budget budget={budget}></Budget>
            </div>
        </div>
    );
};

export default TeamRecord;
import React from 'react';
import { Link } from 'react-router-dom';
import { teams } from '../teams.js';

export default class TeamList extends React.Component {
    render() {
        let teamElements = teams.map((team, index) => {
            return (
                <div key={index} className="swipe-container col-md-4 mx-auto">
                    <div className="swipe-card">
                        <Link to="/team">
                            <img width="100%" height="300" className="swipe-image" src={team.src} alt="person" />
                            <h3 className="swipe-card-header">{team.name}</h3>
                        </Link>
                    </div>
                </div>)
        });
        return (
            <div className="row">
                {teamElements}
            </div>
        )
    }
}
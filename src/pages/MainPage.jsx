import React from 'react';
import TeamList from '../components/TeamList.jsx';

export default class MainPage extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome to the main page</h1>
                <TeamList></TeamList>
            </div>
        )
    }
}
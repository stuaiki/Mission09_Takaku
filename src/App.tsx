import React from 'react';
import './App.css';
import yourData from './CollegeBasketballTeams.json';
let teamData = yourData;
interface PlayerProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

function Welcome() {
  return <h1>NCAA BasketBall Team List</h1>;
}

class Player extends React.Component<PlayerProps> {
  render() {
    const oneTeam = this.props;

    return (
      <div className="card">
        <h2>{oneTeam.school}</h2>
        <h3>Mascot: {oneTeam.name}</h3>
        <h3>
          Location: {oneTeam.city}, {oneTeam.state}
        </h3>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div>
      {teamData.teams.map((team, index) => (
        <Player key={index} {...team} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;

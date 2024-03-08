//Mission09
//Aiki Takaku
//Creating NCAA Team List Card
import React from 'react';
import './App.css';
// from json file, get data into a variable called yourData
import yourData from './CollegeBasketballTeams.json';

//set variable to teamData
let teamData = yourData;

//This is interface props
interface PlayerProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

// Welcome function to show header
function Welcome() {
  return <h1>NCAA BasketBall Team List</h1>;
}

//This is a class that extends from react component
class Player extends React.Component<PlayerProps> {
  render() {
    const oneTeam = this.props;

    return (
      //Return each school name, mascot name, and location in the data of json file
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
    //This is loop all the data in the file to go through and print out in html view
    <div>
      {teamData.teams.map((team, index) => (
        <Player key={index} {...team} />
      ))}
    </div>
  );
}

function App() {
  return (
    // call functions
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;

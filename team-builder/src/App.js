import React, { useState } from 'react';

import { Form } from "./components/Form.js";
import './App.css';



function App() {

  const teamData = [
    {id: 1,
      name: "Happy Rhenol",
      email: "Happy@email.com",
      role: "User Experience",
    }
  ];

  // this array that holds the objects that will be mapped out
  const [team, setTeam] = useState(teamData);

  // method that will be passed down into forms.js to create a new member
  const addNewTeamMember = (member) => {
    const newMember = {
      id: team.length + 1,
      name: member.name,
      email: member.email,
      role: member.role,
    }
    // copying and appending the new member to the team array
    setTeam([...team, newMember])
  }

  // send the addNewTeamMember to the form and we map the team to show on the screen
  return (
    <div className="App">
      <div>
        <Form addNewTeamMember={addNewTeamMember}/>
        <h1>Team Members</h1>
        <ul className="unordered-list">
          {team.map( (member) => (
            <li className="list-element" key={member.id}>Name: {member.name}<br/>Role: {member.role}<br/>Email: {member.email}
            <br/><button>Edit</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";


export function Form(props) {

	const { addNewTeamMember } = props;

	const emptyTeamMember = { id: null, name: "", email: "", role: "" }
  	const [teamMember, setTeamMember] = useState(emptyTeamMember);

  	function handleChange(event) {
    	setTeamMember( {...teamMember, [event.target.name]: event.target.value} )
  	}

  	function submit(event) {
    	event.preventDefault();
    	addNewTeamMember(teamMember)
    	setTeamMember(emptyTeamMember);
  	}


	return (

		<form 
			onSubmit={submit}>
			<label htmlFor="name"></label>
			<input 
				id="name"
				type="text"
				name="name"
				placeholder="Person's name"
				onChange={handleChange}
				value={teamMember.name}
			/>
			<label htmlFor="email"></label>
			<input id="email"
						 type="text"
						 name="email"
						 placeholder="email address"
						 onChange={handleChange}
						 value={teamMember.email}
			/>
			<label htmlFor="role"></label>
				<select name="role"
								onChange={handleChange}
								value={teamMember.role}
								placeholder="Role"
								id="role">
								<option />
								<option>User Experience</option>
								<option>Frontend Developer</option>
								<option>Backend Developer</option>
								<option>Firmware Engineer</option>
				</select>
			<button type="submit">submit</button>
		</form>
	);
}
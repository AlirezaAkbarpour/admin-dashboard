import './newUserPage.css';

export default function NewUserPage() {
  return (
    <div className='newUser'>
	    <h1 className="newUserTitle">Add new User</h1>
	    <form className="newUserForm">
		<div className="newUserItem">
			<label>Username</label>
			<input type="text" className="newUserInput" />
		</div>	
		<div className="newUserItem">
			<label>Full Name</label>
			<input type="text" className="newUserInput" />
		</div>
		<div className="newUserItem">
			<label>Email</label>
			<input type="email" className="newUserInput" />
		</div>   
		<div className="newUserItem">
			<label>Password</label>
			<input type="password" className="newUserInput" />
		</div>
		<div className="newUserItem">
			<label>Phone</label>
			<input type="tel" maxLength={11} className="newUserInput" />
		</div>    
		<div className="newUserItem">
			<label>Address</label>
			<input type="text" className="newUserInput" />
		</div>   
		<div className="newUserItem">
			<label>Gender</label>
			<div className="newUserGender">
			<input type="radio" name='gender' id='mail' value='mail' />
			<label for="mail">Mail</label>
			<input type="radio" name='gender' id='female' value='female' />
			<label for="female">Female</label>
			<input type="radio" name='gender' id='other' value='other' />
			<label for="other">other</label>
			</div>
		</div> 
		<div className="newUserItem">
			<label>Active</label>
			<select name="active" id="active" className="newUserSelect">
				<option value="yes">Yes</option>
				<option value="no">No</option>
			</select>
		</div>  
		<button className="newUserButton">Create</button>
	    </form>
    </div>
  )
}

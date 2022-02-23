import './userPage.css'
import {CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish} from '@material-ui/icons';
import {Link} from 'react-router-dom'

export default function UserPage() {
  return (
    <div className='user'>
	    <div className="userTitleContainer">
		    <h1 className="userTitle">Edit User</h1>
		<Link to='/newUser'>
		<button className="userAddButton">Create</button>
		</Link>	    
	    </div>
	    <div className="userContainer">
		    <div className="userShow">
			    <div className="userShowTop">
				<img 
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYtfZRhbGQtq2BapB2MXJfWIO2QriO5Wx3qQ&usqp=CAU" 
					alt="" 
					className="userShowImg" 
				/> 
				<div className="userShowTopTitle">
					<span className="userShowUsername">JonSnow</span>
					<span className="userShowUserTitle">Software Engineer</span>
				</div>
			    </div>

			    <div className="userShowBottom">

				    <span className="userShowTitle">Account Details</span>
				    
				    <div className="userShowInfo"> 
				    	<PermIdentity className='userShowIcon'/>
					<span className="userInfoTitle">jon Snow </span>		
				    </div>
				    <div className="userShowInfo"> 
				    	<CalendarToday className='userShowIcon'/>
					<span className="userInfoTitle">10.12.2004</span>		
				    </div>

				    <span className="userShowTitle">Concat Details</span>

				    <div className="userShowInfo"> 
				    	<PhoneAndroid className='userShowIcon'/>
					<span className="userInfoTitle">09478521022</span>		
				    </div>
				    <div className="userShowInfo"> 
				    	<MailOutline className='userShowIcon'/>
					<span className="userInfoTitle">jonSnow00@gmail.com</span>		
				    </div>
				    <div className="userShowInfo"> 
				    	<LocationSearching className='userShowIcon'/>
					<span className="userInfoTitle">Tehran Iran</span>		
				    </div>
			    </div>
		    </div>

		    <div className="userUpdate">
			<span className="userUpdateTitle">Edit</span>
			<form className="userUpdateForm">
				<div className="userUpdateLeft">
					<div className="userUpdateItem">
						<label>Username</label>
						<input 
							type="text" 
							placeholder='janSnow' 
							className='userUpdateInput'
						/>
					</div>
					<div className="userUpdateItem">
						<label>Full Name</label>
						<input 
							type="text" 
							placeholder='jan Snow' 
							className='userUpdateInput'
						/>
					</div>
					<div className="userUpdateItem">
						<label>BirthDay</label>
						<input 
							type="date" 
							className='userUpdateInput'
						/>
					</div>
					<div className="userUpdateItem">
						<label>Phone number</label>
						<input 
							type="tel" 
							placeholder='0994978520' 
							className='userUpdateInput'
							maxLength={11}
						/>
					</div>
					<div className="userUpdateItem">
						<label>Email</label>
						<input 
							type="email" 
							placeholder='janSnow01@gmail.com' 
							className='userUpdateInput'
						/>
					</div>
				</div>
				<div className="userUpdateRight">
					<div className="userUpdateUpload">
						<img 
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYtfZRhbGQtq2BapB2MXJfWIO2QriO5Wx3qQ&usqp=CAU"
							alt=""
							className='userUpdateImage' 
						/>
						<label htmlFor="file"><Publish className='userUpdateIcon'/></label>
						<input type="file" id='file' style={{display:'none'}}/>
					</div>						
					
					<button type='submit' className='userUpdateButton'>Update</button>
				</div>
				
			</form>
		    </div>
	    </div>
    </div>
  )
}

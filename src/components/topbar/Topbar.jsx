import React from 'react'
import './topbar.css';
import { NotificationsNone , Language , Settings } from '@material-ui/icons';
export default function Topbar() {
  return (
    <div className='topbar'>
	<div className="topbarWrapper">
		<div className="topLeft">
			<span className="logo">Aka Shop</span>
		</div>
		<div className="topRight">
			<div className="topbarIconsContainer">
				<NotificationsNone/>
				<div className="topIconBadge">2</div>
			</div>
			<div className="topbarIconsContainer">
				<Language/>
			</div>
			<div className="topbarIconsContainer">
				<Settings/>
			</div>
			<img src="https://cdn-icons-png.flaticon.com/512/147/147140.png" alt="profileImage" className='topAvatar'/>
		</div>
	</div>
    </div>
  )
}


import React from 'react'
import './topbar.css';
import { NotificationsNone , Language , Settings } from '@material-ui/icons';
export default function Topbar() {
  return (
    <div className='topbar'>
	<div className="topbarWrapper">
		<div className="topRight">
			<img src="https://cdn-icons-png.flaticon.com/512/147/147140.png" alt="profileImage" className='topAvatar'/>
			<div className="topbarIconsContainer">
				<Settings/>
			</div>
			<div className="topbarIconsContainer">
				<Language/>
			</div>
			<div className="topbarIconsContainer">
				<NotificationsNone/>
				<div className="topIconBadge">+۲</div>
			</div>
		</div>
		<div className="topLeft">
			<span className="logo">آکا شاپ</span>
		</div>
	</div>
    </div>
  )
}


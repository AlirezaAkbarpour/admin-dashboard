import React, { useState } from 'react'
import './topbar.css';
import { NotificationsNone , Language , Settings } from '@material-ui/icons';
import Badge from '@mui/material/Badge';


export default function Topbar() {
	const [activeStave,setActiveState] = useState(0);
	const [target,setTarget] = useState(false);

	const OpenBadge = (el)=>{
		switch(el){
			case 1:
				setActiveState(1)
				setTarget(target => !target)
				break;
			case 2:
				setActiveState(2)
				setTarget(target => !target)
				break;
			case 3 :
				setActiveState(3)
				setTarget(target => !target)
				break;
			default :
				setActiveState(0)
				setTarget(false)
		}
		
	}

  return (
    <div className='topbar'>
	<div className="topbarWrapper">
		<div className="topRight">
			<img src="https://cdn-icons-png.flaticon.com/512/147/147140.png" alt="profileImage" className='topAvatar'/>
			<div className="topbarIconsContainer">
				<Settings onClick={()=> OpenBadge(1)} />
					<div className={target === true && activeStave === 1 ? 'topbarBadge' : 'topbarBadge disabled'} >
						<h2 className='topbarBadgeTitle'>Setting</h2>
						<ul className='topbarBadgeList'>
							<li className="topbarBadgeItem">
								
							</li>
						</ul>
					</div>
				
			</div>
			<div className="topbarIconsContainer">
				<Language onClick={()=> OpenBadge(2)} />
				<div className={target === true && activeStave === 2 ? 'topbarBadge' : 'topbarBadge disabled'}>
					heloo
				</div>
			</div>
			<div className="topbarIconsContainer">
				<Badge badgeContent={2} color={'warning'} onClick={()=> OpenBadge(3)}>
				<NotificationsNone  />
				</Badge>
				<div className={target === true && activeStave === 3 ? 'topbarBadge' : 'topbarBadge disabled'}>
					heloo
				</div>
			</div>
		</div>
		<div className="topLeft">
			<span className="logo">آکا شاپ</span>
		</div>
	</div>
    </div>
  )
}


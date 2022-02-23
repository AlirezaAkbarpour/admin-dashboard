import './sidebar.css';
import { LineStyle , Timeline, TrendingUp, PermIdentity, Storefront, AttachMoney,
BarChart,MailOutline,DynamicFeed,ChatBubbleOutline,WorkOutline,
Report,
} from '@material-ui/icons';
import {Link} from 'react-router-dom';

// eslint-disable-next-line import/no-anonymous-default-export
export default function SideBar() {
  return (
    <div className='sidebar'>
	    <div className='sidebarWrapper'>
			<div className="sidebarMenu">
				<h3 className="sidebarTitle">داشبورد</h3>
				<ul className="sidebarList">
					<Link to='/' className='sidebarLink' >
						<li  className='sidebarListItem active'>
						<LineStyle className='sidebarIcons'/> 	
						خانه
						</li>
					</Link>
					
					<Link to='/analytics' className='sidebarLink'>
						<li  className='sidebarListItem'>
						<Timeline className='sidebarIcons'/> 
						آنالیز آمار 
						</li>
					</Link>
					
					<Link to='/sells' className='sidebarLink'>
						<li className='sidebarListItem'>
						<TrendingUp className='sidebarIcons'/> 
						فروش ها
						</li>	
					</Link>
					
				</ul>  
			</div>

			<div className="sidebarMenu">
				<h3 className="sidebarTitle">دسترسی سریع</h3>
				<ul className="sidebarList">
					<Link to='/users' className='sidebarLink'>
						<li  className='sidebarListItem'>
						<PermIdentity className='sidebarIcons'/> 
						کاربران
						</li>
					</Link>
					<Link to='/products' className='sidebarLink'>
						<li  className='sidebarListItem'>
						<Storefront className='sidebarIcons'/> 
						محصولات
						</li>
					</Link>
					<Link to='/transactions' className='sidebarLink'>
						<li className='sidebarListItem'>
						<AttachMoney className='sidebarIcons'/> 
						معاملات
						</li>
					</Link>
					<Link to='/reports' className='sidebarLink'>
						<li className='sidebarListItem'>
						<BarChart className='sidebarIcons'/> 
						شکایات ها
						</li>	
					</Link>
					
				</ul>
			
			</div>
					
			<div className="sidebarMenu">
				<h3 className="sidebarTitle">اعلانات</h3>
				<ul className="sidebarList">
					<Link to='/email' className='sidebarLink'>
						<li  className='sidebarListItem'>
						<MailOutline className='sidebarIcons'/> 
						صندوق پیام ها
						</li>
					</Link>
					<Link to='/feedback' className='sidebarLink'>
						<li  className='sidebarListItem'>
						<DynamicFeed className='sidebarIcons'/> 
						بازخورد
						</li>
					</Link>
					<Link to='/chats' className='sidebarLink'>
						<li className='sidebarListItem'>
						<ChatBubbleOutline className='sidebarIcons'/> 
						چت ها 
						</li>
					</Link>
					
				</ul>
			</div>

			<div className="sidebarMenu">
				<h3 className="sidebarTitle">کارکنان</h3>
				<ul className="sidebarList">
					<Link to='/manage' className='sidebarLink'>
						<li  className='sidebarListItem'>
						<WorkOutline className='sidebarIcons'/> 
						مدیریت
						</li>	
					</Link>
					<Link to='/analytics' className='sidebarLink'>
						<li className='sidebarListItem'>
						<TrendingUp className='sidebarIcons'/> 
						آنالیز
						</li>	
					</Link>
					<Link to='/reports' className='sidebarLink'>
						<li className='sidebarListItem'>
						<Report className='sidebarIcons'/> 
						گزارش ها
						</li>
					</Link>
					
				</ul>
			</div>
   	    </div>
    </div>
  )
}

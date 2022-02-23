import './userList.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { UserRows } from '../../dummyDate';
import {Link} from 'react-router-dom'
import { useState } from 'react';

export default function UserList() {
	const [data, setData] = useState(UserRows);
	
	const handleDelete = (id)=>{		
		setData(data.filter((item) => item.id !== id))
	}

	
	const columns = [
	{ field: 'id', headerName: 'ID', width:90 },
	{ field: 'user', headerName: 'User', width: 160 , renderCell: 
	(params)=> {
		return (<div className='userListUser'><img className='userListImg' src={params.row.avatar} alt=''/>{params.row.username}</div>)
	}},
	{ field: 'email', headerName: 'Email Address', width: 160 },
	{ field: 'status', headerName: 'Status User', width: 120 },
	{ field: 'transactions', headerName: 'Transactions User', width:140 },
	{ field: 'actions' , headerName: 'Actions button' , width: 120, renderCell: (params)=>{
		return(
			<>
			<Link to={'/user/' + params.row.id}>
				<button className='userListEdit'>Edit</button>
			</Link>
			<DeleteOutline className='userListDelete'  onClick={()=> handleDelete(params.row.id) }/>
			</>
		)
	}}
];

	return (
	<div className='userList'>
			<DataGrid
				rows={data}
				disableSelectionOnClick
				columns={columns}
				pageSize={8}
				rowsPerPageOptions={[5]}
				checkboxSelection			
			/>
	</div>
  )
}

import './productList.css'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { ProductRows } from '../../dummyDate';
import {Link} from 'react-router-dom'
import { useState } from 'react';

export default function ProductList() {
	const [data, setData] = useState(ProductRows);
	
	const handleDelete = (id)=>{		
		setData(data.filter((item) => item.id !== id))
	}

	const columns = [
		{ field: 'id', headerName: 'ID', width:90 },
		{ field: 'name', headerName: 'Name Product', width: 160 , renderCell: 
		(params)=> {
			return (<div className='productListItem'><img className='productListImg' src={params.row.img} alt='product_Picture'/>{params.row.name}</div>)
		}},
		{ field: 'stock', headerName: 'Stock Product', width: 160 },
		{ field: 'status', headerName: 'Status Product', width: 120 },
		{ field: 'transactions', headerName: 'Transactions Product', width:140 },
		{ field: 'actions' , headerName: 'Actions button' , width: 120, renderCell: (params)=>{
			return(
				<>
				<Link to={'/product/' + params.row.id}>
					<button className='productListEdit'>Edit</button>
				</Link>
				<DeleteOutline className='productListDelete'  onClick={()=> handleDelete(params.row.id) }/>
				</>
			)
		}}
	];

	return (
	<div className='productList'>
			<DataGrid
				rows={data}
				rowHeight={58}
				disableSelectionOnClick
				columns={columns}
				pageSize={8}
				rowsPerPageOptions={[5]}
				checkboxSelection			
			/>
	</div>
  )
}

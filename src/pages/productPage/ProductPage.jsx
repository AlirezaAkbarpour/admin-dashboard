import './productPage.css';
import {Link} from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import { ProductDate } from '../../dummyDate';
import {Publish} from '@material-ui/icons';

export default function ProductPage() {
  return (
    <div className='ProductPage'>
	    <div className="productTitleContainer">
		    <h1 className="productTitle">Product</h1>
		    <Link to='/new-product'>
			<button className='productAddButton'>Create</button>
		    </Link>
	    </div>
	    <div className="productPageTop">
		    <div className="productPageTop">
				<div className="productPageLeft">
					<Chart data={ProductDate} dataKey='Sells' title='Sells Performance'></Chart>
				</div>
		  	  	<div className="productPageRight">
					<div className="productTopInfo">
						<img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-product-red-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1629907846000" alt="product_Image" className="productImage" />
						<span className='productName'>Apple 13</span>
						
					</div>
					<div className="productInfoBottom">
						<div className="productInfoItem">
							<span className='productInfoKey'>id:</span>
							<span className='productInfoValue'>322</span>
						</div>
						<div className="productInfoItem">
							<span className='productInfoKey'>sells: </span>
							<span className='productInfoValue'>5242</span>
						</div>
						<div className="productInfoItem">
							<span className='productInfoKey'>active:</span>
							<span className='productInfoValue'>yes</span>
						</div>  
						<div className="productInfoItem">
							<span className='productInfoKey'>in stock:</span>
							<span className='productInfoValue'>no</span>
						</div> 
					</div>
					
				</div>
		    </div>
		  	
	    </div>  
	    <div className="productPageBottom">
				<form className="productForm">
					<div className="productFormLeft">
						<label>Product Name:</label>
						<input type="text" placeholder='Apple 13' />
						<label>In Stock</label>
						<select name="idStock" id="idStock">
							<option value="yes">Yes</option>
							<option value="no">No</option>
						</select>
						<label>Active</label>
						<select name="idActive" id="idActive">
							<option value="yes">Yes</option>
							<option value="no">No</option>
						</select>
					</div>
					<div className="productFormRight">
						<div className="productUpload">
							<img 
							src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-product-red-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1629907846000" 
							alt="Product_Image" 
							className='productUploadImg'
							/>
							<label htmlFor="file" className='productFormIcon'>
								<Publish ></Publish>
							</label>
							<input type="file" id='file' style={{display:'none'}}/>
						</div>
						<button className="productButton">Update</button>
					</div>
				</form>
		    </div>
    </div>
  )
}

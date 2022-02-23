import './newProduct.css'
import {Publish} from '@material-ui/icons';

export default function NewProduct() {
  return (
     <div className='newProduct'>
	    <h1 className="newProductTitle">Add new Product</h1>
	    	<form className="newProductForm">
	   	 <div className="newProductFormLeft"> 
				<div className="newProductLeftItem">
					<label>Product Name</label>
					<input type="text" className="newProductInput" />
				</div>	
				<div className="newProductLeftItem">
					<label>Price</label>
					<input type="text" className="newUserInput" />
				</div>
				<div className="newProductLeftItem">
					<label>In Stock</label>
					<input type="number" className="newUserInput" />
				</div>	
				
			</div> 
			<div className="newProductFormRight">
				<div className="newProductUpload">
					<img 
					src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-product-red-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1629907846000" 
					alt="Product_Image" 
					className='newProductUploadImg'
					/>
					<label htmlFor="file" className='newProductFormIcon'>
						<Publish ></Publish>
					</label>
					<input type="file" id='file' style={{display:'none'}}/>
				</div>
				<button className="newProductButton" type='submit'>Create</button>  
	  		</div>
			
	 	   </form>
	  
	   
	   
    </div>
  )
}

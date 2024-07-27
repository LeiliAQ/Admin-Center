import React from 'react'
import './product.css'
import {Link} from 'react-router-dom'
import Chart from '../../Components/Charts/Chart'
import {productsData} from '../../data.js'
import { MdOutlinePublish } from "react-icons/md";

export default function product() {
  return (
    <div className='Product'>
      <div className="productTtitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to='/newproduct'>
          <button className="productAddButton">Create</button>
        </Link>
      </div>

      <div className="productTop">
        <div className="productTopLeft">
            <Chart title="Sale in Last 6 Months"  data={productsData} dataKey='Sales' style={{width:'100%',height:'400px'}}/>
        </div>

        <div className="productTopRight">
          <div className="productInfoTop">
            <img src='./assets/images/shoes.jpg' alt="" className="productInfoImg" />
            <span className='productName'>Shoes</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">ID:</span>
              <span className="productInfoValue">123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Name:</span>
              <span className="productInfoValue">Shoes</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Sales:</span>
              <span className="productInfoValue">$3400</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Active:</span>
              <span className="productInfoValue">Yes</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">In Stock:</span>
              <span className="productInfoValue">No</span>
            </div>
          </div>
        </div>
      </div>

      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder='Shoes' />
            <label>In Stock</label>
            <select name="inStock" id="idStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src="./assets/images/shoes.jpg" alt="" className="productUploadImg" />
              <label for="file">
                <MdOutlinePublish/>
              </label>
              <input type="file" id="file" style={{display:"none"}} />
            </div>
            <button className="productButton">Upload(Edit)</button>
          </div>
        </form>
      </div>
    </div>
  )
}

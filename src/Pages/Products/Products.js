import React, { useState } from 'react';
import { products } from './../../data';
import './Products.css';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import {Link} from 'react-router-dom'
import { MdDeleteOutline } from "react-icons/md";

export default function UserList() {
  const [productsData, setProductData] = useState(products);
  const deleteProduct= id=>{
    setProductData(productsData.filter(item=>item.id!==id))
  }
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'title',
      headerName: 'Name',
      width: 230,
      renderCell: (params) => {
        return(
          <>
          <Link to='/'>
            <div className='userListUser'>
              <img className='userListImg' src={params.row.avatar} alt='' />
              {params.row.title}
            </div>
          </Link>
        </>
        )
      }
           
    },
    {field: 'price', headerName: 'Price', width: 230},
    {field: 'transaction', headerName: 'Transaction', width: 160},
    {field: 'action', headerName: 'Action', width: 200,
      renderCell: (params)=>{
        return(
          <div>
          <Link to={`/product/${params.row.id}`}>
            <button className='userListEdit'>
               Edit
            </button>
          </Link> 
          <button className='userListDelete'
          onClick={()=>deleteProduct(params.row.id)}>
              Delete
          </button>
          </div>
        )
      }
    },
  ];

  return (
    <Box sx={{ height: 400, width: '90%' }} className='userList'>
      <DataGrid
        rows={productsData}
        columns={columns}
        pageSize={3}
        disableSelectionOnClick
        rowHeight={60}
        checkboxSelection
      />
      
    </Box>
  );
}
